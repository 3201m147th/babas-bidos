import promotionImage from "@assets/020EC184-B518-441A-B3B5-00AB23C7DF9C_1789575972174.png";

export function Promotion() {
  return (
    <section
      id="promotion"
      aria-labelledby="promotion-heading"
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Featured Promotion
          </p>
          <h2
            id="promotion-heading"
            className="font-display text-5xl uppercase tracking-wider text-white md:text-7xl"
          >
            Pick Any <span className="glow-text text-primary">2</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Mix and match your favorites with Bido&apos;s latest special offer.
          </p>

          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-[0_20px_80px_rgba(252,163,17,0.16)]">
            <img
              src={promotionImage}
              alt="Bido's Pick Any 2 promotion with $15 and $20 mix-and-match meal options"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}