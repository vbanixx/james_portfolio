// Logo: two chevrons between a top and a bottom bar.
export default function Logo({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size * (30 / 26)}
      viewBox="0 0 26 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 3h20" />
      <path d="M3 27h20" />
      <path d="M9 9l-7 6.500 7 6.500" />
      <path d="M18 9l-7 6.500 7 6.500" />
    </svg>
  )
}
