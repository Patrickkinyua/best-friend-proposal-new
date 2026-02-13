import ScrollReveal from "./ScrollReveal";

const timelineItems = [
  {
    title: "The Day We Met",
    text: "I didn't know that day would introduce me to someone this important.",
  },
  {
    title: "The Inside Jokes & Chaos",
    text: "From random laughs to serious talks — we built something real.",
  },
  {
    title: "The Hard Days",
    text: "You stood by me when things weren't easy. That's when I knew you were different.",
  },
  {
    title: "The Unbreakable Bond",
    text: "Some friendships fade. Ours only gets stronger.",
  },
];

const TimelineSection = () => {
  return (
    <section id="our-story" className="relative py-24 px-6 gradient-warm">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16">
            How Our Friendship Grew
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" />

          {timelineItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div
                className={`relative flex items-start mb-12 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-5 sm:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10" />

                {/* Card */}
                <div
                  className={`ml-12 sm:ml-0 glass-card rounded-2xl p-6 sm:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-serif">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
