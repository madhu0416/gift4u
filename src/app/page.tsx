import Header from "@/components/Header";
import CategoryRail from "@/components/CategoryRail";
import ProductRail from "@/components/ProductRail";
import GiftForEveryone from "@/components/GiftForEveryone";
import NewLaunches from "@/components/NewLaunches";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section id="top" className="home-hero" aria-label="Gift4U hero">
          <a className="home-hero-hotspot" href="/wedding" aria-label="Explore Wedding Gifts" />
          <a className="home-hero-secondary" href="/occasions">Shop by Occasion</a>
        </section>

        <section className="home-feature-strip" aria-label="Gift4U benefits" />

        <CategoryRail />
        <GiftForEveryone />
        <ProductRail />
        <NewLaunches />
        <Footer />
      </main>
    </>
  );
}
