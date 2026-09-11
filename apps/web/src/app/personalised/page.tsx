import { Header } from '../../components/site/Header';
import { CategoryHero } from '../../components/site/CategoryHero';
import { FeatureStrip } from '../../components/site/FeatureStrip';
import { ProductRail } from '../../components/site/ProductRail';
import { Footer } from '../../components/site/Footer';

const fallback = {
  eyebrow: 'Create Memories',
  title: 'Personalised Gifts.',
  subtitle: 'Add a name, photo, date, message or initials to make your gift feel unmistakably theirs.',
  imageUrl: 'https://images.pexels.com/photos/30824760/pexels-photo-30824760.jpeg?auto=compress&cs=tinysrgb&w=1800',
  ctaText: 'Shop Collection',
  ctaHref: '#best-sellers',
  chips: ['Mugs', 'Photo Frames', 'Cushions', 'Lamps', 'Accessories', 'Combos', 'Hampers', 'Wedding'],
};

export default function PersonalisedPage() {
  return (
    <main>
      <Header />
      <CategoryHero slug="personalised" fallback={fallback} />
      <FeatureStrip />
      <ProductRail />
      <Footer />
    </main>
  );
}
