"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Gift,
  ShieldCheck,
  Truck,
  Gem,
  Heart,
  Cake,
  Music,
  Sparkles,
  Wallet,
} from "lucide-react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";


/* =====================================================
   SHOP BY WEDDING EVENT

   HOW TO ADD IMAGES LATER:

   1. Put images inside:

      public/images/wedding/events/

   2. Example:

      public/images/wedding/events/engagement.jpg

   3. Replace:

      image: ""

   With:

      image: "/images/wedding/events/engagement.jpg"
   ===================================================== */

const weddingEvents = [
  {
    name: "Engagement",
    href: "/wedding?event=engagement",
    image: "",
    icon: Gem,
  },
  {
    name: "Haldi",
    href: "/wedding?event=haldi",
    image: "",
    icon: Sparkles,
  },
  {
    name: "Mehendi",
    href: "/wedding?event=mehendi",
    image: "",
    icon: Heart,
  },
  {
    name: "Sangeet",
    href: "/wedding?event=sangeet",
    image: "",
    icon: Music,
  },
  {
    name: "Wedding",
    href: "/wedding?event=wedding",
    image: "",
    icon: Gift,
  },
  {
    name: "Reception",
    href: "/wedding?event=reception",
    image: "",
    icon: Sparkles,
  },
  {
    name: "Post-Wedding",
    href: "/wedding?event=post-wedding",
    image: "",
    icon: Cake,
  },
];


/* =====================================================
   SHOP BY CATEGORY

   HOW TO ADD IMAGES LATER:

   Put images inside:

   public/images/wedding/categories/

   Example:

   public/images/wedding/categories/jewellery.jpg

   Then change:

   image: ""

   To:

   image: "/images/wedding/categories/jewellery.jpg"
   ===================================================== */

const weddingCategories = [
  {
    name: "Jewellery & Accessories",
    href: "/wedding?category=jewellery",
    image: "",
  },
  {
    name: "Wedding Clothing",
    href: "/wedding?category=clothing",
    image: "",
  },
  {
    name: "Home & Furniture",
    href: "/wedding?category=home",
    image: "",
  },
  {
    name: "Kitchen & Dining",
    href: "/wedding?category=kitchen",
    image: "",
  },
  {
    name: "Gift Hampers",
    href: "/wedding?category=hampers",
    image: "",
  },
  {
    name: "Traditional Gifts",
    href: "/wedding?category=traditional",
    image: "",
  },
  {
    name: "Personalised Gifts",
    href: "/wedding?category=personalised",
    image: "",
  },
  {
    name: "Flowers & Bouquets",
    href: "/wedding?category=flowers",
    image: "",
  },
  {
    name: "Beauty & Self-Care",
    href: "/wedding?category=beauty",
    image: "",
  },
  {
    name: "Wedding Decor",
    href: "/wedding?category=decor",
    image: "",
  },
];


/* =====================================================
   SHOP BY BUDGET

   These cards currently use icons.

   You can later add images if you want.

   Put images inside:

   public/images/wedding/budget/
   ===================================================== */

const budgetOptions = [
  {
    title: "Under ₹500",
    subtitle: "Small & thoughtful",
    href: "/wedding?budget=under-500",
    image: "",
  },
  {
    title: "₹500 - ₹1,000",
    subtitle: "Popular gifts",
    href: "/wedding?budget=500-1000",
    image: "",
  },
  {
    title: "₹1,000 - ₹2,500",
    subtitle: "Premium gifts",
    href: "/wedding?budget=1000-2500",
    image: "",
  },
  {
    title: "₹2,500 - ₹5,000",
    subtitle: "Special gifts",
    href: "/wedding?budget=2500-5000",
    image: "",
  },
  {
    title: "₹5,000+",
    subtitle: "Luxury gifts",
    href: "/wedding?budget=5000-plus",
    image: "",
  },
];


/* =====================================================
   SHOP BY CULTURE

   ADD IMAGES HERE LATER

   Folder:

   public/images/wedding/cultures/
   ===================================================== */

