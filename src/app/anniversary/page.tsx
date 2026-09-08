"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

import {
  ArrowRight,
  Cake,
  Flower2,
  Frame,
  Gem,
  Gift,
  Heart,
  ShoppingCart,
  Sparkles,
  Star,
  TreePine,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

/* =====================================================
   TYPE DEFINITIONS
   ===================================================== */

interface CartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface AnniversaryEssential {
  name: string;
  href: string;
  icon: ReactNode;
}

interface LovedOne {
  name: string;
  href: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
}

/* =====================================================
   ANNIVERSARY ESSENTIALS

   Removed:
   - Personalised Gifts
   - Anniversary Hampers
   - Gift Hampers

   Added:
   - Jewellery
   - Soft Toys
   - Photo Frames
   ===================================================== */

const anniversaryEssentials: AnniversaryEssential[] = [
  {
    name: "Cakes",
    href: "/anniversary?category=cakes",
    icon: <Cake size={28} />,
  },
  {
    name: "Flowers",
    href: "/anniversary?category=flowers",
    icon: <Flower2 size={28} />,
  },
  {
    name: "Chocolates",
    href: "/anniversary?category=chocolates",
    icon: <Gift size={28} />,
  },
  {
    name: "Jewellery",
    href: "/anniversary?category=jewellery",
    icon: <Gem size={28} />,
  },
  {
    name: "Soft Toys",
    href: "/anniversary?category=soft-toys",
    icon: <Heart size={28} />,
  },
  {
    name: "Photo Frames",
    href: "/anniversary?category=photo-frames",
    icon: <Frame size={28} />,
  },
  {
    name: "Plants",
    href: "/anniversary?category=plants",
    icon: <TreePine size={28} />,
  },
  {
    name: "Combos",
    href: "/anniversary?category=combos",
    icon: <Sparkles size={28} />,
  },
];

/* =====================================================
   GIFTS FOR LOVED ONES
   ===================================================== */

const lovedOnes: LovedOne[] = [
  {
    name: "For Bride",
    href: "/anniversary?recipient=bride",
  },
  {
    name: "For Groom",
    href: "/anniversary?recipient=groom",
  },
  {
    name: "For Relatives",
    href: "/anniversary?recipient=relatives",
  },
  {
    name: "For Friends",
    href: "/anniversary?recipient=friends",
  },
  {
    name: "For Couples",
    href: "/anniversary?recipient=couples",
  },
  {
    name: "For Parents",
    href: "/anniversary?recipient=parents",
  },
];

/* =====================================================
   ANNIVERSARY MILESTONES
   ===================================================== */

const milestones = [
  {
    name: "1st Anniversary",
    href: "/anniversary?milestone=1st",
  },
  {
    name: "5th Anniversary",
    href: "/anniversary?milestone=5th",
  },
  {
    name: "10th Anniversary",
    href: "/anniversary?milestone=10th",
  },
  {
    name: "25th Anniversary",
    href: "/anniversary?milestone=25th",
  },
  {
    name: "50th Anniversary",
    href: "/anniversary?milestone=50th",
  },
];

/* =====================================================
   FEATURED ANNIVERSARY PRODUCTS

   PRODUCT IMAGES WILL BE ADDED LATER.

   Recommended folder:

   public/images/anniversary/

   Example:

   public/images/anniversary/rose-cake.jpg
   public/images/anniversary/photo-frame.jpg
   public/images/anniversary/jewellery-set.jpg
   ===================================================== */

const featuredProducts: Product[] = [
  {
    id: "anniversary-rose-cake",
    name: "Romantic Rose Cake",
    price: 899,
    rating: 4.8,
  },
  {
    id: "anniversary-photo-frame",
    name: "Personal Memory Photo Frame",
    price: 1299,
    rating: 4.9,
  },
  {
    id: "anniversary-jewellery",
    name: "Elegant Jewellery Gift Set",
    price: 2499,
    rating: 4.7,
  },
  {
    id: "anniversary-chocolate",
    name: "Premium Chocolate Surprise",
    price: 999,
    rating: 4.8,
  },
];

/* =====================================================
   MAIN ANNIVERSARY PAGE
   ===================================================== */

export default function AnniversaryPage() {
  const router = useRouter();

  /* ===================================================
     ADD PRODUCT TO CART

     1. Get existing cart from localStorage
     2. Check if product already exists
     3. Increase quantity if it exists
     4. Add product if it does not exist
     5. Save updated cart
     6. Update Header cart count
     7. Redirect to Cart page
     =================================================== */

  const addToCart = (product: Product) => {
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
        });
      }

      localStorage.setItem(
        "gift4u-cart",
        JSON.stringify(cart)
      );

      /* ===============================================
         UPDATE HEADER CART COUNT
         =============================================== */

      window.dispatchEvent(new Event("cartUpdated"));

      /* ===============================================
         REDIRECT TO CART PAGE

         added=true can be used by Cart page
         to show the bottom notification.
         =============================================== */

      router.push("/cart?added=true");
    } catch (error) {
      console.error(
        "Unable to add product to cart:",
        error
      );
    }
  };

  return (
    <>
      {/* =================================================
          HEADER
          ================================================= */}

      <Header />

      {/* =================================================
          BREADCRUMB

          Displays:

          Home > Anniversary
          ================================================= */}

      <Breadcrumb currentPage="Anniversary" />

      <main>

        {/* =================================================
            HERO SECTION

            =================================================

            HERO IMAGE PLACEHOLDER

            Later add your hero image inside:

            public/images/anniversary/

            Example:

            public/images/anniversary/anniversary-hero.jpg

            =================================================

            TO ADD A BACKGROUND IMAGE:

            You can replace the placeholder area with:

            <img
              src="/images/anniversary/anniversary-hero.jpg"
              alt="Anniversary Gifts"
              className="h-full w-full object-cover"
            />

            ================================================= */}

        <section className="bg-[#fff6f9]">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">

            <div className="grid items-center gap-10 lg:grid-cols-2">

              {/* =========================================
                  HERO TEXT
                  ========================================= */}

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d92f66]">
                  Celebrate Love & Memories
                </p>

                <h1 className="gift-heading mt-4 text-5xl font-bold leading-tight text-[#172033] sm:text-6xl">
                  Gifts for Every
                  <span className="block text-[#d92f66]">
                    Anniversary.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-[#667085]">
                  Celebrate beautiful memories, unforgettable
                  milestones and the special bond you share
                  with thoughtful anniversary gifts.
                </p>

                <Link
                  href="#anniversary-gifts"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d92f66] px-7 py-3.5 font-semibold text-white transition hover:bg-[#bd1d52]"
                >
                  Explore Anniversary Gifts

                  <ArrowRight size={19} />
                </Link>
              </div>

              {/* =========================================
                  HERO IMAGE PLACEHOLDER

                  ADD HERO IMAGE HERE LATER

                  Recommended location:

                  public/images/anniversary/

                  Recommended file name:

                  anniversary-hero.jpg

                  ========================================= */}

              <div className="relative min-h-[320px] overflow-hidden rounded-[2.5rem] border border-[#f0dfe6] bg-[#f8e8ee] sm:min-h-[400px]">

                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <div>
                    <Heart
                      size={45}
                      className="mx-auto mb-4 text-[#d92f66]"
                    />

                    <p className="font-bold text-[#667085]">
                      Add Anniversary Hero Image Here
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =================================================
            ANNIVERSARY ESSENTIALS
            ================================================= */}

        <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">

          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d92f66]">
              Everything for the celebration
            </p>

            <h2 className="gift-heading mt-2 text-3xl font-bold text-[#172033] sm:text-4xl">
              Anniversary Essentials
            </h2>

            <p className="mt-3 text-[#667085]">
              Thoughtful surprises to make every anniversary
              celebration more memorable.
            </p>
          </div>


          {/* ===============================================
              ESSENTIALS

              Circular shapes are used instead of
              standard boring boxes.

              =============================================== */}

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">

            {anniversaryEssentials.map((item) => (

              <Link
                key={item.name}
                href={item.href}
                className="group text-center"
              >

                {/* =========================================
                    IMAGE PLACEHOLDER

                    Currently an icon is displayed.

                    Later you can replace this icon with
                    a category image.

                    Recommended folder:

                    public/images/anniversary/categories/

                    ========================================= */}

                <div className="mx-auto flex aspect-square w-full max-w-[125px] items-center justify-center rounded-full border border-[#f0dfe6] bg-[#fff6f9] text-[#d92f66] shadow-sm transition duration-300 group-hover:-translate-y-2 group-hover:border-[#d92f66] group-hover:shadow-lg">

                  {item.icon}

                </div>

                <p className="mt-3 text-sm font-bold text-[#172033] transition group-hover:text-[#d92f66]">
                  {item.name}
                </p>

              </Link>

            ))}

          </div>

        </section>


        {/* =================================================
            FOR YOUR LOVED ONES

            Different shape used.

            NOT OVAL.

            Hexagon-inspired design.
            ================================================= */}

        <section className="bg-[#fff6f9] py-14">

          <div className="mx-auto max-w-7xl px-4 lg:px-8">

            <div className="mb-9 text-center">

              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d92f66]">
                Made for everyone
              </p>

              <h2 className="gift-heading mt-2 text-3xl font-bold text-[#172033] sm:text-4xl">
                For Your Loved Ones
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-[#667085]">
                Find the perfect anniversary surprise for
                the people who matter most.
              </p>

            </div>


            {/* =============================================
                RECIPIENT CARDS

                IMAGE PLACEHOLDERS INCLUDED.

                Recommended folder:

                public/images/anniversary/recipients/

                Example:

                bride.jpg
                groom.jpg
                relatives.jpg
                friends.jpg

                ============================================= */}

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">

              {lovedOnes.map((person) => (

                <Link
                  key={person.name}
                  href={person.href}
                  className="group"
                >

                  <div
                    className="relative flex aspect-[4/5] items-center justify-center overflow-hidden border border-[#f0dfe6] bg-white p-4 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#d92f66] hover:shadow-xl"
                    style={{
                      clipPath:
                        "polygon(25% 0%, 75% 0%, 100% 18%, 100% 82%, 75% 100%, 25% 100%, 0% 82%, 0% 18%)",
                    }}
                  >

                    <div className="flex h-full w-full flex-col items-center justify-center">

                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f8e8ee] text-[#d92f66]">
                        <Heart size={27} />
                      </div>

                      <p className="mt-5 text-sm font-bold text-[#172033] group-hover:text-[#d92f66]">
                        {person.name}
                      </p>

                      <span className="mt-2 text-xs font-medium text-[#667085]">
                        Explore Gifts
                      </span>

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>


        {/* =================================================
            ANNIVERSARY MILESTONES
            ================================================= */}

        <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">

          <div className="mb-8">

            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d92f66]">
              Every year tells a story
            </p>

            <h2 className="gift-heading mt-2 text-3xl font-bold text-[#172033] sm:text-4xl">
              Celebrate Every Milestone
            </h2>

          </div>


          {/* ===============================================
              MILESTONE CARDS

              Rounded arch design.

              =============================================== */}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {milestones.map((milestone) => (

              <Link
                key={milestone.name}
                href={milestone.href}
                className="group relative overflow-hidden rounded-t-[4rem] rounded-b-2xl border border-[#f0dfe6] bg-[#fff6f9] p-7 text-center transition hover:-translate-y-2 hover:border-[#d92f66] hover:shadow-lg"
              >

                {/* =========================================
                    IMAGE PLACEHOLDER

                    Add milestone image later.

                    Recommended folder:

                    public/images/anniversary/milestones/

                    ========================================= */}

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#d92f66] shadow-sm">
                  <Gift size={28} />
                </div>

                <h3 className="mt-5 font-bold text-[#172033] group-hover:text-[#d92f66]">
                  {milestone.name}
                </h3>

                <p className="mt-2 text-xs text-[#667085]">
                  Explore Gifts
                </p>

              </Link>

            ))}

          </div>

        </section>


        {/* =================================================
            FEATURED ANNIVERSARY GIFTS
            ================================================= */}

        <section
          id="anniversary-gifts"
          className="bg-[#fff6f9] py-14"
        >

          <div className="mx-auto max-w-7xl px-4 lg:px-8">

            <div className="mb-8">

              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d92f66]">
                Handpicked with love
              </p>

              <h2 className="gift-heading mt-2 text-3xl font-bold text-[#172033] sm:text-4xl">
                Featured Anniversary Gifts
              </h2>

              <p className="mt-3 text-[#667085]">
                Discover thoughtful gifts designed to make
                your celebration unforgettable.
              </p>

            </div>


            {/* =============================================
                FEATURED PRODUCTS

                Same size and design idea as the
                Homepage Newly Launched section.

                ============================================= */}

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {featuredProducts.map((product) => (

                <article
                  key={product.id}
                  className="overflow-hidden rounded-2xl border border-[#f0dfe6] bg-white transition hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* =========================================
                      PRODUCT IMAGE PLACEHOLDER

                      ADD PRODUCT IMAGE HERE LATER

                      Recommended folder:

                      public/images/anniversary/

                      Example:

                      public/images/anniversary/rose-cake.jpg

                      Replace the placeholder below
                      with an <img> tag later.

                      ========================================= */}

                  <div className="relative aspect-square overflow-hidden bg-[#f8e8ee]">

                    <div className="flex h-full w-full items-center justify-center p-4 text-center">

                      <span className="text-sm font-semibold text-[#667085]">
                        {product.name} Image
                      </span>

                    </div>


                    {/* FEATURED BADGE */}

                    <span className="absolute left-3 top-3 rounded-full bg-[#d92f66] px-3 py-1 text-xs font-bold text-white">
                      Featured
                    </span>


                    {/* WISHLIST BUTTON */}

                    <button
                      type="button"
                      aria-label={`Add ${product.name} to wishlist`}
                      className="absolute right-3 top-3 rounded-full bg-white p-2.5 text-[#172033] shadow-sm transition hover:text-[#d92f66]"
                    >
                      <Heart size={18} />
                    </button>

                  </div>


                  {/* PRODUCT DETAILS */}

                  <div className="p-5">

                    {/* PRODUCT RATING */}

                    <div className="flex items-center gap-1 text-sm font-semibold text-[#172033]">

                      <Star
                        size={15}
                        className="fill-[#f5aa18] text-[#f5aa18]"
                      />

                      <span>
                        {product.rating}
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
                        ADD TO CART

                        Automatically:

                        1. Adds product to cart
                        2. Updates quantity
                        3. Updates Header count
                        4. Redirects to Cart

                        ===================================== */}

                    <button
                      type="button"
                      onClick={() => addToCart(product)}
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


        {/* =================================================
            PERSONALIZED GIFTS SECTION

            Clicking button redirects to:

            /personalised

            ================================================= */}

        <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">

          <div className="overflow-hidden rounded-[2rem] border border-[#f0dfe6] bg-[#172033]">

            <div className="grid items-center lg:grid-cols-2">


              {/* ===========================================
                  PERSONALIZED GIFTS TEXT
                  =========================================== */}

              <div className="p-8 sm:p-12 lg:p-14">

                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f5b3c7]">
                  Make memories personal
                </p>

                <h2 className="gift-heading mt-3 text-3xl font-bold text-white sm:text-4xl">
                  Add a Personal Touch
                </h2>

                <p className="mt-4 max-w-lg leading-7 text-white/75">
                  Turn a beautiful anniversary memory into
                  something truly unforgettable with a
                  thoughtful personalised gift.
                </p>

                <Link
                  href="/personalised"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#d92f66] px-6 py-3 font-semibold text-white transition hover:bg-[#bd1d52]"
                >
                  Explore Personalised Gifts

                  <ArrowRight size={18} />
                </Link>

              </div>


              {/* ===========================================
                  PERSONALIZED GIFTS IMAGE PLACEHOLDER

                  ADD IMAGE HERE LATER

                  Recommended folder:

                  public/images/anniversary/

                  Recommended file:

                  personalised-anniversary.jpg

                  -------------------------------------------

                  Replace this placeholder later with:

                  <img
                    src="/images/anniversary/personalised-anniversary.jpg"
                    alt="Personalised Anniversary Gift"
                    className="h-full w-full object-cover"
                  />

                  =========================================== */}

              <div className="flex min-h-[300px] items-center justify-center bg-[#263249] p-6 text-center">

                <div>

                  <Heart
                    size={45}
                    className="mx-auto mb-4 text-[#d92f66]"
                  />

                  <p className="font-semibold text-white/70">
                    Add Personalised Gift Image Here
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================
    ANNIVERSARY HAMPERS SECTION

    This section uses the SAME DARK BLUE
    COLOR as the Personalised Gifts section.

    Clicking anywhere on this banner will
    redirect the user to the Hampers page.

    IMAGE PLACEHOLDER:
    Add the Anniversary Hampers background
    image later.
    ========================================= */}

<section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
  <Link
    href="/hampers"
    className="group block overflow-hidden rounded-3xl bg-[#172033] transition hover:shadow-2xl"
  >
    <div className="grid min-h-[420px] lg:grid-cols-2">
      
      {/* =====================================
          LEFT SIDE — TEXT CONTENT
          ===================================== */}

      <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
        
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f3a1ba]">
          Curated With Love
        </p>

        <h2 className="gift-heading mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
          Anniversary Hampers
        </h2>

        <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">
          Celebrate beautiful memories with thoughtfully curated hampers
          filled with love, surprises and unforgettable gifts.
        </p>

        <div className="mt-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#d92f66] px-6 py-3.5 font-semibold text-white transition group-hover:bg-[#bd1d52]">
            Explore Anniversary Hampers
            <span className="text-xl">→</span>
          </span>
        </div>

      </div>

      {/* =====================================
          RIGHT SIDE — IMAGE PLACEHOLDER

          ADD ANNIVERSARY HAMPERS IMAGE HERE
          LATER.

          STEP 1:
          Add your image inside:

          public/images/

          Example:

          public/images/anniversary-hampers.jpg


          STEP 2:
          Replace the placeholder <div>
          below with:


          <img
            src="/images/anniversary-hampers.jpg"
            alt="Anniversary Gift Hampers"
            className="h-full w-full object-cover"
          />


          ===================================== */}

      <div className="relative min-h-[280px] overflow-hidden bg-[#273248] lg:min-h-full">

        {/* IMAGE PLACEHOLDER — REMOVE THIS WHEN ADDING IMAGE */}

        <div className="flex h-full min-h-[280px] w-full items-center justify-center p-8 text-center lg:min-h-[420px]">
          <div>
            <p className="text-lg font-bold text-white/80">
              Add Anniversary Hampers Image Here
            </p>

            <p className="mt-2 text-sm text-white/50">
              Image placeholder
            </p>
          </div>
        </div>

      </div>

    </div>
  </Link>
</section>

      </main>


      {/* =================================================
          FOOTER
          ================================================= */}

      <Footer />

    </>
  );
}