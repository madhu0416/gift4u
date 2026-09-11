import { Header } from '../../components/site/Header';
import { CategoryHero } from '../../components/site/CategoryHero';
import { FeatureStrip } from '../../components/site/FeatureStrip';
import { ProductRail } from '../../components/site/ProductRail';
import { Footer } from '../../components/site/Footer';

const fallback = {
  eyebrow: 'Celebrate Every Reason',
  title: 'Gifts for Every Occasion.',
  subtitle:
    'From birthdays and anniversaries to festivals, housewarmings and weddings, discover a gifting path for every special day.',
  imageUrl: 'https://images.pexels.com/photos/38482257/pexels-photo-38482257.jpeg?auto=compress&cs=tinysrgb&w=1800',
  ctaText: 'Shop Collection',
  ctaHref: '#best-sellers',
  chips: ['Best Sellers', 'Birthdays', 'Festivals', 'Housewarming', 'Get Well Soon', 'Congratulations'],
};

export default function OccasionsPage() {
  return (
    <main>
      <Header />
      <CategoryHero slug="occasions" fallback={fallback} />
      <FeatureStrip />
      <ProductRail />
      <Footer />
    </main>
  );
}
