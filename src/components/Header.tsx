"use client";

import { Gift, Heart, MapPin, Search, ShoppingCart, Truck, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Wedding", href: "/wedding" },
  { label: "Occasions", href: "/occasions" },
  { label: "Birthday", href: "/birthday" },
  { label: "Anniversary", href: "/anniversary" },
  { label: "Hampers", href: "/hampers" },
  { label: "Personalised", href: "/personalised" },
  { label: "Lifestyle", href: "/lifestyle" },
];

export default function Header() {
  const pathname = usePathname();
  const [cartCount, setCartCount] = useState(0);
  const [query, setQuery] = useState("");

  const updateCartCount = () => {
    try {
      const cart = JSON.parse(localStorage.getItem("gift4u-cart") || "[]");
      const total = Array.isArray(cart)
        ? cart.reduce((sum, item) => sum + Number(item?.quantity || 0), 0)
        : 0;
      setCartCount(total);
    } catch {
      setCartCount(0);
    }
  };

  useEffect(() => {
    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  const submitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query.trim()) return;
    document.getElementById("best-sellers")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <div className="site-topbar">
        <div className="top-left">
          <span><Truck size={14} /> Same Day Delivery</span>
          <span className="sep">|</span>
          <span>♥ Make Every Moment Special</span>
          <span className="sep">|</span>
          <span>🚚 Free Shipping on Orders Above ₹999</span>
        </div>
        <div className="top-right">
          <a href="#track-order">Track Order</a><span className="sep">|</span>
          <a href="#help">Help</a><span className="sep">|</span>
          <a href="#corporate">Corporate Gifting</a>
        </div>
      </div>

      <div className="site-header-main">
        <Link href="/" className="site-brand" aria-label="Gift4U home">
          <Gift className="site-brand-mark" strokeWidth={1.7} />
          <div>
            <div className="site-brand-name">Gift4U</div>
            <div className="site-brand-tag">GIFTS FOR A HAPPIER YOU</div>
          </div>
        </Link>

        <form className="site-search" onSubmit={submitSearch} role="search">
          <Search size={21} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for flowers, cakes, gifts and more..."
            aria-label="Search gifts"
          />
        </form>

        <div className="site-header-actions">
          <a className="site-action" href="#delivery">
            <MapPin size={27} strokeWidth={1.6} />
            <div><b>Deliver to</b><small>Hyderabad⌄</small></div>
          </a>
          <Link className="site-action" href="/login" aria-label="Sign in">
            <UserRound size={27} strokeWidth={1.6} />
            <div><b>Sign In</b><small>My Account</small></div>
          </Link>
          <Link className="site-action" href="/wishlist" aria-label="Wishlist">
            <Heart size={27} strokeWidth={1.6} /><span>Wishlist</span>
          </Link>
          <Link className="site-action site-cart-link" href="/cart" aria-label="Shopping cart">
            <ShoppingCart size={28} strokeWidth={1.6} />
            {cartCount > 0 && <span className="site-cart-badge">{cartCount}</span>}
            <span>Cart</span>
          </Link>
        </div>
      </div>

      <nav className="site-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <Link key={item.label} href={item.href} className={pathname === item.href ? "active" : undefined}>
            {item.label}
          </Link>
        ))}
        <a className="offers" href="#offers">🎁 &nbsp;Offers</a>
      </nav>
    </header>
  );
}
