"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Gift,
  Heart,
  Package,
  ShoppingCart,
  Sparkles,
  Star,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* =========================================================
   TYPES
   ========================================================= */

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  category: string;
};

/* =========================================================
   HAMPER PRODUCTS DATA

   PRODUCT IMAGES ARE NOT ADDED YET.

   Later you can add images inside:

   public/images/hampers/

   Example:

   public/images/hampers/chocolate-hamper.jpg
   public/images/hampers/luxury-hamper.jpg
   public/images/hampers/birthday-hamper.jpg

   ========================================================= */

const hamperProducts: Product[] = [
  {
    id: 201,
    name: "Luxury Celebration Hamper",
    price: 2499,
    oldPrice: 2999,
    rating: 4.8,
    category: "Premium Hamper",
  },
  {
    id: 202,
    name: "Chocolate Delight Hamper",
    price: 1499,
    oldPrice: 1799,
    rating: 4.7,
    category: "Chocolate Hamper",
  },
  {
    id: 203,
    name: "Sweet Surprise Gift Box",
    price: 1299,
    oldPrice: 1599,
    rating: 4.9,
    category: "Sweet Hamper",
  },
  {
    id: 204,
    name: "Gourmet Treats Hamper",
    price: 2199,
    oldPrice: 2599,
    rating: 4.8,
    category: "Gourmet Hamper",
  },
];

/* =========================================================
   HAMPER COLLECTIONS
   ========================================================= */

const hamperCollections = [
  {
    name: "All Gift Hampers",
    description: "Something special for every celebration",
  },
  {
    name: "Healthy Hampers",
    description: "Thoughtful gifts for healthy living",
  },
  {
    name: "Snacks Hampers",
    description: "Delicious surprises for every mood",
  },
  {
    name: "Grooming Hampers",
    description: "Premium self-care and grooming gifts",
  },
  {
    name: "Tea & Coffee Hampers",
    description: "Perfect for tea and coffee lovers",
  },
  {
    name: "Gourmet Hampers",
    description: "A premium collection of fine treats",
  },
  {
    name: "Chocolate Hampers",
    description: "Sweet moments made even sweeter",
  },
  {
    name: "Fruit Hampers",
    description: "Fresh and thoughtful gifting",
  },
];

/* =========================================================
   FLORAL GIFT SETS

   This section remains after removing:

   Explore Collections
   Featured Gift Sets

   ========================================================= */

const floralGiftSets = [
  {
    name: "All Floral Gift Sets",
    description: "Beautiful flowers for every moment",
  },
  {
    name: "Flowers in Cakes",
    description: "Flowers and sweetness together",
  },
  {
    name: "Flowers in Chocolates",
    description: "A sweet floral surprise",
  },
  {
    name: "Flowers in Plants",
    description: "Freshness that lasts longer",
  },
  {
    name: "Flowers in Guitarist",
    description: "Music and flowers together",
  },
  {
    name: "Birthday Flowers",
    description: "Make birthdays more beautiful",
  },
  {
    name: "Anniversary Flowers",
    description: "Celebrate love with flowers",
  },
  {
    name: "Premium Floral Sets",
    description: "Luxury flowers for special moments",
  },
];

/* =========================================================
   FEATURED HAMPER CATEGORIES
   ========================================================= */

const featuredHampers = [
  "Birthday Hampers",
  "Anniversary Hampers",
  "Wedding Hampers",
  "Premium Hampers",
  "LUXE Hampers",
  "New Arrivals",
];

/* =========================================================
   COMPONENT
   ========================================================= */

