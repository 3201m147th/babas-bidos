import logoPath from "@assets/EBCB8985-4767-402D-B185-129AEA065EE0_1779284615864.png";

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col items-start">
            <div
              className="flex items-center gap-3 cursor-pointer mb-4"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src={logoPath}
                alt="Bido's Logo"
                className="w-14 h-14 object-contain grayscale hover:grayscale-0 transition-all duration-500"
              />
              <span className="font-display text-2xl text-primary tracking-widest glow-text">
                BIDO'S
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Smoky, warm, and unapologetic. Chicago's home of bold flavor — wings, cheesesteaks, burgers, and everything in between.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg text-white uppercase tracking-wider mb-5">
              Navigate
            </h4>
            <ul className="space-y-3 font-sans text-sm text-muted-foreground">
              {[
                { label: "Menu", id: "menu" },
                { label: "Our Story", id: "story" },
                { label: "Hours & Location", id: "hours" },
                { label: "Order Online", id: "order" },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="hover:text-primary transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-white uppercase tracking-wider mb-5">
              Order Now
            </h4>
            <div className="space-y-3">
              <a
                href="https://order.toasttab.com/online/babas-bidos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-sans"
              >
                <span className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center text-primary text-xs">↗</span>
                Order on Toast
              </a>
              <a
                href="https://babasbidos.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-sans"
              >
                <span className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center text-primary text-xs">↗</span>
                babasbidos.com
              </a>
              <a
                href="tel:+17084009918"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-sans"
              >
                <span className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center text-primary text-xs">☎</span>
                (708) 400-9918
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-sans">
          <p>&copy; {new Date().getFullYear()} Baba's Bido's. All rights reserved.</p>
          <p className="text-white/20 uppercase tracking-widest text-xs font-display">
            We Believe in Flavor
          </p>
        </div>
      </div>
    </footer>
  );
}
