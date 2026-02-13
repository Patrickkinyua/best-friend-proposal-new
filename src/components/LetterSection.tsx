import ScrollReveal from "./ScrollReveal";

const LetterSection = () => {
  return (
    <section className="py-24 px-6 gradient-warm">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <div className="glass-card rounded-3xl p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-8">
              What I Truly Appreciate About You
            </h2>

            <div className="space-y-4 text-foreground leading-relaxed">
              <ScrollReveal delay={200}>
                <p>Cedella,</p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <p>
                  You've been my strength, my laughter, my support system, and my peace.
                  Through every phase of life, you've shown up — consistently, genuinely,
                  wholeheartedly.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={600}>
                <div className="py-2 space-y-1">
                  <p>You listen.</p>
                  <p>You understand.</p>
                  <p>You stay.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={800}>
                <p>
                  Not everyone finds a friend like you. And I don't take that lightly.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={1000}>
                <p>I'm grateful for you — every single day.</p>
              </ScrollReveal>
              <ScrollReveal delay={1200}>
                <p className="text-right italic text-muted-foreground pt-4">– Monicah</p>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LetterSection;
