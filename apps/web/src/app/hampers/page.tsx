import { Header } from '../../components/site/Header';
import { CategoryHero } from '../../components/site/CategoryHero';
import { FeatureStrip } from '../../components/site/FeatureStrip';
import { ProductRail } from '../../components/site/ProductRail';
import { Footer } from '../../components/site/Footer';

const fallback = {
  eyebrow: 'Curated With Care',
  title: 'Hampers For Every Reason.',
  subtitle:
    'Chocolates, dry fruits, sweets and premium combos, packed together and ready to send — no assembly required.',
  imageUrl: 'https://images.pexels.com/photos/38482257/pexels-photo-38482257.jpeg?auto=compress&cs=tinysrgb&w=1800',
  ctaText: 'Shop Collection',
  ctaHref: '#best-sellers',
  chips: ['Best Sellers', 'Chocolate Hampers', 'Dry Fruit Hampers', 'Premium Hampers', 'Corporate Hampers'],
};

export default function HampersPage() {
  return (
    <main>
      <Header />
      <CategoryHero slug="hampers" fallback={fallback} />
      <FeatureStrip />
      <ProductRail />
      <Footer />
    </main>
  );
}
