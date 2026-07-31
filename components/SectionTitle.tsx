import GoldDivider from "./GoldDivider";

type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center mb-20">

      {subtitle && (
        <p className="uppercase tracking-[6px] text-[#B08D57]">
          {subtitle}
        </p>
      )}

      <h2 className="mt-4 text-5xl text-[#3B2325]">
        {title}
      </h2>

      <GoldDivider />

    </div>
  );
}