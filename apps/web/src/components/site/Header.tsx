'use client';

import { Gift, Search, MapPin, UserRound, Heart, ShoppingCart, Truck } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const nav = [
  ['Wedding', '/wedding'],
  ['Occasions', '/occasions'],
  ['Anniversary', '/anniversary'],
  ['Hampers', '/hampers'],
  ['Personalised', '/personalised'],
  ['Lifestyle', '/lifestyle'],
] as const;

export function Header() {
  const pathname = usePathname();
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    const value = query.trim();
    if (!value) return;
    setSubmitted(true);
    document.getElementById('best-sellers')?.scrollIntoView({ behavior: 'smooth' });
    window.setTimeout(() => setSubmitted(false), 1800);
  }

  return <>
    <div className="topbar">
      <div className="top-left">
        <span><Truck size={14} /> Same Day Delivery</span><span className="sep">|</span>
        <span>♥ Make Every Moment Special</span><span className="sep">|</span>
        <span>🚚 Free Shipping on Orders Above ₹999</span>
      </div>
      <div className="top-right">
        <a href="#track-order">Track Order</a><span className="sep">|</span>
        <a href="#help">Help</a><span className="sep">|</span>
        <a href="#corporate">Corporate Gifting</a>
      </div>
    </div>

    <header className="header-main">
      <a className="brand" href="#top" aria-label="Gift4U home">
        <Gift className="brand-mark" strokeWidth={1.7}/>
        <div><div className="brand-name">Gift4U</div><div className="brand-tag">GIFTS FOR A HAPPIER YOU</div></div>
      </a>

      <form className="search" onSubmit={submitSearch}>
        <Search size={21}/>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for flowers, cakes, gifts and more..." aria-label="Search gifts" />
        <button type="submit" aria-label="Search">Search</button>
      </form>

      <div className="header-actions">
        <a className="action" href="#delivery"><MapPin size={27} strokeWidth={1.6}/><div><b>Deliver to</b><small>Hyderabad⌄</small></div></a>
        <a className="action" href="#account"><UserRound size={27} strokeWidth={1.6}/><div><b>Sign In</b><small>My Account</small></div></a>
        <a className="action" href="#wishlist"><Heart size={27} strokeWidth={1.6}/><span>Wishlist</span></a>
        <a className="action" href="#cart"><ShoppingCart size={28} strokeWidth={1.6}/><span>Cart</span></a>
      </div>
    </header>

    <nav className="nav" aria-label="Main navigation">
      {nav.map(([label, href]) => (
        <a key={label} href={href} className={pathname === href ? 'nav-active' : undefined}>
          {label}
        </a>
      ))}
      <a className="offers" href="#offers">🎁 &nbsp;Offers</a>
    </nav>
    {submitted && <div className="search-toast">Showing results for “{query}”</div>}
  </>;
}
