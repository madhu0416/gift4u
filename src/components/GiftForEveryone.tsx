import Link from "next/link";

/* =========================================
   GIFTS FOR EVERYONE DATA

   Images are NOT added yet.

   Later, you can add images inside:

   public/images/

   Example:

   public/images/for-her.jpg
   public/images/for-him.jpg
   public/images/for-kids.jpg
   public/images/for-friends.jpg
   public/images/for-parents.jpg
   public/images/for-girlfriend.jpg
   public/images/for-boyfriend.jpg
   ========================================= */

const recipients = [
  {
    name: "For Her",
    href: "/occasions?recipient=her",
  },
  {
    name: "For Him",
    href: "/occasions?recipient=him",
  },
  {
    name: "For Kids",
    href: "/occasions?recipient=kids",
  },
  {
    name: "For Friends",
    href: "/occasions?recipient=friends",
  },
  {
    name: "For Parents",
    href: "/occasions?recipient=parents",
  },
  {
    name: "For Girlfriend",
    href: "/occasions?recipient=girlfriend",
  },
  {
    name: "For Boyfriend",
    href: "/occasions?recipient=boyfriend",
  },
];

export default function GiftForEveryone() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">

      {/* =====================================
          SECTION HEADING
          ===================================== */}

      <div className="mb-7">

        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d92f66]">
          Make it personal
        </p>

        <h2 className="gift-heading mt-2 text-3xl font-bold text-[#172033] sm:text-4xl">
          Gifts for Everyone
        </h2>

        <p className="mt-3 text-[#667085]">
          Find a thoughtful surprise for every person you love.
        </p>

      </div>

      {/* =====================================
          RECIPIENT CARDS
          ===================================== */}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">

        {recipients.map((recipient) => (

          <Link
            key={recipient.name}
            href={recipient.href}
            className="group overflow-hidden rounded-2xl border border-[#f0dfe6] bg-white transition hover:-translate-y-1 hover:shadow-lg"
          >

            {/* =====================================
                RECIPIENT IMAGE PLACEHOLDER

                IMAGE WILL BE ADDED HERE LATER.

                -------------------------------------

                STEP 1:
                Add your images inside:

                public/images/

                Example image names:

                for-her.jpg
                for-him.jpg
                for-kids.jpg
                for-friends.jpg
                for-parents.jpg
                for-girlfriend.jpg
                for-boyfriend.jpg

                -------------------------------------

                STEP 2:
                DELETE the placeholder <div> below.

                -------------------------------------

                STEP 3:
                Add your image.

                Example:

                <img
                  src="/images/for-her.jpg"
                  alt="Gifts for Her"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                Later, when we connect Firebase,
                these images can come dynamically
                from Firebase Storage.

                ===================================== */}

            {/* IMAGE PLACEHOLDER */}

            <div className="aspect-square bg-[#f8e8ee]">

              <div className="flex h-full w-full items-center justify-center p-4 text-center">

                <span className="text-sm font-semibold text-[#667085]">
                  {recipient.name} Image
                </span>

              </div>

            </div>

            {/* =====================================
                RECIPIENT NAME
                ===================================== */}

            <h3 className="p-3 text-center text-sm font-bold text-[#172033] transition group-hover:text-[#d92f66]">
              {recipient.name}
            </h3>

          </Link>

        ))}

      </div>

    </section>
  );
}