import { useState, useEffect, useRef, useCallback } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const RunawayButton = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const runAway = useCallback(() => {
    const x = (Math.random() - 0.5) * 260;
    const y = (Math.random() - 0.5) * 160;
    setPos({ x, y });
  }, []);

  return (
    <button
      ref={btnRef}
      onMouseEnter={runAway}
      onTouchStart={(e) => { e.preventDefault(); runAway(); }}
      className="rounded-full border-2 border-border px-8 py-3.5 text-muted-foreground font-medium transition-all duration-300 text-lg select-none"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)`, transition: "transform 0.3s ease-out" }}
    >
      No 😢
    </button>
  );
};

const ProposalSection = () => {
  const [answered, setAnswered] = useState<null | "yes" | "already">(null);
  const [showQuestion, setShowQuestion] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (answered && audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio play failed:", err));
      setIsPlaying(true);
    }
  }, [answered]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShowQuestion(true), 1200);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      {/* Spotlight */}
      <div className="absolute inset-0 spotlight-glow pointer-events-none" />

      {/* Celebration overlay */}
      {answered && (
        <div className="fixed inset-0 z-50 flex items-center justify-center gradient-bg">
          {/* Confetti */}
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti rounded-sm"
              style={{
                left: `${Math.random() * 100}%`,
                width: Math.random() * 8 + 4,
                height: Math.random() * 12 + 6,
                background: [
                  "hsl(330 70% 55%)",
                  "hsl(340 60% 70%)",
                  "hsl(320 50% 75%)",
                  "hsl(350 60% 80%)",
                  "hsl(310 45% 70%)",
                ][i % 5],
                animationDelay: `${Math.random() * 1.5}s`,
                animationDuration: `${Math.random() * 2 + 2}s`,
              }}
            />
          ))}
          <div className="relative z-10 animate-fade-up max-w-lg px-6">
            <div className="text-5xl mb-6">🥂✨🥂</div>
            {answered === "yes" ? (
              <>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  It's Official! 🥂🎉
                </h2>
                <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
                  From this moment on, it's sealed — no take-backs, no fine print, no expiry date.
                </p>
                <p className="text-xl font-semibold text-foreground mb-3">
                  Best Friends Forever. 🥂✨
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-md mx-auto">
                  Through every season, every chapter, every plot twist life throws our way — we ride together. You're not just my best friend, you're my chosen family. And I wouldn't trade you for anything in this world.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  I Knew It 😌✨
                </h2>
                <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
                  You didn't even hesitate — and honestly? That's so us.
                </p>
                <p className="text-xl font-semibold text-foreground mb-3">
                  Documented Friendship. 📜🥂
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-md mx-auto">
                  Some bonds don't need a ceremony — but ours deserved one anyway. Here's to forever being each other's person, hype woman, therapist, and partner in everything.
                </p>
              </>
            )}
            <p className="text-lg font-medium text-foreground">✨ Monicah & Cedella — Together Forever ✨</p>

            {/* Audio Controls */}
            <div className="mt-10 flex items-center justify-center gap-6 bg-white/20 backdrop-blur-md py-3 px-6 rounded-full border border-white/30 animate-fade-in-slow">
              <button
                onClick={togglePlay}
                className="hover:scale-110 transition-transform p-2 rounded-full hover:bg-white/10"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 fill-current" />}
              </button>

              <button
                onClick={toggleMute}
                className="hover:scale-110 transition-transform p-2 rounded-full hover:bg-white/10"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-6 h-6 text-red-400" /> : <Volume2 className="w-6 h-6" />}
              </button>

              <div className="text-xs font-medium uppercase tracking-widest opacity-80">
                Playing: "Photograph - Ed Sheeran" 🎶
              </div>
            </div>

            <audio
              ref={audioRef}
              src="/photograph.mp3"
              loop
            />
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-2xl">
        <ScrollReveal>
          <p className="text-lg text-muted-foreground mb-12 italic">
            So here's something I've been thinking about…
          </p>
        </ScrollReveal>

        <div
          className={`transition-all duration-1000 ${showQuestion ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-10 leading-tight">
            Cedella, to more years of friendship?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setAnswered("yes")}
              className="rounded-full bg-primary px-8 py-3.5 text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
            >
              Yes, Always 🥂
            </button>
            <button
              onClick={() => setAnswered("already")}
              className="rounded-full bg-secondary px-8 py-3.5 text-secondary-foreground font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
            >
              Count me in ✨
            </button>
            <RunawayButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProposalSection;
