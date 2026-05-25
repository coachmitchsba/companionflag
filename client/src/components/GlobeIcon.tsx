/* GlobeIcon — colorful world globe SVG icon
   Used in Navigation, Footer, and section dividers
   Renders a beautiful blue-ocean globe with green landmasses */

interface GlobeIconProps {
  size?: number;
}

export default function GlobeIcon({ size = 22 }: GlobeIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ocean base */}
      <circle cx="50" cy="50" r="48" fill="#1A8FD1" />

      {/* Lighter ocean highlight */}
      <ellipse cx="38" cy="30" rx="18" ry="10" fill="#3CCDFC" opacity="0.45" />

      {/* Landmasses — simplified continents */}
      {/* North America */}
      <path d="M18 28 C20 22, 30 18, 36 22 C40 25, 38 32, 34 36 C30 40, 22 42, 18 38 Z" fill="#4CAF50" />
      {/* South America */}
      <path d="M26 46 C30 42, 36 44, 38 50 C40 56, 36 64, 30 66 C24 68, 20 60, 22 54 Z" fill="#4CAF50" />
      {/* Europe */}
      <path d="M46 22 C50 18, 58 20, 60 26 C62 30, 56 34, 52 32 C48 30, 44 26, 46 22 Z" fill="#66BB6A" />
      {/* Africa */}
      <path d="M48 34 C54 30, 62 34, 64 42 C66 50, 62 62, 56 66 C50 70, 44 64, 44 56 C44 48, 46 38, 48 34 Z" fill="#4CAF50" />
      {/* Asia */}
      <path d="M60 18 C68 14, 80 18, 82 28 C84 36, 78 42, 70 44 C62 46, 56 40, 58 32 C59 26, 58 22, 60 18 Z" fill="#66BB6A" />
      {/* Australia */}
      <path d="M72 58 C78 54, 86 58, 86 66 C86 72, 80 76, 74 74 C68 72, 66 64, 72 58 Z" fill="#4CAF50" />
      {/* Greenland */}
      <path d="M36 14 C40 10, 46 12, 46 18 C46 22, 42 24, 38 22 C34 20, 32 18, 36 14 Z" fill="#81C784" />

      {/* Longitude lines (meridians) */}
      <ellipse cx="50" cy="50" rx="48" ry="48" fill="none" stroke="white" strokeWidth="0.8" opacity="0.25" />
      <ellipse cx="50" cy="50" rx="30" ry="48" fill="none" stroke="white" strokeWidth="0.6" opacity="0.2" />
      <ellipse cx="50" cy="50" rx="10" ry="48" fill="none" stroke="white" strokeWidth="0.6" opacity="0.2" />

      {/* Latitude lines (parallels) */}
      <ellipse cx="50" cy="35" rx="43" ry="8" fill="none" stroke="white" strokeWidth="0.6" opacity="0.2" />
      <ellipse cx="50" cy="50" rx="48" ry="4" fill="none" stroke="white" strokeWidth="0.6" opacity="0.2" />
      <ellipse cx="50" cy="65" rx="43" ry="8" fill="none" stroke="white" strokeWidth="0.6" opacity="0.2" />

      {/* Outer ring / border */}
      <circle cx="50" cy="50" r="48" fill="none" stroke="#0D6FA8" strokeWidth="2" />

      {/* Gloss highlight */}
      <ellipse cx="36" cy="28" rx="12" ry="8" fill="white" opacity="0.18" transform="rotate(-20 36 28)" />
    </svg>
  );
}
