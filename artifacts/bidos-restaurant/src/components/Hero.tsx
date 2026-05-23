import logoPath from "@assets/EBCB8985-4767-402D-B185-129AEA065EE0_1779284615864.png";
import flavorPath from "@assets/E4CDAD29-FDF7-41DA-9D41-4D0BCF0A83DD_1779284615864.png";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const TICKER = [
    "Philly Cheesesteak",
    "•",
    "Buffalo Wings",
    "•",
    "Smash Burgers",
    "•",
    "Chicago Italian Beef",
    "•",
    "Rice Bowls",
    "•",
    "Loaded Fries",
    "•",
    "Catfish",
    "•",
    "Frozen Lemonade",
    "•",
    "Party Wings",
    "•",
    "Gyro Plate",
    "•",
    "Nashville Hot",
    "•",
    "Chicken Tenders",
    "•",
  ];

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background z-10" />
        <img
          src={flavorPath}
          alt=""
          className="w-full h-full object-cover opacity-15 blur-sm scale-110"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/8 rounded-full blur-[140px] z-0 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[100px] z-0 pointer-events-none" />

      <div className="container relative z-10 px-4 flex flex-col items-center text-center mt-16">
        <div className="animate-float">
          <img
            src={logoPath}
            alt="Bido's Mascot"
            className="w-40 h-40 md:w-64 md:h-64 mb-8 drop-shadow-[0_0_40px_rgba(252,163,17,0.6)]"
          />
        </div>

        <h1 className="font-display text-7xl md:text-9xl lg:text-[10rem] text-white mb-4 uppercase tracking-wider leading-none animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-150">
          We Believe <br />
          <span className="text-primary glow-text">in Flavor.</span>
        </h1>

        <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-medium animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300 tracking-wide">
          Smoky, warm, and unapologetic.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-in zoom-in fade-in duration-1000 delay-500">
          <a
            href="https://order.toasttab.com/online/babas-bidos"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-black font-display text-2xl uppercase tracking-widest px-10 py-4 rounded-full transition-all hover:scale-105 hover:bg-primary/90 glow-box"
          >
            Order Online
          </a>
          <button
            onClick={() => scrollTo("menu")}
            className="border border-white/20 text-white font-display text-2xl uppercase tracking-widest px-10 py-4 rounded-full transition-all hover:scale-105 hover:border-primary/50 hover:text-primary backdrop-blur-sm"
          >
            See the Menu
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <button
          onClick={() => scrollTo("marquee")}
          className="text-primary/50 hover:text-primary transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div id="marquee" className="absolute bottom-0 left-0 right-0 z-10 border-t border-primary/20 bg-primary/5 backdrop-blur-sm py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee gap-8">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span
              key={i}
              className={`font-display text-lg uppercase tracking-widest ${item === "•" ? "text-primary" : "text-white/60"}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
