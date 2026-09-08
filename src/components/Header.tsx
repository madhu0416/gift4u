"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Heart,
  MapPin,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";


/* =====================================================
   NAVIGATION LINKS

   Birthday is added before Anniversary.
   ===================================================== */

const navigation = [
  { label: "Wedding", href: "/wedding" },

  { label: "Occasions", href: "/occasions" },

  /* BIRTHDAY PAGE */
  { label: "Birthday", href: "/birthday" },

  { label: "Anniversary", href: "/anniversary" },

  { label: "Hampers", href: "/hampers" },

  { label: "Personalised", href: "/personalised" },

  { label: "Lifestyle", href: "/lifestyle" },
];


export default function Header() {


  /* =====================================================
     CART COUNT STATE

     This stores the total number of products
     currently present in the cart.
     ===================================================== */

  const [cartCount, setCartCount] = useState(0);


  /* =====================================================
     GET CART COUNT

     Cart data is stored in localStorage using:

     "gift4u-cart"

     Example cart data:

     [
       {
         id: 1,
         name: "Premium Diwali Gift Box",
         price: 1499,
         quantity: 2
       }
     ]

     The cart count should show the TOTAL QUANTITY.

     Example:

     Product A → quantity 2
     Product B → quantity 1

     Cart badge will show:

     3
     ===================================================== */

  const updateCartCount = () => {

    /* Get cart from localStorage */

    const cart = JSON.parse(
      localStorage.getItem("gift4u-cart") || "[]"
    );


    /* Calculate total quantity */

    const totalItems = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );


    /* Update cart count */

    setCartCount(totalItems);

  };


  /* =====================================================
     LOAD CART COUNT

     Runs when Header is loaded.

     Also listens for the custom "cartUpdated" event.

     This event is sent when the user clicks:

     Add to Cart
     ===================================================== */

  useEffect(() => {


    /* Get initial cart count */

    updateCartCount();


    /* Listen for cart updates */

    window.addEventListener(
      "cartUpdated",
      updateCartCount
    );


    /* Cleanup event listener */

    return () => {

      window.removeEventListener(
        "cartUpdated",
        updateCartCount
      );

    };


  }, []);


  return (

    <header className="border-b border-[#f0dfe6] bg-white">


      {/* =================================================
          TOP ANNOUNCEMENT BAR
          ================================================= */}

      <div className="bg-[#172033] px-4 py-2 text-center text-xs font-medium text-white sm:text-sm">

        Same-day delivery available · Free shipping above ₹999 · Corporate gifting

      </div>


      {/* =================================================
          MAIN HEADER
          ================================================= */}

      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-5 lg:px-8">


        {/* ===============================================
            WEBSITE LOGO
            =============================================== */}

        <Link
          href="/"
          className="shrink-0 font-[Georgia] text-3xl font-bold tracking-tight text-[#d92f66]"
        >

          Gift4U

        </Link>


        {/* ===============================================
            SEARCH BAR
            =============================================== */}

        <div className="hidden flex-1 items-center rounded-full border border-[#f0dfe6] bg-[#fff6f9] px-4 py-2.5 md:flex">


          <Search
            size={19}
            className="mr-2 text-[#667085]"
          />


          <input
            type="search"
            placeholder="Search gifts, occasions and more"
            className="w-full bg-transparent text-sm text-[#172033] outline-none placeholder:text-[#667085]"
          />


        </div>


        {/* ===============================================
            HEADER ACTIONS
            =============================================== */}

        <div className="ml-auto flex items-center gap-3 text-[#172033] sm:gap-5">


          {/* =============================================
              DELIVERY LOCATION
              ============================================= */}

          <button
            type="button"
            aria-label="Choose delivery location"
            className="hidden items-center gap-1.5 text-sm font-medium lg:flex"
          >

            <MapPin
              size={19}
              className="text-[#d92f66]"
            />


            Deliver to

          </button>


          {/* =============================================
              SIGN IN
              ============================================= */}

          <Link
            href="/login"
            aria-label="Sign in"
            className="flex flex-col items-center gap-1 text-xs font-medium transition hover:text-[#d92f66]"
          >

            <UserRound size={20} />


            <span className="hidden sm:inline">
              Sign In
            </span>

          </Link>


          {/* =============================================
              WISHLIST
              ============================================= */}

          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="flex flex-col items-center gap-1 text-xs font-medium transition hover:text-[#d92f66]"
          >

            <Heart size={20} />


            <span className="hidden sm:inline">
              Wishlist
            </span>

          </Link>


          {/* =============================================
              SHOPPING CART

              Cart count is dynamically updated.
              ============================================= */}

          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="relative flex flex-col items-center gap-1 text-xs font-medium transition hover:text-[#d92f66]"
          >


            {/* CART ICON */}

            <ShoppingCart size={21} />


            {/* =============================================
                CART COUNT BADGE

                Only show badge when cart has items.

                Example:

                🛒 1
                🛒 2
                🛒 5
                ============================================= */}

            {cartCount > 0 && (

              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d92f66] px-1 text-[10px] font-semibold text-white">

                {cartCount}

              </span>

            )}


            {/* CART TEXT */}

            <span className="hidden sm:inline">

              Cart

            </span>


          </Link>


        </div>


      </div>


      {/* =================================================
          NAVIGATION MENU
          ================================================= */}

      <nav className="overflow-x-auto border-t border-[#f0dfe6]">


        <div className="mx-auto flex max-w-7xl min-w-max items-center gap-7 px-4 py-3 text-sm font-semibold lg:px-8">


          {navigation.map((item) => (

            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-[#d92f66]"
            >

              {item.label}

            </Link>

          ))}


        </div>


      </nav>


    </header>

  );

}