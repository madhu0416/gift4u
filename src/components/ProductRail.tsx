import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";

const products = [
  {
    name: "Personalised Photo Frame",
    category: "Personalised",
    price: 799,
    oldPrice: 999,
    rating: "4.8",
    color: "bg-[#f8d9e4]",
  },
  {
    name: "Premium Celebration Hamper",
    category: "Hampers",
    price: 1499,
    oldPrice: 1899,
    rating: "4.9",
    color: "bg-[#f6e5c8]",
  },
  {
    name: "Couple Memory Gift Box",
    category: "Anniversary",
    price: 1199,
    oldPrice: 1499,
    rating: "4.7",
    color: "bg-[#dce8f5]",
  },
  {
    name: "Elegant Wedding Gift Set",
    category: "Wedding",
    price: 2499,
    oldPrice: 2999,
    rating: "4.9",
    color: "bg-[#e9ddf5]",
  },
];

export default function ProductRail() {
  return (
    <section id="best-sellers" className="bg-[#fff6f9] py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d92f66]">
              Loved by gift-givers
            </p>
            <h2 className="gift-heading mt-2 text-3xl font-bold text-[#172033] sm:text-4xl">
              Best Sellers
            </h2>
          </div>

          <Link
            href="/occasions"
            className="hidden text-sm font-bold text-[#d92f66] hover:underline sm:inline"
          >
            View all products
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-2xl border border-[#f0dfe6] bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`relative flex h-52 items-center justify-center ${product.color}`}
              >
                <span className="text-7xl" role="img" aria-label="Gift">
                  🎁
                </span>

                <button
                  type="button"
                  aria-label={`Add ${product.name} to wishlist`}
                  className="absolute right-4 top-4 rounded-full bg-white p-2.5 text-[#172033] shadow-sm transition hover:text-[#d92f66]"
                >
                  <Heart size={18} />
                </button>
              </div>

              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-[#d92f66]">
                  {product.category}
                </p>

                <h3 className="mt-2 text-lg font-bold text-[#172033]">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-[#172033]">
                  <Star size={16} className="fill-[#f5aa18] text-[#f5aa18]" />
                  {product.rating}
                  <span className="ml-1 font-normal text-[#667085]">(120 reviews)</span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xl font-bold text-[#172033]">
                    ₹{product.price}
                  </span>
                  <span className="text-sm text-[#667085] line-through">
                    ₹{product.oldPrice}
                  </span>
                </div>

                <button
                  type="button"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#d92f66] px-4 py-3 font-semibold text-white transition hover:bg-[#bd1d52]"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}