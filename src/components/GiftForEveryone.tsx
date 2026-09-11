import Link from "next/link";

const recipients = [
  { name: "For Her", href: "/occasions?recipient=her" },
  { name: "For Him", href: "/occasions?recipient=him" },
  { name: "For Kids", href: "/occasions?recipient=kids" },
  { name: "For Friends", href: "/occasions?recipient=friends" },
  { name: "For Parents", href: "/occasions?recipient=parents" },
  { name: "For Girlfriend", href: "/occasions?recipient=girlfriend" },
  { name: "For Boyfriend", href: "/occasions?recipient=boyfriend" },
];

export default function GiftForEveryone() {
  return (
    <section className="home-recipient-section" aria-label="Gifts for everyone">
      <div className="home-section-heading">
        <div>
          <h2>Gifts for Everyone</h2>
          <p>Find a thoughtful surprise for every person you love</p>
        </div>
      </div>
      <div className="home-recipient-grid">
        {recipients.map((recipient) => (
          <Link key={recipient.name} href={recipient.href} className="home-recipient-card">
            {recipient.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
