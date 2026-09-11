"use client";

import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useWishlist } from "../contexts/WishlistContext";

const products = [
  {
    id: "personalised-photo-frame",
    name: "Personalised Photo Frame",
    category: "Personalised",
    price: 799,
    oldPrice: 999,
    rating: "4.8",
    tone: "one",
  },
  {
    id: "premium-celebration-hamper",
    name: "Premium Celebration Hamper",
    category: "Hampers",
    price: 1499,
    oldPrice: 1899,
    rating: "4.9",
    tone: "two",
  },
  {
    id: "couple-memory-gift-box",
    name: "Couple Memory Gift Box",
    category: "Anniversary",
    price: 1199,
    oldPrice: 1499,
    rating: "4.7",
    tone: "three",
  },
  {
    id: "elegant-wedding-gift-set",
    name: "Elegant Wedding Gift Set",
    category: "Wedding",
    price: 2499,
    oldPrice: 2999,
    rating: "4.9",
    tone: "four",
  },
];

export default function ProductRail() {
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleWishlist = (product: (typeof products)[number]) => {
    toggleWishlist({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      oldPrice: product.oldPrice,
      rating: product.rating,
    });
  };

  return (
    <section
      id="best-sellers"
      className="home-products-section"
      aria-label="Best sellers"
    >
      {/* SECTION HEADING */}

      <div className="home-section-heading">
        <div>
          <h2>Best Sellers</h2>

          <p>Loved by gift-givers</p>
        </div>

        <Link href="/occasions">
          View All <span>→</span>
        </Link>
      </div>

      {/* PRODUCTS */}

      <div className="home-product-grid">
        {products.map((product) => {
          const liked = isInWishlist(product.id);

          return (
            <article
              key={product.id}
              className="home-product-card"
            >
              {/* PRODUCT IMAGE AREA */}

              <div
                className={`home-product-media ${product.tone}`}
              >
                <span
                  className="home-product-emoji"
                  role="img"
                  aria-label="Gift"
                >
                  🎁
                </span>

                {/* WISHLIST BUTTON */}

                <button
                  type="button"
                  className={`home-product-heart ${
                    liked ? "text-[#d92f66]" : ""
                  }`}
                  aria-label={
                    liked
                      ? `Remove ${product.name} from wishlist`
                      : `Add ${product.name} to wishlist`
                  }
                  onClick={() => handleWishlist(product)}
                >
                  <Heart
                    size={18}
                    fill={liked ? "currentColor" : "none"}
                  />
                </button>
              </div>

              {/* PRODUCT INFORMATION */}

              <div className="home-product-info">
                {/* CATEGORY */}

                <div className="home-product-category">
                  {product.category}
                </div>

                {/* PRODUCT NAME */}

                <h3>{product.name}</h3>

                {/* RATING */}

                <div className="home-product-rating">
                  <Star
                    size={14}
                    className="fill-[#f5aa18] text-[#f5aa18]"
                  />

                  {product.rating}

                  <span>(120 reviews)</span>
                </div>

                {/* PRICE */}

                <div className="home-product-price">
                  <strong>
                    ₹{product.price}
                  </strong>

                  <del>
                    ₹{product.oldPrice}
                  </del>
                </div>

                {/* ADD TO CART */}

                <button
                  type="button"
                  className="home-add-cart"
                >
                  <ShoppingCart size={17} />

                  Add to Cart
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}