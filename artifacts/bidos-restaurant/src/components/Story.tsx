import flavorPath from "@assets/E4CDAD29-FDF7-41DA-9D41-4D0BCF0A83DD_1779284615864.png";

export function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-6 bg-primary/8 blur-3xl rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl">
              <img
                src={flavorPath}
                alt="Bido's Story"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <div>
              <p className="text-primary font-sans font-semibold uppercase tracking-[0.3em] text-sm mb-4">
                Chicago Made
              </p>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-wide leading-tight">
                The Legend <br />
                <span className="text-primary glow-text">of Bido</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                It started with a grill, a dream, and a neighborhood that was hungry for something real. Bido wasn't just a cook — he was a flavor fanatic who wouldn't let a dish leave the kitchen until it was undeniable.
              </p>
            </div>

            <blockquote className="border-l-2 border-primary pl-5 py-2 italic text-foreground text-lg">
              "If it doesn't make you close your eyes on the first bite, we don't serve it."
              <cite className="block text-primary text-sm not-italic uppercase tracking-widest mt-3 font-sans font-semibold">
                — Bido
              </cite>
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
}
