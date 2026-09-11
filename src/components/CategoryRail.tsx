import Link from "next/link";

const categories = [
  { name: "Wedding", href: "/wedding" },
  { name: "Occasions", href: "/occasions" },
  { name: "Anniversary", href: "/anniversary" },
  { name: "Hampers", href: "/hampers" },
  { name: "Personalised", href: "/personalised" },
  { name: "Lifestyle", href: "/lifestyle" },
];

export default function CategoryRail() {
  return (
    <section className="home-section" aria-label="Shop by category">
      <div className="home-section-heading">
        <div>
          <h2>Shop by Category</h2>
          <p>Curated gifts for every celebration</p>
        </div>
        <Link href="/occasions">View All <span>→</span></Link>
      </div>

      <div className="home-category-list">
        {categories.map((category) => (
          <Link key={category.name} href={category.href} className="home-category-card">
            <span className="home-category-icon">✦</span>
            <span>{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
