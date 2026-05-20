import flavorPath from "@assets/E4CDAD29-FDF7-41DA-9D41-4D0BCF0A83DD_1779284615864.png";

export function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative noise/texture could go here */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full" />
            <img 
              src={flavorPath} 
              alt="Bido's Story Illustration" 
              className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl rounded-2xl border border-white/5"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-wide">
              The Legend <br />
              <span className="text-primary glow-text">of Bido</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                It started with a grill, a dream, and a neighborhood that was hungry for something real. Bido wasn't just a chef; he was a flavor fanatic. Legend has it he spent three years perfecting the ultimate cheese pull and another two making sure the smoke hit the wings just right.
              </p>
              <p>
                There's no secret ingredient—just fire, passion, and unapologetic swagger. Whether it's a charred double smash burger or a cheesesteak that melts in your mouth, every bite at Bido's has a story.
              </p>
              <p className="font-semibold text-foreground border-l-2 border-primary pl-4 py-1 italic">
                "If it doesn't make you close your eyes on the first bite, we don't serve it." <br/>
                <span className="text-primary text-sm not-italic uppercase tracking-widest mt-2 block">— Bido</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
