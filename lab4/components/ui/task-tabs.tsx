"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter } from "next/navigation";

type TaskKey = "task1" | "task2" | "task3" | "task4" | "task5";

type TaskTabsProps = {
  value?: TaskKey;
  onChange?: (value: TaskKey) => void;
};

export default function TaskTabs({ value, onChange }: TaskTabsProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Xác định tab đang active dựa trên URL
  const routeCurrent: TaskKey = pathname.startsWith("/task-2")
    ? "task2"
    : pathname.startsWith("/task-3")
    ? "task3"
    : pathname.startsWith("/task-4")
    ? "task4"
    : pathname.startsWith("/task-5")
    ? "task5"
    : "task1";

  const current = value ?? routeCurrent;

  const handleChange = (val: string) => {
    const v = val as TaskKey;
    if (onChange) return onChange(v);

    if (v === "task1") router.push("/task-1");
    if (v === "task2") router.push("/task-2");
    if (v === "task3") router.push("/task-3");
    if (v === "task4") router.push("/task-4");
    if (v === "task5") router.push("/task-5");
  };

  return (
    <Tabs value={current} onValueChange={handleChange} className="w-full flex justify-center pt-6 pb-4">
      <TabsList className="bg-slate-800/70 rounded-full px-2 py-1">
        <TabsTrigger
          value="task1"
          className="rounded-full px-4 py-1 text-sm data-[state=active]:bg-sky-500 data-[state=active]:text-white"
        >
          Task 1
        </TabsTrigger>
        <TabsTrigger
          value="task2"
          className="rounded-full px-4 py-1 text-sm data-[state=active]:bg-sky-500 data-[state=active]:text-white"
        >
          Task 2
        </TabsTrigger>
        <TabsTrigger
          value="task3"
          className="rounded-full px-4 py-1 text-sm data-[state=active]:bg-sky-500 data-[state=active]:text-white"
        >
          Task 3
        </TabsTrigger>
        <TabsTrigger
          value="task4"
          className="rounded-full px-4 py-1 text-sm data-[state=active]:bg-sky-500 data-[state=active]:text-white"
        >
          Task 4
        </TabsTrigger>
        <TabsTrigger
          value="task5"
          className="rounded-full px-4 py-1 text-sm data-[state=active]:bg-sky-500 data-[state=active]:text-white"
        >
          Task 5
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
