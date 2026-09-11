import { Header } from '../../components/site/Header';
import { CategoryHero } from '../../components/site/CategoryHero';
import { FeatureStrip } from '../../components/site/FeatureStrip';
import { ProductRail } from '../../components/site/ProductRail';
import { Footer } from '../../components/site/Footer';

const fallback = {
  eyebrow: 'Celebrate Your Story',
  title: 'Anniversary Gifts.',
  subtitle:
    'Thoughtful gifts for husbands, wives, couples and milestone anniversaries — from romantic keepsakes to premium surprises.',
  imageUrl: 'https://images.pexels.com/photos/30824760/pexels-photo-30824760.jpeg?auto=compress&cs=tinysrgb&w=1800',
  ctaText: 'Shop Collection',
  ctaHref: '#best-sellers',
  chips: ['Best Sellers', 'For Husband', 'For Wife', 'For Couples', '1st Anniversary', '10th Anniversary', '25th Anniversary'],
};

export default function AnniversaryPage() {
  return (
    <main>
      <Header />
      <CategoryHero slug="anniversary" fallback={fallback} />
      <FeatureStrip />
      <ProductRail />
      <Footer />
    </main>
  );
}
