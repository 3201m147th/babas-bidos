import logoPath from "@assets/EBCB8985-4767-402D-B185-129AEA065EE0_1779284615864.png";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-x-hidden bg-black py-24">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />
      </div>

      <div className="container relative z-10 px-4 flex flex-col items-center text-center mt-8 md:mt-16">
        <div className="animate-float">
          <img
            src={logoPath}
            alt="Bido's Mascot"
            className="w-24 h-24 sm:w-40 sm:h-40 md:w-64 md:h-64 mb-4 md:mb-8 drop-shadow-[0_0_40px_rgba(252,163,17,0.6)]"
          />
        </div>

        <h1 className="font-display text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] text-white mb-2 md:mb-4 uppercase tracking-wider leading-none animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-150">
          We Believe <br />
          <span className="text-primary glow-text">in Flavor.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-12 font-medium animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300 tracking-wide">
          Smoky, warm, and unapologetic.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <a
            href="https://order.toasttab.com/online/babas-bidos"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-black font-display text-2xl uppercase tracking-widest px-10 py-4 rounded-full transition-all hover:scale-105 hover:bg-primary/90 glow-box"
          >
            Order Online
          </a>
          <a
            href="https://www.toasttab.com/babas-bidos/rewardsSignup"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary/60 text-primary font-display text-2xl uppercase tracking-widest px-10 py-4 rounded-full transition-all hover:scale-105 hover:bg-primary hover:text-black backdrop-blur-sm"
          >
            Bido's Rewards
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
          onClick={() => scrollTo("story")}
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
    </section>
  );
}
