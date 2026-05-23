import burgerPath from "../assets/burger.png";
import cheesesteakPath from "../assets/cheesesteak.png";
import wingsPath from "../assets/wings.png";
import lemonadePath from "../assets/lemonade.png";

const ITEMS = [
  {
    img: cheesesteakPath,
    label: "Philly Cheesesteak",
    tag: "Fan Favorite",
    desc: "Grilled steak, peppers, mushrooms, onion and melted mozzarella on a fresh roll. Served with fries.",
    price: "from $11.99",
  },
  {
    img: wingsPath,
    label: "Wings",
    tag: "Order by the 50",
    desc: "Crispy whole wings sauced in your choice of flavor. Buffalo, BBQ, Lemon Pepper, Mango Habanero — you call it.",
    price: "from $6.99",
  },
  {
    img: burgerPath,
    label: "Smash Burger",
    tag: "Must Try",
    desc: "100% fresh beef smashed to a crispy edge, stacked with pickles, onion, tomato, lettuce and Bido's signature sauce.",
    price: "from $8.99",
  },
  {
    img: lemonadePath,
    label: "Frozen Lemonade",
    tag: "14 Flavors",
    desc: "Ice-cold frozen lemonade in a lineup that hits: Watermelon, Mango, Blue Raspberry, Peach, Original and more.",
    price: "$2.99",
  },
];

export function Specials() {
  return (
    <section id="specials" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-sans font-semibold uppercase tracking-[0.3em] text-sm mb-3">
            What We're Known For
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-wider">
            The <span className="text-primary glow-text">Hits</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((item) => (
            <div
              key={item.label}
              className="group relative rounded-2xl overflow-hidden border border-white/8 bg-card hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(252,163,17,0.15)]"
            >
              <div className="relative h-56 overflow-hidden bg-black">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <span className="absolute top-3 right-3 bg-primary text-black font-sans font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-display text-2xl text-white tracking-wide mb-2 group-hover:text-primary transition-colors">
                  {item.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold font-sans text-sm">
                    {item.price}
                  </span>
                  <a
                    href="https://order.toasttab.com/online/babas-bidos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-sans font-semibold uppercase tracking-wider text-white/50 hover:text-primary transition-colors"
                  >
                    Order →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
