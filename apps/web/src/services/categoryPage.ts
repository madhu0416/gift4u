import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { db } from '../lib/firebase';

export type CategoryPage = {
  id: string;
  slug: string;
  eyebrow: string | null;
  title: string | null;
  subtitle: string | null;
  imageUrl: string | null;
  ctaText: string | null;
  ctaHref: string | null;
  chips: string[];
};

// One collection, one document per category page — same read pattern the
// approved homepage hero already uses, so this is consistent with Phase 2.
export async function getCategoryPage(slug: string): Promise<CategoryPage | null> {
  const q = query(
    collection(db, 'category_pages'),
    where('slug', '==', slug),
    where('isActive', '==', true),
    limit(1),
  );

  const snapshot = await getDocs(q);
  const first = snapshot.docs[0];
  if (!first) return null;

  const data = first.data();
  return {
    id: first.id,
    slug: data.slug ?? slug,
    eyebrow: data.eyebrow ?? null,
    title: data.title ?? null,
    subtitle: data.subtitle ?? null,
    imageUrl: data.imageUrl ?? null,
    ctaText: data.ctaText ?? null,
    ctaHref: data.ctaHref ?? null,
    chips: Array.isArray(data.chips) ? data.chips : [],
  };
}
