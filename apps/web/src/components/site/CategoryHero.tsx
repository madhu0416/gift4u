'use client';

import { useCategoryPage } from '../../hooks/useCategoryPage';

export type CategoryFallback = {
  eyebrow: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaHref: string;
  chips: string[];
};

export function CategoryHero({ slug, fallback }: { slug: string; fallback: CategoryFallback }) {
  const { data, isLoading, isError } = useCategoryPage(slug);

  const eyebrow = data?.eyebrow || fallback.eyebrow;
  const title = data?.title || fallback.title;
  const subtitle = data?.subtitle || fallback.subtitle;
  const imageUrl = data?.imageUrl || fallback.imageUrl;
  const ctaText = data?.ctaText || fallback.ctaText;
  const ctaHref = data?.ctaHref || fallback.ctaHref;
  const chips = data?.chips?.length ? data.chips : fallback.chips;

  return (
    <>
      <section className="category-hero" aria-label={`${title} hero`}>
        <div className="category-hero-media" style={{ backgroundImage: `url("${imageUrl}")` }} />
        <div className="category-hero-scrim" />
        <div className="category-hero-content">
          <p className="category-hero-eyebrow">{eyebrow}</p>
          <h1 className="category-hero-title">{title}</h1>
          <p className="category-hero-subtitle">{subtitle}</p>
          <div className="category-hero-actions">
            <a className="category-cta-primary" href={ctaHref}>{ctaText}</a>
          </div>
          {isLoading && <span className="sr-only">Loading {title}</span>}
          {isError && <span className="sr-only">Using the default {title} content</span>}
        </div>
      </section>
      {chips.length > 0 && (
        <div className="category-chip-row" role="tablist" aria-label={`${title} filters`}>
          {chips.map((chip, i) => (
            <button key={chip} className={`category-chip${i === 0 ? ' active' : ''}`} type="button">
              {chip}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
