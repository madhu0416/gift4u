import Link from "next/link";

/* =========================================
   CATEGORY DATA

   Each category has:
   - name: Category name
   - href: Page link

   Images are NOT added yet.

   Later, you can add images for each category.
   ========================================= */

const categories = [
  { name: "Wedding", href: "/wedding" },
  { name: "Occasions", href: "/occasions" },
  { name: "Anniversary", href: "/anniversary" },
  { name: "Hampers", href: "/hampers" },
  { name: "Personalised", href: "/personalised" },
  { name: "Lifestyle", href: "/lifestyle" },
];

export default function CategoryRail() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">

      {/* =====================================
          SECTION HEADING
          ===================================== */}

      <div className="mb-7 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d92f66]">
            Find the perfect gift
          </p>

          <h2 className="gift-heading mt-2 text-3xl font-bold text-[#172033] sm:text-4xl">
            Shop by Category
          </h2>
        </div>

        <Link
          href="/occasions"
          className="hidden text-sm font-bold text-[#d92f66] hover:underline sm:inline"
        >
          View all gifts
        </Link>
      </div>

      {/* =====================================
          CATEGORY CARDS
          ===================================== */}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#f0dfe6] bg-[#fff6f9] transition hover:-translate-y-1 hover:border-[#d92f66] hover:shadow-lg"
          >

            {/* =====================================
                CATEGORY IMAGE PLACEHOLDER

                IMAGE WILL BE ADDED HERE LATER.

                -------------------------------------

                STEP 1:
                Put your image inside:

                public/images/

                Example:

                public/images/wedding.jpg
                public/images/occasions.jpg
                public/images/anniversary.jpg
                public/images/hampers.jpg
                public/images/personalised.jpg
                public/images/lifestyle.jpg

                -------------------------------------

                STEP 2:

                DELETE the placeholder <div> below.

                -------------------------------------

                STEP 3:

                Add an image like this:

                <img
                  src="/images/wedding.jpg"
                  alt="Wedding Gifts"
                  className="h-full w-full object-cover"
                />

                For dynamic category images, we will
                connect these images with Firebase later.

                ===================================== */}

            {/* IMAGE PLACEHOLDER */}
            <div className="flex h-full w-full items-center justify-center bg-[#f8e8ee] p-4 text-center">
              <span className="text-sm font-semibold text-[#667085]">
                {category.name} Image
              </span>
            </div>

            {/* =====================================
                CATEGORY NAME SECTION

                This stays at the bottom of the card.
                ===================================== */}

            <div className="absolute inset-x-0 bottom-0 bg-[#172033] p-4 text-white">

              <h3 className="text-lg font-bold">
                {category.name}
              </h3>

              <p className="mt-1 text-xs text-white/85">
                Explore gifts →
              </p>

            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}