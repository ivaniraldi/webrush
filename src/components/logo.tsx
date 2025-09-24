import type { SVGProps } from 'react';

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 50"
      width="150"
      height="50"
      aria-label="WebRush Logo"
      {...props}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <text
        x="10"
        y="35"
        fontFamily="'Poppins', sans-serif"
        fontSize="24"
        fontWeight="700"
      >
        <tspan fill="white">Web</tspan>
        <tspan fill="url(#logo-gradient)">Rush</tspan>
      </text>
    </svg>
  );
}
