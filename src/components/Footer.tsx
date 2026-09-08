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
    <footer className="bg-[#172033] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="font-[Georgia] text-3xl font-bold text-[#f58aae]">
            Gift4U
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">
            Thoughtful gifts for life&apos;s most beautiful celebrations.
          </p>

          <a
            href="mailto:hello@gift4u.in"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#f58aae]"
          >
            <Mail size={17} />
            hello@gift4u.in
          </a>
        </div>

        <div>
          <h2 className="font-bold">Shop Gifts</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {shopLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-[#f58aae]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-bold">Customer Care</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {helpLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-[#f58aae]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-bold">Stay in the loop</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            New arrivals, offers, and gifting inspiration—sent occasionally.
          </p>

          <div className="mt-4 flex rounded-full bg-white p-1">
            <input
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 rounded-full px-4 py-2 text-sm text-[#172033] outline-none"
            />
            <button
              type="button"
              className="rounded-full bg-[#d92f66] px-4 py-2 text-sm font-bold text-white hover:bg-[#bd1d52]"
            >
              Join
            </button>
          </div>

          <a
            href="#"
            aria-label="Gift4U on Instagram"
            className="mt-5 inline-flex text-slate-300 hover:text-[#f58aae]"
          >
            <Send size={21} />
          </a>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Gift4U. All rights reserved.</p>

          <p className="flex items-center gap-1">
            Made with <Heart size={13} className="fill-[#d92f66] text-[#d92f66]" /> for
            meaningful moments.
          </p>
        </div>
      </div>
    </footer>
  );
}