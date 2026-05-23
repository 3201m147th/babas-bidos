import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Specials } from "@/components/Specials";
import { Story } from "@/components/Story";
import { Menu } from "@/components/Menu";
import { Hours } from "@/components/Hours";
import { Order } from "@/components/Order";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <Specials />
        <Story />
        <Menu />
        <Hours />
        <Order />
      </main>
      <Footer />
    </div>
  );
}
