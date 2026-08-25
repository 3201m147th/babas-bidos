import specialsImage from "@assets/IMG_9585_1786156897424.jpeg";

export function DailySpecials() {
  return (
    <section
      id="daily-specials"
      className="relative overflow-hidden bg-black py-20 md:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Great Food. Great Deals.
          </p>
          <h2 className="font-display text-5xl uppercase tracking-wider text-white md:text-7xl">
            Daily <span className="glow-text text-primary">Specials</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Fresh deals every day at Bido&apos;s.
          </p>

          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-[0_20px_80px_rgba(252,163,17,0.16)]">
            <img
              src={specialsImage}
              alt="Bido's daily specials, including daily meal deals and order information"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}