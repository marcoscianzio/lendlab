import * as React from "react";

export function Home(props) {
  return (
    <svg height={24} width={24} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M20.83 8.01l-6.55-5.24a3.765 3.765 0 00-4.55-.01L3.18 8.01a3.917 3.917 0 00-1.31 3.43l1.26 7.54A3.716 3.716 0 006.7 22h10.6a3.773 3.773 0 003.58-3.03l1.26-7.54a4.018 4.018 0 00-1.31-3.42z"
        opacity={0.4}
      />
      <path d="M12 18.75a.755.755 0 01-.75-.75v-3a.755.755 0 01.75-.75.755.755 0 01.75.75v3a.755.755 0 01-.75.75z" />
    </svg>
  );
}
