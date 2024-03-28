import type { SVGProps } from "react";

const SvgToys = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m18.72 10-2-6H7.28L5.81 8.4 4.41 7l1-1L4 4.59.59 8 2 9.41l1-1L4.59 10H2v8h2.18A3 3 0 0 0 7 20c1.3 0 2.4-.84 2.82-2h4.37c.41 1.16 1.51 2 2.82 2a3 3 0 0 0 2.82-2H22v-8zM7 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m4-8H7.41l-.02-.02L8.72 6H11zm2 0V6h2.28l1.33 4zm4 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" />
  </svg>
);

export { SvgToys };