import { Heart } from "lucide-react";

export default function Quote() {
  return (
    <section className="bg-[#F8F3EA] py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Heart className="mx-auto mb-6 h-8 w-8 text-[#B08D57]" />

        <h2 className="mb-8 text-4xl text-[#3B2325]">
          Our Promise
        </h2>

        <p className="text-xl leading-10 text-gray-700 italic">
          "Two souls, one journey,
          united by love, faith,
          and the promise of forever."
        </p>
      </div>
    </section>
  );
}