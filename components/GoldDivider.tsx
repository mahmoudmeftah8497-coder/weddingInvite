export default function GoldDivider() {
  return (
    <div className="flex items-center justify-center my-10">
      <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#B08D57]" />

      <div className="mx-4 h-3 w-3 rotate-45 border border-[#B08D57]" />

      <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#B08D57]" />
    </div>
  );
}