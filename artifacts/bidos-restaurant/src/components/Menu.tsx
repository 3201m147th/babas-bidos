import cheesesteakImg from "../assets/cheesesteak.png";
import burgerImg from "../assets/burger.png";
import wingsImg from "../assets/wings.png";
import lemonadeImg from "../assets/lemonade.png";

const CATEGORIES = [
  {
    title: "Cheesesteaks",
    image: cheesesteakImg,
    items: [
      { name: "Classic Bido's Cheesesteak", price: "$12.99", desc: "Thinly sliced ribeye, caramelized onions, and our signature molten cheese blend." },
      { name: "Mushroom Swiss Melt", price: "$13.99", desc: "Earthy roasted mushrooms and aged Swiss over savory grilled steak." },
      { name: "Spicy Jalapeño Steak", price: "$13.49", desc: "Bring the heat. Grilled jalapeños and pepper jack for a serious kick." },
      { name: "BBQ Brisket Steak", price: "$14.99", desc: "Slow-smoked brisket mixed with classic steak and honey BBQ sauce." }
    ]
  },
  {
    title: "Burgers",
    image: burgerImg,
    items: [
      { name: "The Bido Double", price: "$13.99", desc: "Two smashed patties, crispy edges, double cheese, and Bido sauce." },
      { name: "Smoky BBQ Crunch", price: "$12.99", desc: "Topped with crispy onion rings, bacon, and smoked BBQ drizzle." },
      { name: "Truffle Shroom Burger", price: "$14.49", desc: "Gourmet truffle aioli, roasted wild mushrooms, and melted Swiss." },
      { name: "Spicy Fire Bird", price: "$13.49", desc: "Crispy fried chicken breast drenched in our fiery chili oil." }
    ]
  },
  {
    title: "Wings",
    image: wingsImg,
    items: [
      { name: "Classic Buffalo", price: "6pc $9.99 / 12pc $17.99", desc: "The original unapologetic buffalo sauce. Sharp, tangy, and perfect." },
      { name: "Honey Gold", price: "6pc $10.49 / 12pc $18.99", desc: "Sweet honey meets golden mustard and a hint of smoke." },
      { name: "Garlic Parmesan", price: "6pc $10.49 / 12pc $18.99", desc: "Roasted garlic butter and freshly grated aged parmesan." },
      { name: "Lemon Pepper", price: "6pc $9.99 / 12pc $17.99", desc: "Zesty, peppery dry rub that leaves you craving more." }
    ]
  },
  {
    title: "Lemonade",
    image: lemonadeImg,
    items: [
      { name: "Classic Lemonade", price: "$3.99", desc: "Fresh squeezed lemons, pure cane sugar, icy cold." },
      { name: "Strawberry Bliss", price: "$4.49", desc: "Muddled fresh strawberries mixed with our classic lemonade." },
      { name: "Mango Habanero", price: "$4.99", desc: "Sweet tropical mango with a surprising fiery finish." },
      { name: "Blackberry Mint", price: "$4.49", desc: "Dark blackberries and crisp mint leaves for ultimate refreshment." }
    ]
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">
            The <span className="text-primary glow-text">Menu</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bold, unapologetic, and crafted with obsession. 
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {CATEGORIES.map((category, idx) => (
            <div key={category.title} className={`flex flex-col gap-8 md:gap-16 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              
              {/* Category Image */}
              <div className="md:w-1/2 relative group">
                <div className="absolute inset-0 bg-primary/20 blur-[50px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 glow-box">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <h3 className="absolute bottom-6 left-6 font-display text-4xl text-white uppercase tracking-widest glow-text">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Items List */}
              <div className="md:w-1/2 flex flex-col justify-center space-y-8">
                {category.items.map((item) => (
                  <div key={item.name} className="group cursor-default">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-sans font-bold text-primary whitespace-nowrap ml-4">
                        {item.price}
                      </span>
                    </div>
                    <div className="w-full border-t border-white/10 mb-2 border-dashed" />
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
