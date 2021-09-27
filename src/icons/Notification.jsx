import * as React from "react";

export const Notification = React.memo((props) => {
  return (
    <svg {...props} height={24} width={24} xmlns="http://www.w3.org/2000/svg">
      <g data-name="vuesax/bulk/notification" fill="#b7bdc3">
        <path
          d="M19.34 14.49l-1-1.66a3.715 3.715 0 01-.4-1.48V8.82a5.92 5.92 0 00-11.84 0v2.53a3.626 3.626 0 01-.4 1.47l-1.01 1.67A2.337 2.337 0 006 18.02a18.7 18.7 0 006.02.98 18.969 18.969 0 006.02-.97 2.411 2.411 0 001.3-3.54z"
          opacity={0.4}
        />
        <path
          d="M14.25 3.32a6.1 6.1 0 00-2.23-.42 5.884 5.884 0 00-2.22.42A2.5 2.5 0 0112.02 2a2.519 2.519 0 012.23 1.32zM14.83 20.01A3.014 3.014 0 0112 22a2.965 2.965 0 01-2.12-.89 2.761 2.761 0 01-.7-1.11c.13.02.26.03.4.05.23.03.47.06.71.08.57.05 1.15.08 1.73.08s1.14-.03 1.7-.08c.21-.02.42-.03.62-.06z"
          data-name="Vector"
        />
      </g>
    </svg>
  );
});
