"use client";

import React, { useState } from "react";

export default function Task3() {
  const [hover, setHover] = useState(false);

  return (
    <main className="flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl text-slate-200">
        <h1 className="text-2xl font-semibold mb-2 text-slate-100">
          Exercise 3: Handling Mouse Events
        </h1>

        <p className="text-slate-400 mb-6">
          Di chuột vào box bên dưới để thay đổi màu nền
        </p>

        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`w-40 h-40 rounded-lg shadow-lg flex items-center justify-center transition-colors duration-200 ${
            hover ? "bg-red-500" : "bg-sky-500"
          } text-white`}
        >
          {hover ? "Hover!" : "Hover me!"}
        </div>
      </div>
    </main>
  );
}
