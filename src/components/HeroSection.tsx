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

      <div className="relative z-10 max-w-2xl animate-fade-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground mb-6">
          Cedella… To More Years of Friendship 🥂
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-4 leading-relaxed">
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
