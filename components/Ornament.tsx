export default function Ornament() {
  return (
    <>
      {/* Top Left */}
      <div className="absolute left-8 top-8 h-28 w-28 opacity-40">
        <svg viewBox="0 0 100 100" fill="none">
          <path
            d="M10 90 C10 30,70 30,90 10"
            stroke="#B08D57"
            strokeWidth="2"
          />
          <circle cx="90" cy="10" r="4" fill="#B08D57" />
        </svg>
      </div>

      {/* Top Right */}
      <div className="absolute right-8 top-8 h-28 w-28 rotate-90 opacity-40">
        <svg viewBox="0 0 100 100" fill="none">
          <path
            d="M10 90 C10 30,70 30,90 10"
            stroke="#B08D57"
            strokeWidth="2"
          />
          <circle cx="90" cy="10" r="4" fill="#B08D57" />
        </svg>
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-8 left-8 -rotate-90 h-28 w-28 opacity-40">
        <svg viewBox="0 0 100 100" fill="none">
          <path
            d="M10 90 C10 30,70 30,90 10"
            stroke="#B08D57"
            strokeWidth="2"
          />
          <circle cx="90" cy="10" r="4" fill="#B08D57" />
        </svg>
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-8 right-8 rotate-180 h-28 w-28 opacity-40">
        <svg viewBox="0 0 100 100" fill="none">
          <path
            d="M10 90 C10 30,70 30,90 10"
            stroke="#B08D57"
            strokeWidth="2"
          />
          <circle cx="90" cy="10" r="4" fill="#B08D57" />
        </svg>
      </div>
    </>
  );
}