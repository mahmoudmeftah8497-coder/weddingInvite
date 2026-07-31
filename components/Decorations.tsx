export default function Decorations() {
  return (
    <>
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">

        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>

            <pattern
              id="pattern"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >

              <path
                d="M40 0L80 40L40 80L0 40Z"
                fill="none"
                stroke="#B08D57"
                strokeWidth="1"
              />

            </pattern>

          </defs>

          <rect
            width="100%"
            height="100%"
            fill="url(#pattern)"
          />

        </svg>

      </div>
    </>
  );
}