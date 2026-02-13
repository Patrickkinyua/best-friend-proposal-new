import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-background/40 backdrop-blur-[2px]"
        style={{ maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)" }}
      />
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />

      <div className="relative z-10 max-w-3xl animate-fade-up">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-white mb-6 drop-shadow-2xl">
          <span className="block mb-2 opacity-90">Cedella…</span>
          <span
            className="inline-block animate-back-and-forth text-pink-200"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            To More Years of Friendship 🥂
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-4 leading-relaxed font-medium drop-shadow-lg">
          Some friendships turn into family. Ours turned into something unforgettable.
        </p>
        <p className="text-sm text-muted-foreground italic mb-10">– From Monicah</p>
        <a
          href="#our-story"
          className="inline-block rounded-full bg-primary px-8 py-3.5 text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Relive Our Journey
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
