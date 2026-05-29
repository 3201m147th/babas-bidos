export function Order() {
  return (
    <section id="order" className="py-32 relative overflow-hidden bg-background border-y border-white/5">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-primary/15 blur-[160px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/10 blur-[80px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <p className="text-primary font-sans font-semibold uppercase tracking-[0.3em] text-sm mb-6">
          Don't Wait — It's Hot Right Now
        </p>
        <h2 className="font-display text-6xl md:text-9xl text-white uppercase tracking-widest mb-6 glow-text leading-none">
          Ready <br className="md:hidden" /> to Eat?
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Skip the line. Order online for fast pickup or delivery — straight to your door, still hot.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://order.toasttab.com/online/babas-bidos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-black font-display text-3xl uppercase tracking-widest px-14 py-5 rounded-full transition-all hover:scale-105 hover:bg-primary/90 glow-box"
          >
            Order Now
          </a>
          <a
            href="https://www.toasttab.com/babas-bidos/rewardsSignup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-primary/60 text-primary font-display text-2xl uppercase tracking-widest px-10 py-5 rounded-full transition-all hover:scale-105 hover:bg-primary hover:text-black"
          >
            Bido's Rewards
          </a>
          <a
            href="tel:+17084009918"
            className="inline-block border border-white/20 text-white font-display text-2xl uppercase tracking-widest px-10 py-5 rounded-full transition-all hover:scale-105 hover:border-primary/50 hover:text-primary"
          >
            Call Us
          </a>
        </div>

        <p className="text-muted-foreground text-sm mt-8 font-sans">
          Powered by Toast · Pickup & Delivery Available
        </p>
      </div>
    </section>
  );
}
