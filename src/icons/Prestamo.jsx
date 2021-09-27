import * as React from "react";

export function Prestamo({ size, ...props }) {
  return (
    <>
      {size == "big" ? (
        <svg height={48} width={48.954} xmlns="http://www.w3.org/2000/svg" {...props}>
          <g data-name="vuesax/bulk/box">
            <path
              d="M42.917 14.38L24.478 24.84 6.039 14.38a8.857 8.857 0 013.325-3.5l10.892-5.92a9.765 9.765 0 018.445 0l10.892 5.92a8.857 8.857 0 013.324 3.5z"
              opacity={0.4}
            />
            <path
              d="M24.476 24.84V44a8.979 8.979 0 01-4.222-.96L9.363 37.12a9.407 9.407 0 01-4.487-7.46V18.34a8.406 8.406 0 011.163-3.96z"
              data-name="Vector"
              opacity={0.6}
            />
            <path
              d="M44.078 18.34v11.32a9.407 9.407 0 01-4.487 7.46L28.7 43.04a8.979 8.979 0 01-4.222.96V24.84l18.439-10.46a8.406 8.406 0 011.161 3.96z"
              data-name="Vector"
            />
          </g>
        </svg>
      ) : (
        <svg height={24} width={24} xmlns="http://www.w3.org/2000/svg" {...props}>
          <path
            d="M21.041 7.19l-9.04 5.23-9.04-5.23a4.392 4.392 0 011.63-1.75l5.34-2.96a4.7 4.7 0 014.14 0l5.34 2.96a4.392 4.392 0 011.63 1.75z"
            opacity={0.4}
          />
          <path
            d="M12.001 12.42V22a4.332 4.332 0 01-2.07-.48l-5.34-2.96a4.719 4.719 0 01-2.2-3.73V9.17a4.265 4.265 0 01.57-1.98z"
            opacity={0.6}
          />
          <path d="M21.611 9.17v5.66a4.719 4.719 0 01-2.2 3.73l-5.34 2.96a4.332 4.332 0 01-2.07.48v-9.58l9.04-5.23a4.265 4.265 0 01.57 1.98z" />
        </svg>
      )}
    </>
  );
}