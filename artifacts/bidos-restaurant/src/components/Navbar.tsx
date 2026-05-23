import { useEffect, useState } from "react";
import logoPath from "@assets/EBCB8985-4767-402D-B185-129AEA065EE0_1779284615864.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-white/8 py-3 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={logoPath}
              alt="Bido's Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain drop-shadow-md"
            />
            <span className="font-display text-2xl tracking-wider text-primary hidden sm:block glow-text">
              BIDO'S
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 md:gap-8 font-sans font-medium text-sm md:text-base">
            <button
              onClick={() => scrollTo("menu")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollTo("specials")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Specials
            </button>
            <button
              onClick={() => scrollTo("story")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollTo("hours")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Hours
            </button>
            <a
              href="https://order.toasttab.com/online/babas-bidos"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-black px-5 py-2 rounded-full font-bold uppercase tracking-wide hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(252,163,17,0.5)] animate-pulse-glow"
            >
              Order Online
            </a>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden">
          <img
            src={logoPath}
            alt="Bido's Logo"
            className="h-20 w-20 object-contain mb-2"
          />
          {["menu", "specials", "story", "hours", "order"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-display text-5xl uppercase tracking-wider text-white hover:text-primary transition-colors"
            >
              {id === "order" ? "Order Now" : id}
            </button>
          ))}
          <a
            href="https://order.toasttab.com/online/babas-bidos"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-primary text-black px-10 py-4 rounded-full font-display text-3xl uppercase tracking-widest hover:bg-primary/90 transition-all glow-box"
          >
            Order Online
          </a>
        </div>
      )}
    </>
  );
}
