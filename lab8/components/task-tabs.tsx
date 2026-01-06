"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

type TaskKey = "task1" | "task2" | "task3" | "task4" | "task5";

type TaskTabsProps = {
  value?: TaskKey;
  onChange?: (value: TaskKey) => void;
};

export default function TaskTabs({ value, onChange }: TaskTabsProps) {
  const router = useRouter();
  const pathname = usePathname();

  const routeCurrent: TaskKey = pathname?.startsWith("/task-2")
    ? "task2"
    : pathname?.startsWith("/task-3")
    ? "task3"
    : pathname?.startsWith("/task-4")
    ? "task4"
    : pathname?.startsWith("/task-5")
    ? "task5"
    : "task1";

  const current = value ?? routeCurrent;

  const setTab = (v: TaskKey) => {
    if (onChange) return onChange(v);
    // fallback: navigate
    if (v === "task1") router.push("/task-1");
    if (v === "task2") router.push("/task-2");
    if (v === "task3") router.push("/task-3");
    if (v === "task4") router.push("/task-4");
    if (v === "task5") router.push("/task-5");
  };

  const tabClass = (k: TaskKey) =>
    `px-3 py-1 rounded-full text-sm ${current === k ? "bg-sky-500 text-white" : "bg-slate-800 text-slate-300"}`;

  return (
    <div className="w-full flex justify-center pt-6 pb-4">
      <div className="bg-slate-800/70 rounded-full px-2 py-1 inline-flex gap-2">
        <button className={tabClass("task1")} onClick={() => setTab("task1")}>Task 1</button>
        <button className={tabClass("task2")} onClick={() => setTab("task2")}>Task 2</button>
        <button className={tabClass("task3")} onClick={() => setTab("task3")}>Task 3</button>
        <button className={tabClass("task4")} onClick={() => setTab("task4")}>Task 4</button>
        <button className={tabClass("task5")} onClick={() => setTab("task5")}>Task 5</button>
      </div>
    </div>
  );
}
