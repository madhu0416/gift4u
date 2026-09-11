"use client";

import { Heart, ShoppingCart, Star } from "lucide-react";
import { useRouter } from "next/navigation";

import { useWishlist } from "@/contexts/WishlistContext";

/* =====================================================
   CART ITEM TYPE
   ===================================================== */

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

/* =====================================================
   PRODUCT TYPE
   ===================================================== */

interface NewProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  oldPrice?: number;
  image?: string;
}

/* =====================================================
   NEWLY LAUNCHED PRODUCTS
   ===================================================== */

const newProducts: NewProduct[] = [
  {
    id: 1001,
    name: "Custom Name Neon Lamp",
    price: 1599,
    category: "Personalised",
    rating: 4.8,
  },
  {
    id: 1002,
    name: "Luxury Rose Gift Box",
    price: 1899,
    category: "Hampers",
    rating: 4.8,
  },
  {
    id: 1003,
    name: "Personalised Memory Journal",
    price: 699,
    category: "Personalised",
    rating: 4.8,
  },
  {
    id: 1004,
    name: "Minimal Home Fragrance Set",
    price: 1299,
    category: "Lifestyle",
    rating: 4.8,
  },
];

/* =====================================================
   NEW LAUNCHES COMPONENT
   ===================================================== */

export default function NewLaunches() {
  const router = useRouter();

  const {
    wishlist,
    addToWishlist,
    removeFromWishlist,
  } = useWishlist();

  /* ===================================================
     CHECK IF PRODUCT IS IN WISHLIST
     =================================================== */

  const isWishlisted = (productId: number) => {
    return wishlist.some(
      (item) => item.id === String(productId)
    );
  };

  /* ===================================================
     TOGGLE WISHLIST

     If product is already in wishlist:
     → Remove it

     Otherwise:
     → Add it
     =================================================== */

  const handleWishlist = (
    product: NewProduct
  ) => {
    const productId = String(product.id);

    const alreadyWishlisted = wishlist.some(
      (item) => item.id === productId
    );

    if (alreadyWishlisted) {
      removeFromWishlist(productId);
      return;
    }

    addToWishlist({
      id: productId,
      name: product.name,
      price: product.price,
      category: product.category,
      rating: String(product.rating),
      oldPrice: product.oldPrice,
      image: product.image,
    });
  };

  /* ===================================================
     ADD PRODUCT TO CART
     =================================================== */

  const handleAddToCart = (
    product: NewProduct
  ) => {
    const storedCart =
      localStorage.getItem("gift4u-cart");

    let cart: CartItem[] = [];

    if (storedCart) {
      try {
        cart = JSON.parse(storedCart);
      } catch {
        cart = [];
      }
    }

    const existingProductIndex =
      cart.findIndex(
        (item) => item.id === product.id
      );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
      });
    }

    localStorage.setItem(
      "gift4u-cart",
      JSON.stringify(cart)
    );

    /* UPDATE HEADER CART COUNT */

    window.dispatchEvent(
      new Event("cartUpdated")
    );

    /* CART NOTIFICATION */

    sessionStorage.setItem(
      "gift4u-cart-toast",
      `${product.name} added to your cart`
    );

    /* REDIRECT TO CART */

    router.push("/cart");
  };

  return (
    <section
      className="home-launch-section"
      aria-label="Newly launched gifts"
    >
      {/* =================================================
          SECTION HEADING
          ================================================= */}

      <div
        className="home-section-heading"
        style={{
          width: "min(1428px, 100%)",
          margin: "0 auto",
        }}
      >
        <div>
          <h2>
            Newly Launched
          </h2>

          <p>
            New gifts, new memories, and more ways
            to surprise someone
          </p>
        </div>
      </div>

      {/* =================================================
          PRODUCT GRID
          ================================================= */}

      <div
        className="home-launch-grid"
        style={{
          width: "min(1428px, 100%)",
          margin: "0 auto",
        }}
      >
        {newProducts.map((product) => {
          const liked =
            isWishlisted(product.id);

          return (
            <article
              key={product.id}
              className="home-launch-card"
            >
              {/* =========================================
                  PRODUCT IMAGE
                  ========================================= */}

              <div className="home-launch-media">

                {/* NEW BADGE */}

                <span className="new-badge">
                  New
                </span>


                {/* =====================================
                    WISHLIST BUTTON
                    ===================================== */}

                <button
                  type="button"
                  className={`home-launch-heart ${
                    liked
                      ? "text-[#d92f66]"
                      : ""
                  }`}
                  aria-label={
                    liked
                      ? `Remove ${product.name} from wishlist`
                      : `Add ${product.name} to wishlist`
                  }
                  onClick={() =>
                    handleWishlist(product)
                  }
                >
                  <Heart
                    size={18}
                    fill={
                      liked
                        ? "currentColor"
                        : "none"
                    }
                  />
                </button>


                {/* PRODUCT IMAGE PLACEHOLDER */}

                <span className="text-sm font-semibold text-[#667085]">
                  {product.name} Image
                </span>

              </div>


              {/* =========================================
                  PRODUCT INFORMATION
                  ========================================= */}

              <div className="home-launch-info">


                {/* PRODUCT RATING */}

                <div className="flex items-center gap-1 text-xs font-semibold text-[#172033]">

                  <Star
                    size={14}
                    className="fill-[#f5aa18] text-[#f5aa18]"
                  />

                  {product.rating}

                  <span className="ml-1 font-normal text-[#667085]">
                    (New)
                  </span>

                </div>


                {/* PRODUCT NAME */}

                <h3>
                  {product.name}
                </h3>


                {/* PRODUCT PRICE */}

                <p>
                  ₹{product.price}
                </p>


                {/* =====================================
                    ADD TO CART BUTTON
                    ===================================== */}

                <button
                  type="button"
                  onClick={() =>
                    handleAddToCart(product)
                  }
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