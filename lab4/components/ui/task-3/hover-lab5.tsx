"use client";

import { useState, useMemo } from "react";

export default function Exercise3() {
  const [hover, setHover] = useState(false);

  const boxClass = useMemo(() => {
    console.log("Tính lại class");

    return `
      w-40 h-40 rounded-xl
      flex items-center justify-center
      text-white font-semibold
      transition-colors duration-200
      cursor-pointer
      ${hover ? "bg-red-500" : "bg-sky-500"}
    `;
  }, [hover]);

  return (
    <div
      className={boxClass}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? "Hover Active!" : "Hover me"}
    </div>
  );
}