const cultureFilters = [
  {
    name: "Hindu",
    href: "/wedding?culture=Hindu",

    // ADD IMAGE HERE LATER
    image: "",
  },
  {
    name: "Muslim",
    href: "/wedding?culture=Muslim",

    // ADD IMAGE HERE LATER
    image: "",
  },
  {
    name: "Christian",
    href: "/wedding?culture=Christian",

    // ADD IMAGE HERE LATER
    image: "",
  },
  {
    name: "Sikh",
    href: "/wedding?culture=Sikh",

    // ADD IMAGE HERE LATER
    image: "",
  },
  {
    name: "Bengali",
    href: "/wedding?culture=Bengali",

    // ADD IMAGE HERE LATER
    image: "",
  },
  {
    name: "Punjabi",
    href: "/wedding?culture=Punjabi",

    // ADD IMAGE HERE LATER
    image: "",
  },
  {
    name: "Gujarati",
    href: "/wedding?culture=Gujarati",

    // ADD IMAGE HERE LATER
    image: "",
  },
  {
    name: "Rajasthani",
    href: "/wedding?culture=Rajasthani",

    // ADD IMAGE HERE LATER
    image: "",
  },
];


/* =====================================================
   SHOP BY STATE

   ADD IMAGES HERE LATER

   Folder:

   public/images/wedding/states/
   ===================================================== */

const stateFilters = [
  {
    name: "Maharashtra",
    href: "/wedding?state=Maharashtra",
    image: "",
  },
  {
    name: "Punjab",
    href: "/wedding?state=Punjab",
    image: "",
  },
  {
    name: "Rajasthan",
    href: "/wedding?state=Rajasthan",
    image: "",
  },
  {
    name: "Gujarat",
    href: "/wedding?state=Gujarat",
    image: "",
  },
  {
    name: "Tamil Nadu",
    href: "/wedding?state=Tamil-Nadu",
    image: "",
  },
  {
    name: "West Bengal",
    href: "/wedding?state=West-Bengal",
    image: "",
  },
];



/* =====================================================
   TYPE FOR HORIZONTAL CAROUSEL ITEMS
   ===================================================== */

type GiftItem = {
  name: string;
  href: string;
  image: string;
};



/* =====================================================
   HORIZONTAL GIFT RAIL

   USED FOR:

   - Shop by Culture
   - Shop by State

   FEATURES:

   - One horizontal line
   - Smooth scrolling
   - Left arrow
   - Right arrow
   - Homepage CategoryRail style
   ===================================================== */

