export function Order() {
  return (
    <section id="order" className="py-32 relative overflow-hidden bg-card border-y border-white/5">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-primary/20 blur-[150px]" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="font-display text-6xl md:text-8xl text-white uppercase tracking-widest mb-6 glow-text">
          Ready to Eat?
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Skip the line. Order online for fast pickup or delivery.
        </p>
        
        <a 
          href="https://babasbidos.com/order" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-display text-3xl uppercase tracking-widest px-12 py-5 rounded-full transition-all hover:scale-105 hover:bg-primary/90 glow-box"
        >
          Order Now
        </a>
      </div>
    </section>
  );
}
