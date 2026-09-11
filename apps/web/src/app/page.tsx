import { Header } from '../components/site/Header';
import { Hero } from '../components/site/Hero';
import { FeatureStrip } from '../components/site/FeatureStrip';
import { CategoryRail } from '../components/site/CategoryRail';
import { ProductRail } from '../components/site/ProductRail';
import { Footer } from '../components/site/Footer';

export default function HomePage() {
  return <main>
    <Header />
    <Hero />
    <FeatureStrip />
    <CategoryRail />
    <ProductRail />
    <section className="anchor-bank" aria-hidden="true">
      {['birthday','occasions','anniversary','personalised','hampers','home-living','more','offers','track-order','delivery','account','wishlist','cart','all-categories','all-products','wedding','contact','about','privacy','terms'].map(id => <span id={id} key={id} />)}
    </section>
    <Footer />
  </main>;
}
