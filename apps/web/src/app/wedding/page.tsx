import { Header } from '../../components/site/Header';
import { CategoryHero } from '../../components/site/CategoryHero';
import { FeatureStrip } from '../../components/site/FeatureStrip';
import { ProductRail } from '../../components/site/ProductRail';
import { Footer } from '../../components/site/Footer';

const fallback = {
  eyebrow: 'The Gift4U Wedding Edit',
  title: 'Celebrate Their Forever.',
  subtitle:
    'Thoughtful gifts for every love story, wedding ritual and new beginning — from personalised keepsakes to complete wedding combos.',
  imageUrl: 'https://images.pexels.com/photos/31002333/pexels-photo-31002333.jpeg?auto=compress&cs=tinysrgb&w=1800',
  ctaText: 'Explore Wedding Gifts',
  ctaHref: '#best-sellers',
  chips: ['Hindu', 'Muslim', 'Christian', 'Sikh', 'Bengali', 'Punjabi', 'Gujarati', 'Rajasthani', 'More Cultures'],
};

export default function WeddingPage() {
  return (
    <main>
      <Header />
      <CategoryHero slug="wedding" fallback={fallback} />
      <FeatureStrip />
      <ProductRail />
      <Footer />
    </main>
  );
}
