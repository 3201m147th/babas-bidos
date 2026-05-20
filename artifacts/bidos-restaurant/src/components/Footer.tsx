import logoPath from "@assets/EBCB8985-4767-402D-B185-129AEA065EE0_1779284615864.png";

export function Footer() {
  return (
    <footer className="bg-background py-16 border-t border-white/5">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <img 
          src={logoPath} 
          alt="Bido's Logo" 
          className="w-20 h-20 mb-6 grayscale hover:grayscale-0 transition-all duration-500" 
        />
        
        <h3 className="font-display text-2xl text-primary uppercase tracking-widest mb-2">
          We Believe in Flavor
        </h3>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-muted-foreground mt-8">
          <p>&copy; {new Date().getFullYear()} Bido's. All rights reserved.</p>
          <a href="https://babasbidos.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            babasbidos.com
          </a>
        </div>
      </div>
    </footer>
  );
}
