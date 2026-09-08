"use client";

import { Heart, ShoppingCart, Star } from "lucide-react";
import { useRouter } from "next/navigation";

/* =========================================
   CART ITEM TYPE

   This must match the cart item structure
   used in the Cart page.
========================================= */

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

/* =========================================
   NEWLY LAUNCHED PRODUCTS DATA

   Images are NOT added yet.

   Later, add product images inside:

   public/images/

   Example:

   public/images/neon-lamp.jpg
   public/images/luxury-rose-box.jpg
   public/images/memory-journal.jpg
   public/images/fragrance-set.jpg
========================================= */

const newProducts = [
  {
    id: 1001,
    name: "Custom Name Neon Lamp",
    price: 1599,
  },
  {
    id: 1002,
    name: "Luxury Rose Gift Box",
    price: 1899,
  },
  {
    id: 1003,
    name: "Personalised Memory Journal",
    price: 699,
  },
  {
    id: 1004,
    name: "Minimal Home Fragrance Set",
    price: 1299,
  },
];

/* =========================================
   NEW LAUNCHES COMPONENT
========================================= */

export default function NewLaunches() {
  const router = useRouter();

  /* =========================================
     ADD PRODUCT TO CART

     FLOW:

     1. Get existing cart from localStorage.
     2. Check if product already exists.
     3. If product exists:
        Increase quantity.
     4. If product does not exist:
        Add new product.
     5. Save updated cart.
     6. Update Header cart count.
     7. Save popup message.
     8. Redirect to Cart page.
  ========================================= */

  const handleAddToCart = (product: {
    id: number;
    name: string;
    price: number;
  }) => {
    /* =====================================
       GET EXISTING CART
    ===================================== */

    const storedCart =
      localStorage.getItem("gift4u-cart");

    let cart: CartItem[] = [];

    if (storedCart) {
      try {
        cart = JSON.parse(storedCart);
      } catch (error) {
        console.error(
          "Unable to read cart:",
          error
        );

        cart = [];
      }
    }

    /* =====================================
       CHECK IF PRODUCT ALREADY EXISTS
    ===================================== */

    const existingProductIndex =
      cart.findIndex(
        (item) => item.id === product.id
      );

    /* =====================================
       PRODUCT ALREADY IN CART

       Increase quantity.
    ===================================== */

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    }

    /* =====================================
       NEW PRODUCT

       Add product to cart.
    ===================================== */

    else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,

        /*
          IMAGE WILL BE ADDED LATER.

          Example:

          image: "/images/neon-lamp.jpg"
        */
      });
    }

    /* =====================================
       SAVE UPDATED CART
    ===================================== */

    localStorage.setItem(
      "gift4u-cart",
      JSON.stringify(cart)
    );

    /* =====================================
       UPDATE HEADER CART COUNT

       Header.tsx listens for this event.
    ===================================== */

    window.dispatchEvent(
      new Event("cartUpdated")
    );

    /* =====================================
       SAVE BOTTOM POPUP MESSAGE

       Cart page will read this message
       and show it at the bottom.
    ===================================== */

    sessionStorage.setItem(
      "gift4u-cart-toast",
      `${product.name} added to your cart`
    );

    /* =====================================
       REDIRECT TO CART PAGE
    ===================================== */

    router.push("/cart");
  };

  return (
    <section className="bg-[#fff6f9] py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* =====================================
            SECTION HEADING
        ===================================== */}

        <div className="mb-7">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d92f66]">
            Freshly curated
          </p>

          <h2 className="gift-heading mt-2 text-3xl font-bold text-[#172033] sm:text-4xl">
            Newly Launched
          </h2>

          <p className="mt-3 text-[#667085]">
            New gifts, new memories, and more ways to surprise someone.
          </p>
        </div>

        {/* =====================================
            NEWLY LAUNCHED PRODUCT GRID
        ===================================== */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {newProducts.map((product) => (

            <article
              key={product.id}
              className="overflow-hidden rounded-2xl border border-[#f0dfe6] bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >

              {/* =====================================
                  PRODUCT IMAGE PLACEHOLDER

                  IMAGE WILL BE ADDED HERE LATER.

                  -------------------------------------

                  STEP 1:

                  Add your product image inside:

                  public/images/

                  Example:

                  public/images/neon-lamp.jpg

                  -------------------------------------

                  STEP 2:

                  Delete the placeholder content
                  inside this div.

                  -------------------------------------

                  STEP 3:

                  Add your image like this:

                  <img
                    src="/images/neon-lamp.jpg"
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />

                  -------------------------------------

                  IMPORTANT:

                  Later, product images can come
                  dynamically from Firebase Storage.
              ===================================== */}

              <div className="relative aspect-square overflow-hidden bg-[#f8e8ee]">

                {/* =================================
                    IMAGE PLACEHOLDER

                    REPLACE THIS DIV WITH <img>
                    WHEN YOU ADD REAL IMAGES.
                ================================= */}

                <div className="flex h-full w-full items-center justify-center p-4 text-center">
                  <span className="text-sm font-semibold text-[#667085]">
                    {product.name} Image
                  </span>
                </div>

                {/* =================================
                    NEW PRODUCT BADGE
                ================================= */}

                <span className="absolute left-3 top-3 rounded-full bg-[#d92f66] px-3 py-1 text-xs font-bold text-white">
                  New
                </span>

                {/* =================================
                    WISHLIST BUTTON

                    Wishlist functionality
                    will be connected later.
                ================================= */}

                <button
                  type="button"
                  aria-label={`Add ${product.name} to wishlist`}
                  className="absolute right-3 top-3 rounded-full bg-white p-2.5 text-[#172033] shadow-sm transition hover:text-[#d92f66]"
                >
                  <Heart size={18} />
                </button>

              </div>

              {/* =====================================
                  PRODUCT INFORMATION
              ===================================== */}

              <div className="p-5">

                {/* PRODUCT RATING */}

                <div className="flex items-center gap-1 text-sm font-semibold text-[#172033]">

                  <Star
                    size={15}
                    className="fill-[#f5aa18] text-[#f5aa18]"
                  />

                  <span>4.8</span>

                  <span className="ml-1 font-normal text-[#667085]">
                    (New)
                  </span>

                </div>

                {/* PRODUCT NAME */}

                <h3 className="mt-2 text-lg font-bold text-[#172033]">
                  {product.name}
                </h3>

                {/* PRODUCT PRICE */}

                <p className="mt-3 text-xl font-bold text-[#172033]">
                  ₹{product.price}
                </p>

                {/* =====================================
                    ADD TO CART BUTTON

                    FLOW:

                    Click Add to Cart
                          ↓
                    Product added to localStorage
                          ↓
                    Header cart count updated
                          ↓
                    Redirect to Cart page
                          ↓
                    Bottom popup appears
                ===================================== */}

                <button
                  type="button"
                  onClick={() =>
                    handleAddToCart(product)
                  }
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