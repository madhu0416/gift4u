import { Header } from '../../components/site/Header';
import { CategoryHero } from '../../components/site/CategoryHero';
import { FeatureStrip } from '../../components/site/FeatureStrip';
import { ProductRail } from '../../components/site/ProductRail';
import { Footer } from '../../components/site/Footer';

const fallback = {
  eyebrow: 'Useful Can Be Beautiful',
  title: 'Lifestyle Gifting.',
  subtitle: 'Home, décor, plants, utility and premium lifestyle products for people with a point of view.',
  imageUrl: 'https://images.pexels.com/photos/38482257/pexels-photo-38482257.jpeg?auto=compress&cs=tinysrgb&w=1800',
  ctaText: 'Shop Collection',
  ctaHref: '#best-sellers',
  chips: ['Best Sellers', 'Home & Decor', 'Plants', 'Utility', 'Premium'],
};

export default function LifestylePage() {
  return (
    <main>
      <Header />
      <CategoryHero slug="lifestyle" fallback={fallback} />
      <FeatureStrip />
      <ProductRail />
      <Footer />
    </main>
  );
}
