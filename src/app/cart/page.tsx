"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  ArrowLeft,
  CheckCircle2,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

/* =========================================
   CART ITEM TYPE
========================================= */

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

/* =========================================
   CART PAGE
========================================= */

export default function CartPage() {
  /* =========================================
     CART STATE
  ========================================= */

  const [cartItems, setCartItems] =
    useState<CartItem[]>([]);

  const [isLoaded, setIsLoaded] =
    useState(false);

  /* =========================================
     BOTTOM POPUP / TOAST STATE

     THIS WILL SHOW:

     "Product Name added to cart"
  ========================================= */

  const [toastMessage, setToastMessage] =
    useState("");

  /* =========================================
     LOAD CART FROM LOCAL STORAGE
  ========================================= */

  useEffect(() => {
    const storedCart =
      localStorage.getItem("gift4u-cart");

    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.error(
          "Unable to load cart:",
          error
        );
      }
    }

    setIsLoaded(true);
  }, []);

  /* =========================================
     SHOW "ADDED TO CART" POPUP

     WHEN A PRODUCT IS ADDED FROM:
     - BIRTHDAY PAGE
     - OCCASIONS PAGE
     - WEDDING PAGE
     - ANY FUTURE PAGE

     THE PRODUCT PAGE SAVES A MESSAGE IN:

     sessionStorage

     THIS CART PAGE READS THAT MESSAGE
     AND SHOWS THE POPUP AT THE BOTTOM.
  ========================================= */

  useEffect(() => {
    const message =
      sessionStorage.getItem(
        "gift4u-cart-toast"
      );

    if (message) {
      setToastMessage(message);

      /* =====================================
         REMOVE MESSAGE FROM SESSION STORAGE

         SO IT DOES NOT APPEAR AGAIN
         WHEN USER REFRESHES THE PAGE.
      ===================================== */

      sessionStorage.removeItem(
        "gift4u-cart-toast"
      );

      /* =====================================
         AUTOMATICALLY HIDE POPUP
         AFTER 3 SECONDS
      ===================================== */

      const timer = setTimeout(() => {
        setToastMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  /* =========================================
     UPDATE CART

     UPDATE:
     1. REACT STATE
     2. LOCAL STORAGE
     3. HEADER CART COUNT
  ========================================= */

  const updateCart = (
    updatedItems: CartItem[]
  ) => {
    /* Update page */

    setCartItems(updatedItems);

    /* Save cart */

    localStorage.setItem(
      "gift4u-cart",
      JSON.stringify(updatedItems)
    );

    /* =====================================
       NOTIFY HEADER

       HEADER WILL UPDATE
       THE CART PRODUCT COUNT.
    ===================================== */

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  /* =========================================
     INCREASE QUANTITY
  ========================================= */

  const increaseQuantity = (id: number) => {
    const updatedItems = cartItems.map(
      (item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
    );

    updateCart(updatedItems);
  };

  /* =========================================
     DECREASE QUANTITY

     IF QUANTITY BECOMES 0,
     PRODUCT IS REMOVED.
  ========================================= */

  const decreaseQuantity = (id: number) => {
    const updatedItems = cartItems
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter(
        (item) => item.quantity > 0
      );

    updateCart(updatedItems);
  };

  /* =========================================
     REMOVE SINGLE PRODUCT
  ========================================= */

  const removeItem = (id: number) => {
    const updatedItems =
      cartItems.filter(
        (item) => item.id !== id
      );

    updateCart(updatedItems);
  };

  /* =========================================
     CLEAR ENTIRE CART
  ========================================= */

  const clearCart = () => {
    updateCart([]);
  };

  /* =========================================
     CALCULATE SUBTOTAL
  ========================================= */

  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  );

  /* =========================================
     SHIPPING

     FREE SHIPPING ABOVE ₹999
     OTHERWISE ₹99 SHIPPING
  ========================================= */

  const shipping =
    subtotal === 0
      ? 0
      : subtotal >= 999
      ? 0
      : 99;

  /* =========================================
     TOTAL
  ========================================= */

  const total = subtotal + shipping;

  /* =========================================
     LOADING SCREEN
  ========================================= */

  if (!isLoaded) {
    return (
      <>
        <Header />

        <main className="flex min-h-[60vh] items-center justify-center">
          <p className="text-[#667085]">
            Loading your cart...
          </p>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      {/* =====================================
          HEADER
      ===================================== */}

      <Header />

      {/* =====================================
          BREADCRUMB
      ===================================== */}

      <Breadcrumb currentPage="Cart" />

      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <main className="bg-[#fff6f9]">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">

          {/* =================================
              PAGE TITLE
          ================================= */}

          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d92f66]">
              Your Shopping Bag
            </p>

            <h1 className="gift-heading mt-2 text-4xl font-bold text-[#172033] sm:text-5xl">
              Shopping Cart
            </h1>
          </div>

          {/* =================================
              EMPTY CART
          ================================= */}

          {cartItems.length === 0 ? (
            <section className="rounded-3xl border border-[#f0dfe6] bg-white px-6 py-16 text-center sm:px-12">

              {/* CART ICON */}

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff0f5]">
                <ShoppingBag
                  size={36}
                  className="text-[#d92f66]"
                />
              </div>

              <h2 className="gift-heading mt-6 text-3xl font-bold text-[#172033]">
                Your Cart is Empty
              </h2>

              <p className="mx-auto mt-3 max-w-md text-[#667085]">
                Looks like you have not added
                any gifts yet. Discover something
                special for your loved ones.
              </p>

              <Link
                href="/"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#d92f66] px-6 py-3.5 font-semibold text-white transition hover:bg-[#bd1d52]"
              >
                <ArrowLeft size={18} />

                Continue Shopping
              </Link>
            </section>
          ) : (
            /* ===============================
                CART CONTENT
            =============================== */

            <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

              {/* =============================
                  CART PRODUCTS
              ============================= */}

              <section className="space-y-5">

                {/* PRODUCT COUNT + CLEAR CART */}

                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-[#667085]">
                    {cartItems.length}{" "}

                    {cartItems.length === 1
                      ? "Product"
                      : "Products"}

                    {" "}in your cart
                  </p>

                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-sm font-semibold text-[#d92f66] hover:underline"
                  >
                    Clear Cart
                  </button>
                </div>

                {/* =============================
                    CART PRODUCTS
                ============================= */}

                {cartItems.map((item) => (
                  <article
                    key={item.id}
                    className="flex gap-4 rounded-2xl border border-[#f0dfe6] bg-white p-4 sm:gap-6 sm:p-5"
                  >

                    {/* =========================
                        PRODUCT IMAGE

                        IF YOU ADD PRODUCT IMAGES
                        LATER, REPLACE THIS DIV
                        WITH:

                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />

                        CURRENTLY:
                        IMAGE PLACEHOLDER
                    ========================= */}

                    <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#fff6f9] text-center text-xs font-semibold text-[#667085] sm:h-28 sm:w-28">

                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        "Product Image"
                      )}

                    </div>

                    {/* =========================
                        PRODUCT INFORMATION
                    ========================= */}

                    <div className="flex min-w-0 flex-1 flex-col">

                      <div className="flex justify-between gap-4">

                        {/* PRODUCT NAME + PRICE */}

                        <div>
                          <h2 className="text-base font-bold text-[#172033] sm:text-lg">
                            {item.name}
                          </h2>

                          <p className="mt-2 text-lg font-bold text-[#d92f66]">
                            ₹{item.price}
                          </p>
                        </div>

                        {/* =====================
                            REMOVE BUTTON
                        ===================== */}

                        <button
                          type="button"
                          aria-label={`Remove ${item.name}`}
                          onClick={() =>
                            removeItem(item.id)
                          }
                          className="h-fit text-[#667085] transition hover:text-red-500"
                        >
                          <Trash2 size={19} />
                        </button>
                      </div>

                      {/* =====================
                          QUANTITY CONTROLS
                      ===================== */}

                      <div className="mt-auto flex items-center justify-between pt-5">

                        <div className="flex items-center overflow-hidden rounded-full border border-[#f0dfe6]">

                          {/* DECREASE */}

                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() =>
                              decreaseQuantity(
                                item.id
                              )
                            }
                            className="flex h-9 w-9 items-center justify-center transition hover:bg-[#fff6f9]"
                          >
                            <Minus size={16} />
                          </button>

                          {/* QUANTITY */}

                          <span className="flex h-9 w-10 items-center justify-center border-x border-[#f0dfe6] text-sm font-bold">
                            {item.quantity}
                          </span>

                          {/* INCREASE */}

                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() =>
                              increaseQuantity(
                                item.id
                              )
                            }
                            className="flex h-9 w-9 items-center justify-center transition hover:bg-[#fff6f9]"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        {/* TOTAL PRICE OF PRODUCT */}

                        <p className="text-base font-bold text-[#172033]">
                          ₹
                          {item.price *
                            item.quantity}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}

                {/* =============================
                    CONTINUE SHOPPING
                ============================= */}

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#d92f66] hover:underline"
                >
                  <ArrowLeft size={17} />

                  Continue Shopping
                </Link>
              </section>

              {/* =============================
                  ORDER SUMMARY
              ============================= */}

              <aside className="h-fit rounded-2xl border border-[#f0dfe6] bg-white p-6 lg:sticky lg:top-6">

                <h2 className="text-xl font-bold text-[#172033]">
                  Order Summary
                </h2>

                {/* =============================
                    SUBTOTAL + SHIPPING
                ============================= */}

                <div className="mt-6 space-y-4 border-b border-[#f0dfe6] pb-6">

                  {/* SUBTOTAL */}

                  <div className="flex justify-between text-[#667085]">
                    <span>
                      Subtotal
                    </span>

                    <span>
                      ₹{subtotal}
                    </span>
                  </div>

                  {/* SHIPPING */}

                  <div className="flex justify-between text-[#667085]">
                    <span>
                      Shipping
                    </span>

                    <span
                      className={
                        shipping === 0
                          ? "font-semibold text-green-600"
                          : ""
                      }
                    >
                      {shipping === 0
                        ? "FREE"
                        : `₹${shipping}`}
                    </span>
                  </div>
                </div>

                {/* =============================
                    TOTAL
                ============================= */}

                <div className="flex items-center justify-between pt-5">

                  <span className="text-lg font-bold text-[#172033]">
                    Total
                  </span>

                  <span className="text-2xl font-bold text-[#172033]">
                    ₹{total}
                  </span>
                </div>

                {/* =============================
                    FREE SHIPPING MESSAGE
                ============================= */}

                {subtotal > 0 &&
                  subtotal < 999 && (
                    <div className="mt-5 rounded-xl bg-[#fff6f9] p-4 text-sm text-[#667085]">
                      Add ₹{999 - subtotal} more
                      to get{" "}

                      <span className="font-bold text-[#d92f66]">
                        Free Shipping!
                      </span>
                    </div>
                  )}

                {/* =============================
                    FREE SHIPPING UNLOCKED
                ============================= */}

                {subtotal >= 999 && (
                  <div className="mt-5 rounded-xl bg-[#fff0f5] p-4 text-sm font-semibold text-[#d92f66]">
                    🎉 Congratulations!
                    <br />
                    You have unlocked Free Shipping.
                  </div>
                )}

                {/* =============================
                    CHECKOUT BUTTON

                    WE WILL BUILD THE CHECKOUT
                    PAGE LATER.
                ============================= */}

                <button
                  type="button"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#d92f66] px-5 py-4 font-semibold text-white transition hover:bg-[#bd1d52]"
                >
                  <ShoppingBag size={19} />

                  Proceed to Checkout
                </button>

                {/* =============================
                    SECURITY MESSAGE
                ============================= */}

                <p className="mt-4 text-center text-xs text-[#667085]">
                  🔒 Secure payments · Easy returns
                </p>
              </aside>
            </div>
          )}
        </div>
      </main>

      {/* =====================================
          FOOTER
      ===================================== */}

      <Footer />

      {/* =====================================
          BOTTOM "ADDED TO CART" POPUP

          THIS POPUP APPEARS AT THE BOTTOM
          OF THE SCREEN.

          EXAMPLE:

          ✓ Personalised Birthday Photo Frame
            added to cart

          AUTOMATICALLY DISAPPEARS
          AFTER 3 SECONDS.
      ===================================== */}

      {toastMessage && (
        <div
          className="
            fixed
            bottom-6
            left-1/2
            z-[100]
            flex
            w-[calc(100%-2rem)]
            max-w-md
            -translate-x-1/2
            items-center
            gap-3
            rounded-2xl
            bg-[#172033]
            px-5
            py-4
            text-white
            shadow-2xl
            sm:w-auto
            sm:min-w-[380px]
          "
        >
          {/* SUCCESS ICON */}

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d92f66]">
            <CheckCircle2 size={20} />
          </div>

          {/* MESSAGE */}

          <div>
            <p className="text-sm font-bold">
              Added to Cart
            </p>

            <p className="mt-0.5 text-xs text-white/70">
              {toastMessage}
            </p>
          </div>

          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={() =>
              setToastMessage("")
            }
            aria-label="Close notification"
            className="ml-auto text-lg leading-none text-white/70 transition hover:text-white"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}