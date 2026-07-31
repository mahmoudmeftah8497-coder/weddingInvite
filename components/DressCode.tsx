import SectionTitle from "./SectionTitle";

const ladies = [
  { name: "Ivory", hex: "#F8F3EA" },
  { name: "Blush", hex: "#D9B8AE" },
  { name: "Olive Green", hex: "#78805B" },
  { name: "Old Gold", hex: "#B08D57" },
];

const gentlemen = [
  { name: "Dark Chocolate", hex: "#3B2325" },
  { name: "Burgundy", hex: "#651B2A" },
  { name: "Midnight", hex: "#22232B" },
];

export default function DressCode() {
  return (
    <section className="bg-[#F8F3EA] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle title="Dress Code" subtitle="Formal Evening Attire" />

        <p className="mx-auto -mt-10 mb-4 max-w-lg text-center text-lg leading-8 text-gray-600">
          We ask our guests to dress in formal evening attire — long dresses
          or elegant gowns for ladies, suits for gentlemen.
        </p>

        <p className="mx-auto mb-16 max-w-lg text-center text-gray-600">
          Kindly avoid white and ivory, reserved for the bride. We&apos;d love
          to see you in tones that complement the evening.
        </p>

        <div className="flex flex-wrap justify-center gap-16">
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-xs uppercase tracking-[0.32em] text-[#3B2325]/70">
              Ladies
            </h4>
            <div className="flex gap-3">
              {ladies.map((c) => (
                <span
                  key={c.name}
                  title={c.name}
                  className="h-7 w-7 rounded-full border border-[#3B2325]/15 shadow-sm"
                  style={{ background: c.hex }}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h4 className="text-xs uppercase tracking-[0.32em] text-[#3B2325]/70">
              Gentlemen
            </h4>
            <div className="flex gap-3">
              {gentlemen.map((c) => (
                <span
                  key={c.name}
                  title={c.name}
                  className="h-7 w-7 rounded-full border border-[#3B2325]/15 shadow-sm"
                  style={{ background: c.hex }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
