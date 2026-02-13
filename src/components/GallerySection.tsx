import ScrollReveal from "./ScrollReveal";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";

const photos = [
  { src: memory1, caption: "Still one of my favorite days." },
  { src: memory2, caption: "Laughter looks better with you." },
  { src: memory3, caption: "Through everything." },
];

const GallerySection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16">
            Our Favorite Moments
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {photos.map((photo, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div className="group cursor-pointer">
                <div className="glass-card rounded-lg p-3 transition-all duration-300 group-hover:-translate-y-2 group-hover:rotate-1 group-hover:shadow-xl">
                  <div className="aspect-[3/4] overflow-hidden rounded-md mb-3">
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-center text-sm text-muted-foreground italic px-2 pb-1">
                    "{photo.caption}"
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
