import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Menu } from "@/components/Menu";
import { Hours } from "@/components/Hours";
import { Order } from "@/components/Order";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [bannerHeight, setBannerHeight] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <AnnouncementBanner onHeightChange={setBannerHeight} />
      <Navbar topOffset={bannerHeight} />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Hours />
        <Order />
      </main>
      <Footer />
    </div>
  );
}
