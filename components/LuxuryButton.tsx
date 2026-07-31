type Props = {
  children: React.ReactNode;
  href?: string;
};

export default function LuxuryButton({
  children,
  href,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-[#B08D57]
      px-8
      py-3
      text-[#3B2325]
      transition-all
      duration-500
      hover:bg-[#B08D57]
      hover:text-white
      hover:shadow-xl
      "
    >
      {children}
    </a>
  );
}