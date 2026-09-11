import Link from "next/link";
import { Heart, Mail, Send } from "lucide-react";

const shopLinks = [
  { label: "Wedding Gifts", href: "/wedding" },
  { label: "Occasion Gifts", href: "/occasions" },
  { label: "Anniversary Gifts", href: "/anniversary" },
  { label: "Gift Hampers", href: "/hampers" },
];

const helpLinks = [
  { label: "Track Order", href: "/track-order" },
  { label: "Contact Us", href: "/contact" },
  { label: "Shipping Policy", href: "/policies/shipping" },
  { label: "Returns & Refunds", href: "/policies/refund" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <Link href="/" className="gift-heading text-3xl font-bold text-[#c93666]">Gift4U</Link>
          <p>Thoughtful gifts for life&apos;s most beautiful celebrations.</p>
          <a href="mailto:hello@gift4u.in" className="inline-flex items-center gap-2 text-xs font-semibold">
            <Mail size={15} /> hello@gift4u.in
          </a>
        </div>
        <div>
          <h3>Shop Gifts</h3>
          {shopLinks.map((link) => <p key={link.label}><Link href={link.href}>{link.label}</Link></p>)}
        </div>
        <div>
          <h3>Customer Care</h3>
          {helpLinks.map((link) => <p key={link.label}><Link href={link.href}>{link.label}</Link></p>)}
        </div>
        <div>
          <h3>Stay in the loop</h3>
          <p>New arrivals, offers, and gifting inspiration—sent occasionally.</p>
          <div className="mt-3 flex rounded-full bg-white p-1">
            <input type="email" placeholder="Your email address" className="min-w-0 flex-1 rounded-full px-3 py-2 text-xs text-[#172033] outline-none" />
            <button type="button" className="rounded-full bg-[#d92f66] px-4 py-2 text-xs font-bold text-white">Join</button>
          </div>
          <a href="#" aria-label="Gift4U on Instagram" className="mt-4 inline-flex"><Send size={18} /></a>
        </div>
      </div>
      <div className="site-footer-bottom">
        <span>© 2026 Gift4U. All rights reserved.</span>
        <span className="inline-flex items-center gap-1">Made with <Heart size={12} className="fill-[#d92f66] text-[#d92f66]" /> for meaningful moments.</span>
      </div>
    </footer>
  );
}
