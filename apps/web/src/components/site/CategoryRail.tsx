const categories = [
  ['Wedding Gifts', 'wedding'],
  ['Wedding Combos', 'wedding-combos'],
  ['Bride & Groom', 'bride-groom'],
  ['Return Gifts', 'return-gifts'],
  ['Wedding Decor', 'wedding-decor'],
  ['Home & Living', 'home-living'],
];

export function CategoryRail() {
  return <section id="categories" className="categories-wrap" aria-label="Wedding categories">
    <div className="section-heading compact-heading">
      <div><h2>Shop Wedding Gifts</h2><p>Curated for every celebration</p></div>
      <a href="#all-categories">View All <span>→</span></a>
    </div>
    <div className="category-list">
      {categories.map(([label, slug]) => <a className="category-card" href={`#category-${slug}`} key={slug}>
        <span className="category-icon">✦</span>
        <span>{label}</span>
      </a>)}
    </div>
  </section>;
}