export default function HampersPage() {
  const router = useRouter();

  /* =======================================================
     ADD TO CART TOAST
     ======================================================= */

  const showAddedToCart = () => {
    const toast = document.createElement("div");

    toast.className =
      "fixed bottom-6 left-1/2 z-[9999] flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-[#172033] px-6 py-4 text-white shadow-2xl";

    toast.innerHTML = `
      <div style="
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #d92f66;
      ">
        ✓
      </div>

      <div>
        <div style="font-weight:700;">
          Added to Cart
        </div>

        <div style="
          font-size:12px;
          opacity:0.75;
          margin-top:2px;
        ">
          Your gift has been added successfully
        </div>
      </div>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = "all 0.3s ease";
      toast.style.opacity = "0";
      toast.style.transform =
        "translateX(-50%) translateY(20px)";

      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 2500);
  };

  /* =======================================================
     ADD PRODUCT TO CART

     Cart data is stored in localStorage.

     The cart page can read this same data.

     ======================================================= */

  const handleAddToCart = (product: Product) => {
    const existingCart = localStorage.getItem("gift4u-cart");

    let cartItems: Array<Product & { quantity: number }> = [];

    if (existingCart) {
      try {
        cartItems = JSON.parse(existingCart);
      } catch {
        cartItems = [];
      }
    }

    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      cartItems[existingProductIndex].quantity += 1;
    } else {
      cartItems.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem(
      "gift4u-cart",
      JSON.stringify(cartItems)
    );

    /*
      Dispatch event.

      Header can listen to this event
      and update cart count immediately.
    */

    window.dispatchEvent(
      new Event("cartUpdated")
    );

    /* Show popup at bottom */

    showAddedToCart();

    /*
      Redirect to Cart after popup.

      Small delay allows the user
      to see the confirmation popup.
    */

    setTimeout(() => {
      router.push("/cart");
    }, 700);
  };

  return (
    <>
      {/* =====================================================
          HEADER
          ===================================================== */}

      <Header />

      <main className="overflow-hidden bg-[#fffafc]">

        {/* ===================================================
            BREADCRUMB
            =================================================== */}

        <section className="border-b border-[#f0dfe6] bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8">

            <div className="flex items-center gap-2 text-sm text-[#667085]">

              <Link
                href="/"
                className="transition hover:text-[#d92f66]"
              >
                Home
              </Link>

              <span>/</span>

              <span className="font-semibold text-[#172033]">
                Hampers
              </span>

            </div>

          </div>
        </section>

        {/* ===================================================
            HERO SECTION
            =================================================== */}

        <section className="mx-auto max-w-7xl px-4 pt-8 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] border border-[#f0dfe6] bg-[#f8e8ee]">

            {/* ===============================================
                HERO BACKGROUND IMAGE

                IMAGE NOT ADDED YET.

                TO ADD IMAGE LATER:

                STEP 1:
                Add image inside:

                public/images/hampers/

                Example:

                public/images/hampers/hamper-hero.jpg


                STEP 2:

                Add this image:

                <img
                  src="/images/hampers/hamper-hero.jpg"
                  alt="Gift Hampers"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                You can also add a dark overlay
                above the image if required.

                =============================================== */}

            <div className="absolute inset-0">

              <div className="flex h-full w-full items-center justify-center">

                <span className="text-sm font-semibold text-[#9a7d88]">
                  Add Hampers Hero Background Image Here
                </span>

              </div>

            </div>

            {/* Decorative Shapes */}

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#f3c9d7] opacity-60" />

            <div className="absolute -bottom-28 left-1/2 h-64 w-64 rounded-full bg-[#f5dbe4] opacity-70" />

            {/* Hero Content */}

            <div className="relative z-10 max-w-3xl px-7 py-16 sm:px-12 sm:py-20">

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d92f66]">
                Curated With Love
              </p>

              <h1 className="gift-heading mt-4 text-4xl font-bold text-[#172033] sm:text-5xl lg:text-6xl">
                Gift Hampers
                <span className="block text-[#d92f66]">
                  Made to Delight
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#667085] sm:text-lg">
                Beautifully curated hampers filled with
                thoughtful surprises, delicious treats and
                unforgettable memories.
              </p>

              <Link
                href="#featured-hampers"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d92f66] px-6 py-3.5 font-semibold text-white transition hover:bg-[#bd1d52]"
              >
                Explore Hampers

                <ArrowRight size={19} />
              </Link>

            </div>

          </div>

        </section>

        {/* ===================================================
            FEATURED HAMPERS
            =================================================== */}

        <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">

          <div className="mb-7 flex items-end justify-between gap-4">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d92f66]">
                Find Your Favourite
              </p>

              <h2 className="gift-heading mt-2 text-3xl font-bold text-[#172033] sm:text-4xl">
                Featured Hampers
              </h2>

            </div>

            <Link
              href="/hampers"
              className="hidden items-center gap-1 text-sm font-bold text-[#d92f66] sm:flex"
            >
              View All

              <ArrowRight size={16} />
            </Link>

          </div>

          {/* Horizontal Scroll */}

          <div className="relative">

            <div
              id="featured-hampers-scroll"
              className="flex gap-4 overflow-x-auto scroll-smooth pb-4"
            >

              {featuredHampers.map((item, index) => (

                <Link
                  key={item}
                  href="/hampers"
                  className="group min-w-[190px] flex-1 rounded-2xl border border-[#f0dfe6] bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* Different Shapes */}

                  <div
                    className={`flex h-14 w-14 items-center justify-center bg-[#fff1f5] text-[#d92f66]
                    ${
                      index % 3 === 0
                        ? "rounded-full"
                        : index % 3 === 1
                        ? "rounded-2xl"
                        : "rounded-[1.4rem] rotate-6"
                    }`}
                  >

                    <Gift size={25} />

                  </div>

                  <h3 className="mt-4 font-bold text-[#172033]">
                    {item}
                  </h3>

                  <p className="mt-2 text-sm text-[#667085]">
                    Explore collection
                  </p>

                </Link>

              ))}

            </div>

          </div>

        </section>

        {/* ===================================================
            HAMPER COLLECTIONS
            =================================================== */}

        <section className="bg-white py-14">

          <div className="mx-auto max-w-7xl px-4 lg:px-8">

            <div className="mb-8">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d92f66]">
                Thoughtfully Curated
              </p>

              <h2 className="gift-heading mt-2 text-3xl font-bold text-[#172033] sm:text-4xl">
                Beautiful Gift Hampers
              </h2>

              <p className="mt-3 max-w-2xl text-[#667085]">
                Discover carefully selected hampers designed
                to bring happiness to every special occasion.
              </p>

            </div>

            {/* Collections */}

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {hamperCollections.map((collection, index) => (

                <Link
                  key={collection.name}
                  href="/hampers"
                  className="group relative overflow-hidden rounded-[1.8rem] border border-[#f0dfe6] bg-[#fff6f9] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >

                  {/* Decorative Shape */}

                  <div
                    className={`absolute -right-6 -top-6 h-24 w-24 bg-[#f6d8e2] opacity-60
                    ${
                      index % 2 === 0
                        ? "rounded-full"
                        : "rounded-[2rem]"
                    }`}
                  />

                  <div className="relative">

                    <div
                      className={`flex h-12 w-12 items-center justify-center text-[#d92f66]
                      ${
                        index % 3 === 0
                          ? "rounded-full bg-[#ffeaf1]"
                          : index % 3 === 1
                          ? "rounded-xl bg-[#fbe2eb]"
                          : "rounded-[1.2rem] bg-[#fff]"
                      }`}
                    >

                      <Package size={21} />

                    </div>

                    <h3 className="mt-5 text-lg font-bold text-[#172033]">
                      {collection.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#667085]">
                      {collection.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#d92f66]">

                      Explore

                      <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>

        {/* ===================================================
            BEAUTIFULLY CURATED
            FLORAL GIFT SETS

            IMPORTANT:

            This section has been moved UP.

            The previous section:

            "Explore Collections"
            "Featured Gift Sets"

            has been COMPLETELY REMOVED.

            =================================================== */}

        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#172033] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">

            {/* Decorative Background */}

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#d92f66] opacity-20" />

            <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-white opacity-5" />

            <div className="relative z-10">

              {/* Heading */}

              <div className="mb-10 max-w-2xl">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d92f66] text-white">

                  <Sparkles size={24} />

                </div>

                <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#f3a8c0]">
                  Beautifully Curated
                </p>

                <h2 className="gift-heading mt-3 text-3xl font-bold text-white sm:text-4xl">
                  Floral Gift Sets
                </h2>

                <p className="mt-4 text-base leading-7 text-[#c6cedd]">
                  Beautiful flowers combined with thoughtful
                  gifts to create unforgettable moments.
                </p>

              </div>

              {/* Floral Gift Sets */}

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                {floralGiftSets.map((item, index) => (

                  <Link
                    key={item.name}
                    href="/hampers"
                    className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10"
                  >

                    {/* Shape */}

                    <div
                      className={`flex h-11 w-11 items-center justify-center text-[#f6b4c8]
                      ${
                        index % 3 === 0
                          ? "rounded-full bg-white/10"
                          : index % 3 === 1
                          ? "rounded-xl bg-white/10"
                          : "rounded-[1rem] bg-white/10 rotate-3"
                      }`}
                    >

                      <Heart size={19} />

                    </div>

                    <h3 className="mt-4 font-bold text-white">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#b9c2d1]">
                      {item.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#f3a8c0]">

                      Explore

                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />

                    </div>

                  </Link>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            FEATURED PRODUCTS
            =================================================== */}

        <section
          id="featured-hampers"
          className="bg-white py-16"
        >

          <div className="mx-auto max-w-7xl px-4 lg:px-8">

            <div className="mb-8 flex items-end justify-between gap-4">

              <div>

                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d92f66]">
                  Handpicked For You
                </p>

                <h2 className="gift-heading mt-2 text-3xl font-bold text-[#172033] sm:text-4xl">
                  Popular Gift Hampers
                </h2>

              </div>

              <Link
                href="/hampers"
                className="hidden items-center gap-1 text-sm font-bold text-[#d92f66] sm:flex"
              >
                View All

                <ArrowRight size={16} />
              </Link>

            </div>

            {/* Product Grid */}

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {hamperProducts.map((product) => (

                <article
                  key={product.id}
                  className="group overflow-hidden rounded-2xl border border-[#f0dfe6] bg-white transition hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* =========================================
                      PRODUCT IMAGE PLACEHOLDER

                      ADD PRODUCT IMAGE HERE LATER.

                      STEP 1:

                      Add image inside:

                      public/images/hampers/


                      STEP 2:

                      Replace this placeholder with:

                      <img
                        src="/images/hampers/your-image.jpg"
                        alt="Product Name"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      ========================================= */}

                  <div className="relative aspect-square overflow-hidden bg-[#f8e8ee]">

                    <div className="flex h-full w-full items-center justify-center p-5 text-center">

                      <span className="text-sm font-semibold text-[#8d7580]">
                        {product.name} Image
                      </span>

                    </div>

                    {/* Wishlist */}

                    <button
                      type="button"
                      aria-label={`Add ${product.name} to wishlist`}
                      className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#172033] shadow-md transition hover:text-[#d92f66]"
                    >

                      <Heart size={18} />

                    </button>

                    {/* Category Badge */}

                    <span className="absolute bottom-3 left-3 rounded-full bg-[#172033] px-3 py-1 text-xs font-semibold text-white">

                      {product.category}

                    </span>

                  </div>

                  {/* Product Information */}

                  <div className="p-5">

                    <div className="flex items-center gap-1">

                      <Star
                        size={15}
                        className="fill-[#f5aa18] text-[#f5aa18]"
                      />

                      <span className="text-sm font-bold text-[#172033]">
                        {product.rating}
                      </span>

                      <span className="text-xs text-[#667085]">
                        (120)
                      </span>

                    </div>

                    <h3 className="mt-3 text-lg font-bold text-[#172033]">

                      {product.name}

                    </h3>

                    <div className="mt-4 flex items-center gap-2">

                      <span className="text-xl font-bold text-[#172033]">

                        ₹{product.price}

                      </span>

                      {product.oldPrice && (

                        <span className="text-sm text-[#98a2b3] line-through">

                          ₹{product.oldPrice}

                        </span>

                      )}

                    </div>

                    {/* =====================================
                        ADD TO CART

                        PRODUCT IS ADDED TO LOCALSTORAGE.

                        POPUP APPEARS AT BOTTOM.

                        USER IS REDIRECTED TO /cart.

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

        {/* ===================================================
            PREMIUM HAMPER BANNER
            =================================================== */}

        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#172033]">

            {/* ===============================================
                PREMIUM HAMPER BACKGROUND IMAGE

                ADD IMAGE HERE LATER.

                Add image:

                public/images/hampers/premium-hamper-banner.jpg


                Replace placeholder with:

                <img
                  src="/images/hampers/premium-hamper-banner.jpg"
                  alt="Premium Gift Hampers"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                =============================================== */}

            <div className="absolute inset-0 flex items-center justify-center">

              <span className="text-sm font-semibold text-[#8f9aae]">
                Add Premium Hamper Background Image Here
              </span>

            </div>

            {/* Overlay */}

            <div className="absolute inset-0 bg-[#172033]/90" />

            <div className="relative z-10 max-w-2xl px-8 py-16 sm:px-14 sm:py-20">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f3a8c0]">
                Premium Gifting
              </p>

              <h2 className="gift-heading mt-4 text-4xl font-bold text-white sm:text-5xl">
                Make Every Gift
                <span className="block text-[#f3a8c0]">
                  Feel Extraordinary
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#c6cedd]">
                Discover luxurious hampers carefully designed
                to make your special moments unforgettable.
              </p>

              <Link
                href="/hampers"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d92f66] px-6 py-3.5 font-semibold text-white transition hover:bg-[#bd1d52]"
              >

                Explore Premium Hampers

                <ArrowRight size={19} />

              </Link>

            </div>

          </div>

        </section>

      </main>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <Footer />
    </>
  );
}