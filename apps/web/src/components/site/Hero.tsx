'use client';

import { useHome } from '../../hooks/useHome';

const fallbackHero = '/images/hero-reference.jpg';

export function Hero() {
  const { data, isLoading, isError } = useHome();
  const hero = data?.hero;
  const imageUrl = hero?.imageUrl || fallbackHero;

  const style = { backgroundImage: `url("${imageUrl}")` };

  return (
    <section id="top" className="hero" aria-label="Gift4U hero" style={style}>
      <a
        className="hero-link"
        href={hero?.ctaHref || '#best-sellers'}
        aria-label={hero?.ctaText || 'Shop now'}
      />
      {isLoading && <span className="sr-only">Loading homepage hero</span>}
      {isError && <span className="sr-only">Using the default Gift4U hero</span>}
    </section>
  );
}
