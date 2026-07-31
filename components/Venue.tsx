import { wedding } from "@/data/wedding";
import SectionTitle from "./SectionTitle";

export default function Venue() {
  return (
    <section className="bg-[#F8F3EA] py-24">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <SectionTitle title="Venue" subtitle="Find Your Way" />

        <p className="-mt-10 text-xl text-gray-600">
          {wedding.venue.name}
        </p>
        <p className="text-gray-500">{wedding.venue.city}</p>

        <div className="mt-12 overflow-hidden rounded-3xl border border-[#B08D57]/25 shadow-xl">

          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              wedding.venue.name
            )}&output=embed`}
            width="100%"
            height="450"
            loading="lazy"
            title="Venue map"
          />

        </div>

        <a
          href={wedding.venue.map}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--gold)] px-6 py-3 text-[var(--burgundy)] transition-all duration-300 hover:bg-[var(--gold)] hover:text-white"
        >
          Open in Maps →
        </a>

      </div>

    </section>
  );
}
