import { useEffect, useState } from "react";
import logoPath from "@assets/EBCB8985-4767-402D-B185-129AEA065EE0_1779284615864.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border/50 py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={logoPath} alt="Bido's Logo" className="h-10 w-10 md:h-12 md:w-12 object-contain drop-shadow-md" />
          <span className="font-display text-2xl tracking-wider text-primary hidden sm:block glow-text">BIDO'S</span>
        </div>
        
        <div className="flex items-center gap-6 md:gap-8 font-sans font-medium text-sm md:text-base">
          <button onClick={() => scrollTo("menu")} className="text-foreground hover:text-primary transition-colors">Menu</button>
          <button onClick={() => scrollTo("story")} className="text-foreground hover:text-primary transition-colors">Our Story</button>
          <button onClick={() => scrollTo("order")} className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-bold uppercase tracking-wide hover:bg-primary/90 transition-all hover:shadow-[0_0_15px_rgba(252,163,17,0.4)]">
            Order Online
          </button>
        </div>
      </div>
    </nav>
  );
}
