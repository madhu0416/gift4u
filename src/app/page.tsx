import Link from "next/link";
import { ArrowRight, Gift, ShieldCheck, Truck } from "lucide-react";
import Header from "@/components/Header";
import CategoryRail from "@/components/CategoryRail";
import ProductRail from "@/components/ProductRail";
import GiftForEveryone from "@/components/GiftForEveryone";
import NewLaunches from "@/components/NewLaunches";
import Footer from "@/components/Footer";

const highlights = [
  {
    icon: Truck,
    title: "Same-Day Delivery",
    text: "Send smiles right when they matter.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    text: "Safe and trusted checkout every time.",
  },
  {
    icon: Gift,
    title: "Premium Gifting",
    text: "Thoughtful gifts for every celebration.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <section className="overflow-hidden bg-[#fff6f9]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#d92f66]">
                Thoughtfully chosen, beautifully delivered
              </p>

              <h1 className="gift-heading max-w-xl text-5xl font-bold leading-[1.08] text-[#172033] sm:text-6xl">
                Every Gift Tells a Beautiful Story.
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-[#667085]">
                Discover meaningful gifts for weddings, birthdays, anniversaries,
                and every special moment in between.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/wedding"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d92f66] px-6 py-3.5 font-semibold text-white transition hover:bg-[#bd1d52]"
                >
                  Explore Wedding Gifts
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/occasions"
                  className="rounded-full border border-[#f0dfe6] bg-white px-6 py-3.5 font-semibold text-[#172033] transition hover:border-[#d92f66] hover:text-[#d92f66]"
                >
                  Shop by Occasion
                </Link>
              </div>
            </div>

            <div className="relative min-h-80 overflow-hidden rounded-[28px] bg-[#d92f66] p-8 sm:min-h-96">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#f8b6cb] opacity-70" />
              <div className="absolute -bottom-24 -left-12 h-60 w-60 rounded-full bg-[#172033] opacity-15" />

              <div className="relative flex h-full min-h-64 flex-col justify-end">
                <span className="mb-4 w-fit rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
                  Curated with love
                </span>
                <p className="gift-heading max-w-sm text-4xl font-bold leading-tight text-white">
                  Make every occasion unforgettable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:grid-cols-3 lg:px-8">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="flex items-center gap-4 rounded-2xl border border-[#f0dfe6] bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="rounded-full bg-[#fff6f9] p-3 text-[#d92f66]">
                  <Icon size={24} />
                </div>
                <div>
                  <h2 className="font-bold text-[#172033]">{item.title}</h2>
                  <p className="mt-1 text-sm text-[#667085]">{item.text}</p>
                </div>
              </article>
            );
          })}
        </section>
        <CategoryRail />
        <GiftForEveryone />
        <ProductRail />
        <NewLaunches />
        <Footer />
      </main>
    </>
  );
}