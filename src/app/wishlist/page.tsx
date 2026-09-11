"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Heart,
  ShoppingCart,
  Trash2,
  Star,
  ArrowRight,
  Gift,
  Sparkles,
} from "lucide-react";

import { useWishlist } from "../../contexts/WishlistContext";

/* =====================================================
   CART PRODUCT TYPE
   ===================================================== */

interface CartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

/* =====================================================
   WISHLIST PAGE
   ===================================================== */

export default function WishlistPage() {
  const router = useRouter();

  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  /* ===================================================
     ADD PRODUCT TO CART

     1. Get existing cart from localStorage
     2. Check if product already exists
     3. Increase quantity if it exists
     4. Add product if it does not exist
     5. Save cart
     6. Update Header cart count
     7. Redirect to Cart page
     =================================================== */

  const addToCart = (product: {
    id: string;
    name: string;
    price: number;
    image?: string;
  }) => {
    try {
      const savedCart = localStorage.getItem("gift4u-cart");

      let cart: CartProduct[] = savedCart
        ? JSON.parse(savedCart)
        : [];

      const existingProduct = cart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
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

      /* REDIRECT TO CART */

      router.push("/cart?added=true");

    } catch (error) {
      console.error(
        "Unable to add product to cart:",
        error
      );
    }
  };

  return (
    <main className="min-h-screen bg-[#fffafb]">


      {/* =================================================
          WISHLIST HERO SECTION
          ================================================= */}

      <section className="relative overflow-hidden bg-[#172033]">


        {/* =============================================
            BACKGROUND DECORATION
            ============================================= */}

        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#d92f66]/20 blur-3xl" />

        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#52647f]/30 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-[#d92f66]/20 blur-3xl" />


        {/* =============================================
            HERO CONTENT
            ============================================= */}

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:px-8">


          {/* SMALL HEADING */}

          <div className="flex items-center gap-2">

            <Sparkles
              size={18}
              className="text-[#f5b3c7]"
            />

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f5b3c7]">
              Your Favourite Collection
            </p>

          </div>


          {/* MAIN HEADING */}

          <h1 className="gift-heading mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">

            My

            <span className="ml-3 text-[#f5a7bd]">
              Wishlist
            </span>

          </h1>


          {/* DESCRIPTION */}

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">

            Keep all the gifts you love in one beautiful
            place and come back whenever you're ready
            to make someone's day special.

          </p>


          {/* WISHLIST COUNT */}

          {wishlist.length > 0 && (

            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-sm">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d92f66]">

                <Heart
                  size={17}
                  className="fill-white text-white"
                />

              </div>


              <p className="font-semibold text-white">

                {wishlist.length}{" "}

                {wishlist.length === 1
                  ? "Gift Saved"
                  : "Gifts Saved"}

              </p>

            </div>

          )}

        </div>

      </section>



      {/* =================================================
          WISHLIST CONTENT
          ================================================= */}

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">


        {/* =================================================
            EMPTY WISHLIST
            ================================================= */}

        {wishlist.length === 0 ? (

          <div className="relative overflow-hidden rounded-[2rem] border border-[#f0dfe6] bg-white py-20 text-center shadow-sm">


            {/* DECORATIVE BACKGROUND */}

            <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[#fff0f4]" />

            <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-[#eef2f7]" />


            <div className="relative flex flex-col items-center justify-center px-5">


              {/* HEART ICON */}

              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#fff0f4] shadow-sm">

                <div className="absolute inset-2 rounded-full border border-[#f7c9d6]" />

                <Heart
                  size={38}
                  className="fill-[#d92f66] text-[#d92f66]"
                />

              </div>


              {/* TITLE */}

              <h2 className="gift-heading mt-7 text-3xl font-bold text-[#172033] sm:text-4xl">

                Your Wishlist is Empty

              </h2>


              {/* DESCRIPTION */}

              <p className="mt-4 max-w-md leading-7 text-[#667085]">

                Start exploring our beautiful collection
                and save the gifts you love for later.

              </p>


              {/* BUTTON */}

              <Link
                href="/"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#d92f66] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#d92f66]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#bd1d52]"
              >

                Explore Gifts

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

        ) : (

          <>


            {/* =============================================
                SECTION HEADING
                ============================================= */}

            <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">


              <div>

                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d92f66]">

                  Saved With Love

                </p>


                <h2 className="gift-heading mt-2 text-3xl font-bold text-[#172033] sm:text-4xl">

                  Your Favourite Gifts

                </h2>


                <p className="mt-3 text-[#667085]">

                  {wishlist.length}{" "}

                  {wishlist.length === 1
                    ? "beautiful gift waiting for you."
                    : "beautiful gifts waiting for you."}

                </p>

              </div>


              {/* EXPLORE MORE BUTTON */}

              <Link
                href="/"
                className="inline-flex items-center gap-2 font-semibold text-[#d92f66] transition hover:text-[#bd1d52]"
              >

                Continue Shopping

                <ArrowRight size={18} />

              </Link>

            </div>



            {/* =============================================
                PRODUCT GRID
                ============================================= */}

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


              {wishlist.map((product) => (

                <article
                  key={product.id}
                  className="group overflow-hidden rounded-3xl border border-[#f0dfe6] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#e9a4b8] hover:shadow-xl"
                >


                  {/* =========================================
                      PRODUCT IMAGE AREA
                      ========================================= */}

                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#fff1f5] via-[#fff8fa] to-[#edf1f6]">


                    {/* PRODUCT IMAGE */}

                    {product.image ? (

                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                    ) : (

                      /* IMAGE FALLBACK */

                      <div className="flex h-full w-full flex-col items-center justify-center">


                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-md">

                          <Gift
                            size={40}
                            className="text-[#d92f66]"
                          />

                        </div>


                        <p className="mt-5 px-5 text-center text-sm font-semibold text-[#667085]">

                          {product.name}

                        </p>

                      </div>

                    )}


                    {/* =====================================
                        GRADIENT OVERLAY
                        ===================================== */}

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#172033]/10 to-transparent" />


                    {/* =====================================
                        SAVED BADGE
                        ===================================== */}

                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[#172033] px-3 py-1.5 text-xs font-semibold text-white shadow-md">

                      <Heart
                        size={13}
                        className="fill-[#f5a7bd] text-[#f5a7bd]"
                      />

                      Saved

                    </div>


                    {/* =====================================
                        REMOVE BUTTON
                        ===================================== */}

                    <button
                      type="button"

                      onClick={() =>
                        removeFromWishlist(product.name)
                      }

                      className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#d92f66] shadow-md transition duration-300 hover:scale-110 hover:bg-[#d92f66] hover:text-white"

                      aria-label={`Remove ${product.name} from wishlist`}
                    >

                      <Trash2 size={18} />

                    </button>

                  </div>



                  {/* =========================================
                      PRODUCT DETAILS
                      ========================================= */}

                  <div className="p-5">


                    {/* CATEGORY */}

                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#d92f66]">

                      {product.category}

                    </p>


                    {/* PRODUCT NAME */}

                    <h2 className="mt-2 min-h-[56px] text-lg font-bold leading-7 text-[#172033]">

                      {product.name}

                    </h2>


                    {/* RATING */}

                    <div className="mt-3 flex items-center gap-1.5 text-sm text-[#667085]">

                      <Star
                        size={15}
                        className="fill-[#f5aa18] text-[#f5aa18]"
                      />


                      <span className="font-semibold text-[#172033]">

                        {product.rating}

                      </span>


                      <span>

                        (120 reviews)

                      </span>

                    </div>


                    {/* PRICE */}

                    <div className="mt-4 flex items-center gap-3">


                      <strong className="text-xl font-bold text-[#172033]">

                        ₹{product.price}

                      </strong>


                      {product.oldPrice && (

                        <del className="text-sm text-[#98a2b3]">

                          ₹{product.oldPrice}

                        </del>

                      )}

                    </div>


                    {/* DIVIDER */}

                    <div className="mt-5 border-t border-[#f1e5e9]" />


                    {/* =====================================
                        ADD TO CART BUTTON
                        ===================================== */}

                    <button
                      type="button"

                      onClick={() =>
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                        })
                      }

                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#d92f66] px-4 py-3.5 font-semibold text-white shadow-md shadow-[#d92f66]/15 transition duration-300 hover:bg-[#bd1d52] hover:shadow-lg"
                    >

                      <ShoppingCart size={18} />

                      Add to Cart

                    </button>

                  </div>

                </article>

              ))}

            </div>


            {/* =============================================
                BOTTOM EXPLORE SECTION
                ============================================= */}

            <div className="mt-14 overflow-hidden rounded-[2rem] bg-[#172033]">


              <div className="grid items-center lg:grid-cols-2">


                {/* LEFT CONTENT */}

                <div className="p-8 sm:p-12">


                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f5a7bd]">

                    Discover Something New

                  </p>


                  <h2 className="gift-heading mt-4 text-3xl font-bold text-white sm:text-4xl">

                    Find More Gifts
                    <br />

                    To Love.

                  </h2>


                  <p className="mt-5 max-w-lg leading-7 text-white/70">

                    Explore our carefully curated gift
                    collections and discover something
                    special for every occasion.

                  </p>


                  <Link
                    href="/"

                    className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#d92f66] px-6 py-3.5 font-semibold text-white transition hover:bg-[#bd1d52]"
                  >

                    Explore Gifts

                    <ArrowRight size={18} />

                  </Link>

                </div>


                {/* RIGHT DESIGN */}

                <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#263249]">


                  <div className="absolute h-72 w-72 rounded-full border border-white/10" />

                  <div className="absolute h-52 w-52 rounded-full border border-[#d92f66]/30" />


                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-[#d92f66] shadow-2xl">

                    <Gift
                      size={45}
                      className="text-white"
                    />

                  </div>


                  {/* DECORATION */}

                  <Heart
                    size={28}
                    className="absolute left-[18%] top-[22%] text-[#f5a7bd]"
                  />


                  <Sparkles
                    size={26}
                    className="absolute bottom-[22%] right-[18%] text-[#f5a7bd]"
                  />

                </div>

              </div>

            </div>

          </>

        )}

      </section>

    </main>
  );
}