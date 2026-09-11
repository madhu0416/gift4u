import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import { db } from '../lib/firebase';

export type HomeHero = {
  id: string;
  sectionKey: string;
  title: string | null;
  subtitle: string | null;
  imageUrl: string | null;
  ctaText: string | null;
  ctaHref: string | null;
};

export async function getHome(): Promise<{ hero: HomeHero | null }> {
  const heroQuery = query(
    collection(db, 'homepage_sections'),
    where('sectionKey', '==', 'hero'),
    where('isActive', '==', true),
    orderBy('position', 'asc'),
    limit(1),
  );

  const snapshot = await getDocs(heroQuery);
  const first = snapshot.docs[0];
  if (!first) return { hero: null };

  const data = first.data();
  return {
    hero: {
      id: first.id,
      sectionKey: data.sectionKey ?? 'hero',
      title: data.title ?? null,
      subtitle: data.subtitle ?? null,
      imageUrl: data.imageUrl ?? null,
      ctaText: data.ctaText ?? null,
      ctaHref: data.ctaHref ?? null,
    },
  };
}
