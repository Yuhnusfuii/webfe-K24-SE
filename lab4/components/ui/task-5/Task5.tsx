"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Task5() {
  const MIN = 0;
  const MAX = 10;

  const [count, setCount] = useState(0);

  const decrease = () => {
    if (count > MIN) {
      setCount(count - 1);
    }
  };

  const increase = () => {
    if (count < MAX) {
      setCount(count + 1);
    }
  };

  return (
    <main className="flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl text-slate-200">
        <h1 className="text-2xl font-semibold mb-2 text-slate-100">
          Exercise 5: Counter
        </h1>

        <p className="text-slate-400 mb-6">
          Giá trị từ {MIN} đến {MAX}
        </p>

        <div className="flex items-center gap-6">
          <Button
            onClick={decrease}
            variant="secondary"
            disabled={count === MIN}
          >
            − Giảm
          </Button>

          <div className="text-2xl font-semibold">{count}</div>

          <Button
            onClick={increase}
            variant="secondary"
            disabled={count === MAX}
          >
            + Tăng
          </Button>
        </div>
      </div>
    </main>
  );
}
