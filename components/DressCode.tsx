import SectionTitle from "./SectionTitle";

export default function DressCode() {
  return (
    <section className="bg-[#F8F3EA] py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <SectionTitle title="A Note From Us" />

        <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-gray-600">
          Having you with us on this special day
          <br />
          means more than we could ever put into words.
        </p>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
          Thank you for being part of our story
          <br />
          and celebrating this new chapter with us.
        </p>

        {/* Optional couple drawing:
            Replace this empty frame with your drawing when you're ready.
            Suggested file path: /images/couple-drawing.png
        */}
        <div
          className="mx-auto mt-20 flex aspect-[4/3] w-full max-w-sm items-center justify-center border border-dashed border-[#B08D57]/40"
          aria-label="Optional couple drawing placeholder"
        >
          <span
            className="text-xs uppercase tracking-[0.28em] text-[#3B2325]/35"
            aria-hidden
          >
            Your drawing
          </span>
        </div>

        <p
          className="mt-8 text-2xl text-[#78805B]"
          style={{ fontFamily: "var(--font-script)" }}
        >
          With love, Mahmoud &amp; Ons
        </p>
      </div>
    </section>
  );
}
