import logoPath from "@assets/EBCB8985-4767-402D-B185-129AEA065EE0_1779284615864.png";
import flavorPath from "@assets/E4CDAD29-FDF7-41DA-9D41-4D0BCF0A83DD_1779284615864.png";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background visual elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10" />
        <img 
          src={flavorPath} 
          alt="We Believe in Flavor" 
          className="w-full h-full object-cover opacity-20 blur-sm scale-105"
        />
      </div>

      {/* Radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] z-0 pointer-events-none" />

      <div className="container relative z-10 px-4 flex flex-col items-center text-center mt-20">
        <img 
          src={logoPath} 
          alt="Bido's Mascot" 
          className="w-40 h-40 md:w-56 md:h-56 mb-8 drop-shadow-[0_0_30px_rgba(252,163,17,0.5)] animate-in fade-in zoom-in duration-1000"
        />
        
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white mb-6 uppercase tracking-wider glow-text animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-150">
          We Believe <br />
          <span className="text-primary">in Flavor.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-medium animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300">
          Smoky, warm, and unapologetic. Street food swagger meets neighborhood warmth.
        </p>

        <button 
          onClick={() => scrollTo("order")}
          className="bg-primary text-primary-foreground font-display text-2xl uppercase tracking-widest px-10 py-4 rounded-full transition-all hover:scale-105 hover:bg-primary/90 glow-box animate-in zoom-in fade-in duration-1000 delay-500"
        >
          Order Online
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <button onClick={() => scrollTo("story")} className="text-primary/50 hover:text-primary transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
