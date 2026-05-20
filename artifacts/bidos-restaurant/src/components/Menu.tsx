import { useState } from "react";

const CATEGORIES = [
  {
    id: "philly-steaks",
    label: "Philly Steaks",
    note: "All sandwiches served with fries",
    items: [
      { name: "Super Philly", price: "$14.99", desc: "Steak & chicken with grilled peppers, mushrooms, onions and American cheese." },
      { name: "Philly Steak", price: "$11.99", desc: "Grilled steak with green peppers, mushrooms, caramelized onions and American cheese." },
      { name: "Philly Chicken", price: "$11.99", desc: "Tender grilled chicken with green peppers, mushrooms or lettuce, tomato & mayo." },
      { name: "Philly Turkey", price: "$12.99", desc: "Grilled turkey with green peppers, mushrooms, sour cream, lettuce & tomato." },
      { name: "Philly Mix", price: "$14.99", desc: "Grilled steak & chicken with green peppers, mushrooms, onions and American cheese." },
      { name: "Crispy Philly", price: "$14.99", desc: "Crispy steak or chicken mix with green peppers and American cheese — a crunchy twist." },
    ],
  },
  {
    id: "chicago-style",
    label: "Chicago Style",
    note: "Classic Chicago-inspired subs",
    items: [
      { name: "Italian Beef", price: "$11.99", desc: "Our original Chicago-style beef dipped in au jus with giardiniera." },
      { name: "Italian Sausage Combo", price: "$14.99", desc: "Grilled Italian sausage with Italian beef and classic Chicago toppings." },
      { name: "Polish", price: "$6.99", desc: "Classic Polish sausage link on a fresh-baked bun with mustard and relish." },
      { name: "Gyro Sub", price: "$8.99", desc: "Traditional gyro meat with onions, tomato, and house tzatziki on a sub roll." },
      { name: "Jim Shoe", price: "6\" $12 / 12\" $17.99", desc: "A legendary Chicago combo — beef, gyro, corned beef on one loaded sub." },
      { name: "Beef & Chicken Combo", price: "$9.99", desc: "Italian beef and crispy chicken together on one roll. Classic Baba's move." },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    note: "All sandwiches and burgers served with fries",
    items: [
      { name: "Crispy Chicken — Single", price: "$9.99", desc: "Crispy golden fried chicken breast with lettuce, tomato and mayo." },
      { name: "Crispy Chicken — Double", price: "$12.99", desc: "Two crispy chicken breasts stacked with all the fixings." },
      { name: "Crispy Chicken — Triple", price: "$14.99", desc: "Three crispy chicken breasts — a serious sandwich for serious hunger." },
      { name: "Fried Chicken Sandwich (Buffalo or Nashville Hot)", price: "$9.99 – $14.99", desc: "Choose your heat — classic Buffalo or fiery Nashville hot style on a brioche bun." },
      { name: "Grilled Chicken — Single", price: "$9.99", desc: "Marinated grilled chicken breast with fresh toppings." },
      { name: "Grilled Chicken — Double", price: "$12.99", desc: "Double the grilled chicken, double the satisfaction." },
      { name: "Fish Sandwich — Single", price: "$9.99", desc: "Golden crispy fish fillet with tartar sauce and lettuce." },
      { name: "Fish Sandwich — Double", price: "$11.99", desc: "Two fillets for extra-generous portion of crispy, flaky fish." },
    ],
  },
  {
    id: "burgers",
    label: "Burgers",
    note: "All burgers served with fries",
    items: [
      { name: "Italian Beef Burger", price: "Single $10.99 / Double $12.99 / Triple $14.99", desc: "100% fresh patties topped with Italian corned beef and American cheese with our signature Bido's sauce." },
      { name: "Cheeseburger", price: "Single $8.99 / Double $10.99 / Triple $12.99", desc: "100% fresh beef patty seasoned with salt, pinch of salt and pepper. Topped with pickles, onions, mustard, ketchup and American cheese." },
      { name: "Gyro Cheeseburger", price: "Single $9.99 / Double $11.99 / Triple $13.99", desc: "A burger that's topped with gyro slices, tzatziki, tomato, onion and cheese. It's topped with sour cream, lettuce, tomato, American cheese." },
      { name: "Turkey Burger", price: "Single $9.99 / Double $11.99 / Triple $13.99", desc: "Turkey patty on a fresh bun with all the classic toppings and a dollop of sour cream." },
    ],
  },
  {
    id: "rice-bowls",
    label: "Rice Bowls",
    note: "A plate of rice topped with your choice of meat",
    items: [
      { name: "Chicken Rice Bowl", price: "$11.99", desc: "Rice loaded with seasoned chicken, saffron, NY hot sauce, onion, lettuce & tomato." },
      { name: "Gyro Rice Bowl", price: "$11.99", desc: "Rice loaded with sliced gyro, saffron, NY hot sauce, onion, lettuce & tomato." },
      { name: "Mix Rice Bowl (Chicken & Gyro)", price: "$11.99", desc: "Half chicken, half gyro over saffron rice with NY hot sauce, onion, lettuce & tomato." },
      { name: "Steak Rice Bowl", price: "$11.99", desc: "Tender grilled steak over saffron rice with NY hot sauce, onion, lettuce & tomato." },
    ],
  },
  {
    id: "wings",
    label: "Wings",
    note: "Served with fries",
    items: [
      { name: "3 pcs Wings", price: "$6.99", desc: "Three classic crispy wings, your choice of sauce." },
      { name: "4 pcs Wings", price: "$7.99", desc: "Four crispy wings perfect for a quick bite." },
      { name: "10 pcs Wings", price: "$9.99", desc: "Ten wings — great for sharing, even better for not sharing." },
      { name: "20 pcs Wings", price: "$26.99", desc: "Twenty wings for the crew." },
      { name: "30 pcs Wings", price: "$39.99", desc: "Thirty wings — feed the whole table." },
      { name: "50 pcs Wings", price: "$59.99", desc: "Fifty wings. You know what you came to do." },
    ],
  },
  {
    id: "party-wings",
    label: "Party Wings",
    note: "For the big occasions",
    items: [
      { name: "20 pcs Party Wings", price: "$19.99", desc: "Twenty meaty party wings — sauced up and ready to go." },
      { name: "50 pcs Party Wings", price: "$44.99", desc: "Fifty party wings to get the celebration started right." },
      { name: "100 pcs Party Wings", price: "$80.99", desc: "One hundred wings. Legendary. The full party package." },
    ],
  },
  {
    id: "tenders-nuggets",
    label: "Tenders & Nuggets",
    note: "Chicken done right",
    items: [
      { name: "Chicken Tenders 3 pcs", price: "$7.99", desc: "Three golden crispy chicken tenders with your dipping sauce." },
      { name: "Chicken Tenders 4 pcs", price: "$9.99", desc: "Four tenders — the sweet spot." },
      { name: "Chicken Tenders 6 pcs", price: "$13.99", desc: "Six tenders, plenty for a full meal." },
      { name: "Chicken Tenders 10 pcs", price: "$19.99", desc: "Ten tenders to keep the good times rolling." },
      { name: "Chicken Tenders 20 pcs", price: "$39.99", desc: "Twenty tenders — perfect for the whole group." },
      { name: "Chicken Nuggets 6 pcs", price: "$5.99", desc: "Six bite-sized nuggets served with fries." },
      { name: "Chicken Nuggets 10 pcs", price: "$7.99", desc: "Ten nuggets served with fries — the classic combo." },
    ],
  },
  {
    id: "seafood",
    label: "Seafood",
    note: "Baba's signature seafood",
    items: [
      { name: "Catfish Fillet 2 pcs", price: "$6.99", desc: "Golden fried catfish fillets, light and flaky." },
      { name: "Catfish Fillet 3 pcs", price: "$8.99", desc: "Three golden fried catfish fillets." },
      { name: "Catfish Fillet 4 pcs", price: "$10.99", desc: "Four fillets — generous and satisfying." },
      { name: "Catfish Fillet 5 pcs", price: "$14.99", desc: "Five fillets, the go-to order for seafood lovers." },
      { name: "Catfish Fillet 10 pcs", price: "$26.99", desc: "Ten fillets for sharing or going all out." },
      { name: "Catfish Fillet 20 pcs", price: "$48.99", desc: "Twenty fillets — the full seafood spread." },
      { name: "Shrimp 10 pcs", price: "$8.99", desc: "Ten crispy fried shrimp." },
      { name: "Shrimp 20 pcs", price: "$14.99", desc: "Twenty shrimp — a proper serving." },
      { name: "Shrimp 30 pcs", price: "$21.99", desc: "Thirty shrimp for the seafood enthusiast." },
      { name: "Shrimp 50 pcs", price: "$34.99", desc: "Fifty shrimp — party-ready." },
      { name: "Catfish Nuggets 10 pcs", price: "$8.99", desc: "Bite-sized catfish nuggets, golden and delicious." },
      { name: "Catfish Nuggets 15 pcs", price: "$10.99", desc: "Fifteen catfish nuggets, great for sharing." },
      { name: "Catfish Nuggets 25 pcs", price: "$14.99", desc: "Twenty-five nuggets — the big shareable order." },
      { name: "Catfish Nuggets Half Pan", price: "$34.99", desc: "A half pan of catfish nuggets for events and big gatherings." },
    ],
  },
  {
    id: "extras",
    label: "Sides & More",
    note: "Round out your meal",
    items: [
      { name: "Loaded Fries", price: "$9.99", desc: "Fries piled high with nacho cheese, jalapeños, sour cream, lettuce and tomato." },
      { name: "Loaded Nachos", price: "$9.99", desc: "Tortilla chips loaded with nacho cheese, jalapeños, sour cream, lettuce and tomato." },
      { name: "Regular Salad", price: "$6.99", desc: "Fresh garden salad with your choice of dressing." },
      { name: "Chicken Salad", price: "Market Price", desc: "Crispy or grilled chicken over a fresh garden salad." },
      { name: "Fried Shrimp Salad", price: "$18.99", desc: "Golden fried shrimp over fresh greens with your choice of dressing." },
      { name: "Pizza Puff 1 pc", price: "$3.99", desc: "Deep-fried golden dough stuffed with pizza fillings. A Chicago classic." },
      { name: "Cheese Sticks", price: "$3.99", desc: "Crispy breaded mozzarella sticks with marinara dipping sauce." },
      { name: "Onion Rings", price: "$3.99", desc: "Thick-cut crispy battered onion rings." },
      { name: "Coleslaw", price: "$3.49", desc: "Creamy house-made coleslaw, the perfect cool side." },
      { name: "Fries — Small", price: "$3.49", desc: "Golden crispy fries." },
      { name: "Fries — Large", price: "$4.99", desc: "Bigger golden crispy fries." },
      { name: "Cheese / Garlic / Buffalo Fries", price: "+$1.99", desc: "Upgrade any fries to cheese, garlic, or buffalo style." },
      { name: "By the Pan — Fries or Onion Rings", price: "$15", desc: "A full pan of fries or onion rings — built for the crowd." },
      { name: "Frozen Lemonade", price: "$2.99", desc: "Lime, Grape, Peach, Orange, Blue Raspberry, Watermelon, Green Apple, Banana, Pina Colada, Coconut, Blue Passion, Strawberry, Cherry, or Original." },
    ],
  },
  {
    id: "pick2",
    label: "Pick 2 Deals",
    note: "Mix & match combos",
    items: [
      {
        name: "Pick 2 — $10 Deal",
        price: "$10",
        desc: "Choose any 2: 2 pc whole wings, 2 pc chicken tenders, 5 pc shrimp, 5 pc catfish nuggets, 1 pc fish, 1 pc pizza puff, 3 pc buffalo wings. Comes with one small fries.",
      },
      {
        name: "Pick 2 — $15 Deal",
        price: "$15",
        desc: "Choose any 2: cheeseburger, gyro sandwich, philly sandwich, chicken sandwich, 4 pc whole wings, 6 pc buffalo wings, 2 pc catfish fillet, 10 pc shrimp, 3 pc chicken tenders. Comes with 2 small fries.",
      },
    ],
  },
];

export function Menu() {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);
  const active = CATEGORIES.find((c) => c.id === activeId)!;

  return (
    <section id="menu" className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">
            The <span className="text-primary glow-text">Menu</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Bold, unapologetic, and crafted with obsession.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="overflow-x-auto pb-3 mb-10">
          <div className="flex gap-2 min-w-max mx-auto w-fit">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                data-testid={`tab-${cat.id}`}
                onClick={() => setActiveId(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-sans font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200
                  ${activeId === cat.id
                    ? "bg-primary text-black shadow-[0_0_16px_hsl(var(--primary)/0.7)]"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active Category */}
        <div key={activeId} className="animate-fade-in">
          <div className="mb-8 border-b border-white/10 pb-4">
            <h3 className="font-display text-3xl md:text-4xl text-white uppercase tracking-wide glow-text">
              {active.label}
            </h3>
            {active.note && (
              <p className="text-primary/80 text-sm font-sans mt-1 italic">{active.note}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {active.items.map((item) => (
              <div
                key={item.name}
                data-testid={`menu-item-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group cursor-default"
              >
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-display text-xl text-foreground group-hover:text-primary transition-colors leading-tight">
                    {item.name}
                  </h4>
                  <span className="font-sans font-bold text-primary whitespace-nowrap ml-4 text-sm">
                    {item.price}
                  </span>
                </div>
                <div className="w-full border-t border-white/10 border-dashed mb-2" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