function HorizontalGiftRail({
  items,
}: {
  items: GiftItem[];
}) {
  const scrollContainerRef =
    useRef<HTMLDivElement>(null);


  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };


  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };


  return (
    <div className="relative">


      {/* ===============================
          LEFT SCROLL ARROW
          =============================== */}

      <button
        type="button"
        onClick={scrollLeft}
        aria-label="Scroll left"
        className="
          absolute
          left-2
          top-1/2
          z-20
          flex
          h-10
          w-10
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white
          text-[#172033]
          shadow-lg
          transition
          hover:bg-[#d92f66]
          hover:text-white
        "
      >
        <ChevronLeft size={22} />
      </button>


      {/* ===============================
          HORIZONTAL CARD CONTAINER
          =============================== */}

      <div
        ref={scrollContainerRef}
        className="
          flex
          flex-nowrap
          gap-4
          overflow-x-auto
          scroll-smooth
          px-1
          pb-3

          [-ms-overflow-style:none]
          [scrollbar-width:none]

          [&::-webkit-scrollbar]:hidden
        "
      >
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="
              group
              relative
              aspect-[4/5]

              w-40
              min-w-40

              sm:w-44
              sm:min-w-44

              lg:w-[190px]
              lg:min-w-[190px]

              shrink-0
              overflow-hidden
              rounded-2xl
              border
              border-[#f0dfe6]
              bg-[#fff6f9]
              transition
              hover:-translate-y-1
              hover:border-[#d92f66]
              hover:shadow-lg
            "
          >


            {/* ===============================
                IMAGE AREA

                WHEN YOU ADD IMAGE PATH,
                THE REAL IMAGE WILL APPEAR.

                UNTIL THEN,
                PLACEHOLDER WILL APPEAR.
                =============================== */}

            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                "
              />
            ) : (
              <div
                className="
                  flex
                  h-full
                  w-full
                  items-center
                  justify-center
                  bg-[#f8e8ee]
                  p-4
                  text-center
                  text-sm
                  font-semibold
                  text-[#667085]
                "
              >
                {item.name} Image
              </div>
            )}


            {/* ===============================
                BOTTOM TEXT AREA
                =============================== */}

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                bg-[#172033]
                p-4
                text-white
              "
            >
              <h3 className="text-lg font-bold">
                {item.name}
              </h3>

              <p className="mt-1 text-xs text-white/85">
                Explore gifts →
              </p>
            </div>

          </Link>
        ))}
      </div>


      {/* ===============================
          RIGHT SCROLL ARROW
          =============================== */}

      <button
        type="button"
        onClick={scrollRight}
        aria-label="Scroll right"
        className="
          absolute
          right-2
          top-1/2
          z-20
          flex
          h-10
          w-10
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white
          text-[#172033]
          shadow-lg
          transition
          hover:bg-[#d92f66]
          hover:text-white
        "
      >
        <ChevronRight size={22} />
      </button>

    </div>
  );
}



/* =====================================================
   SHOP BY WEDDING EVENT COMPONENT

   DESIGN:

   - Rounded cards
   - Image/Icon area
   - More attractive than simple text buttons
   ===================================================== */

function WeddingEventSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">


      {/* SECTION HEADER */}

      <div className="mb-7 flex items-end justify-between gap-4">

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d92f66]">
            Every celebration matters
          </p>

          <h2 className="gift-heading mt-2 text-3xl font-bold text-[#172033] sm:text-4xl">
            Shop by Wedding Event
          </h2>
        </div>


        <Link
          href="/wedding"
          className="hidden text-sm font-bold text-[#d92f66] hover:underline sm:inline"
        >
          View all →
        </Link>

      </div>


      {/* =====================================
          WEDDING EVENT CARDS

          Each card has:

          - Image placeholder
          - Icon
          - Event name
          ===================================== */}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">

        {weddingEvents.map((event) => {
          const Icon = event.icon;

          return (
            <Link
              key={event.name}
              href={event.href}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-[#f0dfe6]
                bg-white
                p-3
                text-center
                transition
                hover:-translate-y-1
                hover:border-[#d92f66]
                hover:shadow-lg
              "
            >


              {/* =================================
                  IMAGE AREA

                  ADD EVENT IMAGE HERE LATER.

                  Example:

                  image:
                  "/images/wedding/events/haldi.jpg"
                  ================================= */}

              <div
                className="
                  relative
                  mx-auto
                  flex
                  aspect-square
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  bg-[#fff6f9]
                "
              >

                {event.image ? (

                  /* ACTUAL IMAGE */

                  <img
                    src={event.image}
                    alt={event.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-105
                    "
                  />

                ) : (

                  /* IMAGE PLACEHOLDER */

                  <div className="flex flex-col items-center gap-2">

                    <Icon
                      size={30}
                      className="text-[#d92f66]"
                    />

                    <span className="text-xs font-medium text-[#667085]">
                      Add Image
                    </span>

                  </div>

                )}

              </div>


              {/* EVENT NAME */}

              <h3 className="mt-3 text-sm font-bold text-[#172033] group-hover:text-[#d92f66]">

                {event.name}

              </h3>

            </Link>
          );
        })}

      </div>

    </section>
  );
}



/* =====================================================
   SHOP BY CATEGORY COMPONENT

   DESIGN INSPIRATION:

   - CIRCULAR IMAGE AREA
   - NOT ONLY RECTANGULAR BOXES
   - CLEAN AND MODERN LOOK

   This gives variety to the page.
   ===================================================== */

function WeddingCategorySection() {
  return (
    <section className="border-y border-[#f3e7eb] bg-[#fffafc] py-12">


      <div className="mx-auto max-w-7xl px-4 lg:px-8">


        {/* SECTION HEADER */}

        <div className="mb-8 flex items-end justify-between gap-4">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d92f66]">
              Find the perfect gift
            </p>

            <h2 className="gift-heading mt-2 text-3xl font-bold text-[#172033] sm:text-4xl">
              Shop by Category
            </h2>
          </div>


          <Link
            href="/wedding"
            className="hidden text-sm font-bold text-[#d92f66] hover:underline sm:inline"
          >
            View all →
          </Link>

        </div>


        {/* =====================================
            CIRCULAR CATEGORY ITEMS

            The image area is CIRCULAR.

            This prevents the website from
            looking like it only contains boxes.
            ===================================== */}

        <div className="grid grid-cols-3 gap-x-4 gap-y-7 sm:grid-cols-5 lg:grid-cols-10">

          {weddingCategories.map((category) => (

            <Link
              key={category.name}
              href={category.href}
              className="
                group
                flex
                flex-col
                items-center
                text-center
              "
            >


              {/* =================================
                  CIRCULAR IMAGE CONTAINER

                  ADD CATEGORY IMAGE HERE LATER.

                  Example:

                  image:
                  "/images/wedding/categories/jewellery.jpg"
                  ================================= */}

              <div
                className="
                  relative
                  flex
                  aspect-square
                  w-full
                  max-w-[105px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-[#f0dfe6]
                  bg-[#fff6f9]
                  shadow-sm
                  transition
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:border-[#d92f66]
                  group-hover:shadow-md
                "
              >

                {category.image ? (

                  /* ACTUAL CATEGORY IMAGE */

                  <img
                    src={category.image}
                    alt={category.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-110
                    "
                  />

                ) : (

                  /* IMAGE PLACEHOLDER */

                  <div className="px-3 text-center text-xs font-semibold text-[#667085]">

                    Add Image

                  </div>

                )}

              </div>


              {/* CATEGORY NAME */}

              <h3
                className="
                  mt-3
                  text-xs
                  font-bold
                  leading-5
                  text-[#172033]
                  transition
                  group-hover:text-[#d92f66]

                  sm:text-sm
                "
              >

                {category.name}

              </h3>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}



/* =====================================================
   SHOP BY BUDGET COMPONENT

   DESIGN:

   - Wide horizontal cards
   - Different shape from other sections
   - Icon on left
   - Text on right

   This adds design variety.
   ===================================================== */

function WeddingBudgetSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">


      {/* SECTION HEADER */}

      <div className="mb-7">

        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d92f66]">
          Gifts for every budget
        </p>

        <h2 className="gift-heading mt-2 text-3xl font-bold text-[#172033] sm:text-4xl">
          Shop by Budget
        </h2>

        <p className="mt-3 text-[#667085]">
          Find something special, no matter how much you want to spend.
        </p>

      </div>


      {/* =====================================
          BUDGET CARDS

          DIFFERENT DESIGN:

          Wide horizontal cards instead
          of square or circular cards.
          ===================================== */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

        {budgetOptions.map((budget, index) => (

          <Link
            key={budget.title}
            href={budget.href}
            className="
              group
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-[#f0dfe6]
              bg-white
              p-4
              transition
              hover:-translate-y-1
              hover:border-[#d92f66]
              hover:shadow-lg
            "
          >


            {/* =================================
                IMAGE / ICON AREA

                If you add an image later,
                it will appear here.

                Until then,
                the Gift icon appears.
                ================================= */}

            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                bg-[#fff1f6]
              "
            >

              {budget.image ? (

                /* ACTUAL IMAGE */

                <img
                  src={budget.image}
                  alt={budget.title}
                  className="h-full w-full object-cover"
                />

              ) : (

                /* DEFAULT ICON */

                <Wallet
                  size={25}
                  className={
                    index === 4
                      ? "text-[#d92f66]"
                      : "text-[#d92f66]"
                  }
                />

              )}

            </div>


            {/* BUDGET TEXT */}

            <div>

              <h3 className="text-sm font-bold text-[#172033] group-hover:text-[#d92f66]">

                {budget.title}

              </h3>


              <p className="mt-1 text-xs text-[#667085]">

                {budget.subtitle}

              </p>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}



/* =====================================================
   MAIN WEDDING PAGE
   ===================================================== */

export default function WeddingPage() {

  return (

    <>


      {/* =================================================
          HEADER
          ================================================= */}

      <Header />


      {/* =================================================
          BREADCRUMB

          DISPLAY:

          Home > Wedding
          ================================================= */}

      <Breadcrumb currentPage="Wedding" />


      <main>


        {/* =================================================
            HERO SECTION

            IMPORTANT:

            The background image belongs ONLY
            to this Hero section.

            It does NOT extend to the other sections.
            ================================================= */}

        <section className="px-4 py-6 lg:px-8">

          <div
            className="
              relative
              mx-auto
              max-w-7xl
              overflow-hidden
              rounded-3xl
            "
          >


            {/* =============================================
                HERO BACKGROUND IMAGE

                PUT YOUR HERO IMAGE HERE:

                public/images/wedding-hero.jpg

                Change the src below if you use
                another filename.
                ============================================= */}

            <img
              src="/images/wedding-hero.jpg"
              alt="Wedding Gifts"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />


            {/* DARK OVERLAY */}

            <div className="absolute inset-0 bg-black/40" />


            {/* HERO CONTENT */}

            <div
              className="
                relative
                z-10
                flex
                min-h-[450px]
                items-center
                px-6
                py-16

                sm:px-12

                lg:min-h-[500px]
                lg:px-16
              "
            >

              <div className="max-w-2xl">


                {/* SMALL HEADING */}

                <p
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-white/90
                  "
                >
                  The Gift4U Wedding Edit
                </p>


                {/* MAIN HEADING */}

                <h1
                  className="
                    gift-heading
                    mt-4
                    text-5xl
                    font-bold
                    leading-tight
                    text-white

                    sm:text-6xl
                  "
                >
                  Celebrate Their Forever.
                </h1>


                {/* DESCRIPTION */}

                <p
                  className="
                    mt-5
                    max-w-2xl
                    text-lg
                    leading-8
                    text-white/90
                  "
                >
                  From meaningful keepsakes to grand wedding hampers,
                  find a gift that feels as special as their new beginning.
                </p>


                {/* BUTTON */}

                <Link
                  href="#wedding-gifts"
                  className="
                    mt-8
                    inline-flex
                    rounded-full
                    bg-[#d92f66]
                    px-6
                    py-3.5
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#bd1d52]
                  "
                >
                  Explore Wedding Gifts
                </Link>

              </div>

            </div>

          </div>

        </section>



        {/* =================================================
            NEW SECTION 1

            SHOP BY WEDDING EVENT
            ================================================= */}

        <WeddingEventSection />



        {/* =================================================
            NEW SECTION 2

            SHOP BY CATEGORY

            Uses CIRCULAR image design.
            ================================================= */}

        <WeddingCategorySection />



        {/* =================================================
            NEW SECTION 3

            SHOP BY BUDGET

            Uses horizontal rectangular cards.
            ================================================= */}

        <WeddingBudgetSection />



        {/* =================================================
            SHOP BY CULTURE
            ================================================= */}

        <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">


          {/* SECTION HEADER */}

          <div className="mb-7">

            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d92f66]">
              Celebrate traditions
            </p>


            <h2 className="gift-heading mt-2 text-3xl font-bold text-[#172033] sm:text-4xl">
              Shop by Culture
            </h2>


            <p className="mt-3 text-[#667085]">
              Discover thoughtful wedding gifts inspired by every tradition.
            </p>

          </div>


          {/* CULTURE HORIZONTAL CAROUSEL */}

          <HorizontalGiftRail
            items={cultureFilters}
          />


        </section>



        {/* =================================================
            SHOP BY STATE
            ================================================= */}

        <section className="bg-[#fff6f9] py-14">

          <div className="mx-auto max-w-7xl px-4 lg:px-8">


            {/* SECTION HEADER */}

            <div className="mb-7">

              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d92f66]">
                Regional celebrations
              </p>


              <h2 className="gift-heading mt-2 text-3xl font-bold text-[#172033] sm:text-4xl">
                Shop by State
              </h2>


              <p className="mt-3 text-[#667085]">
                Find wedding gifts inspired by celebrations from across India.
              </p>

            </div>


            {/* STATE HORIZONTAL CAROUSEL */}

            <HorizontalGiftRail
              items={stateFilters}
            />


          </div>

        </section>



        {/* =================================================
            WEDDING BENEFITS / FEATURES
            ================================================= */}

        <section
          className="
            mx-auto
            grid
            max-w-7xl
            gap-5
            px-4
            py-12

            sm:grid-cols-3

            lg:px-8
          "
        >


          {/* =============================================
              FEATURE 1
              ============================================= */}

          <article
            className="
              rounded-2xl
              border
              border-[#f0dfe6]
              bg-white
              p-6
              transition
              hover:-translate-y-1
              hover:shadow-lg
            "
          >

            <Truck
              className="text-[#d92f66]"
              size={28}
            />


            <h2 className="mt-4 text-lg font-bold text-[#172033]">
              Timely Delivery
            </h2>


            <p className="mt-2 text-sm leading-6 text-[#667085]">
              Delivery options designed around your celebration date.
            </p>

          </article>



          {/* =============================================
              FEATURE 2
              ============================================= */}

          <article
            className="
              rounded-2xl
              border
              border-[#f0dfe6]
              bg-white
              p-6
              transition
              hover:-translate-y-1
              hover:shadow-lg
            "
          >

            <Gift
              className="text-[#d92f66]"
              size={28}
            />


            <h2 className="mt-4 text-lg font-bold text-[#172033]">
              Wedding Combos
            </h2>


            <p className="mt-2 text-sm leading-6 text-[#667085]">
              Explore hampers, furniture, and electrical gifting combinations.
            </p>

          </article>



          {/* =============================================
              FEATURE 3
              ============================================= */}

          <article
            className="
              rounded-2xl
              border
              border-[#f0dfe6]
              bg-white
              p-6
              transition
              hover:-translate-y-1
              hover:shadow-lg
            "
          >

            <ShieldCheck
              className="text-[#d92f66]"
              size={28}
            />


            <h2 className="mt-4 text-lg font-bold text-[#172033]">
              Gifting Made Easy
            </h2>


            <p className="mt-2 text-sm leading-6 text-[#667085]">
              Quality-checked products and secure payments at every step.
            </p>

          </article>

        </section>



        {/* =================================================
            WEDDING GIFTS

            The Hero button redirects here:

            Explore Wedding Gifts
            ================================================= */}

        <section
          id="wedding-gifts"
          className="bg-[#fff6f9] py-14"
        >

          <div className="mx-auto max-w-7xl px-4 lg:px-8">


            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d92f66]">
              Wedding favourites
            </p>


            <h2 className="gift-heading mt-2 text-3xl font-bold text-[#172033] sm:text-4xl">
              Gifts for a Lifetime of Memories
            </h2>


            <p className="mt-4 text-[#667085]">
              Wedding products will appear here next, filtered by culture,
              state, category, event, and budget.
            </p>


            {/* =============================================
                FUTURE SECTION

                PRODUCT CARDS WILL BE ADDED HERE.

                Example:

                - Product Image
                - Product Name
                - Price
                - Rating
                - Add to Cart
                - Wishlist
                ============================================= */}

          </div>

        </section>


      </main>



      {/* =================================================
          FOOTER
          ================================================= */}

      <Footer />


    </>

  );
}