"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type HeaderProps = {
  activeTask: string;
  onChangeTask: (task: "task1" | "task2") => void;
};

export default function Header({ activeTask, onChangeTask }: HeaderProps) {
  return (
    <header className="w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-4 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500 text-lg font-bold">
            ✓
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">VTC Academy</p>
            <p className="text-xs text-slate-400">Next.js – Props & State</p>
          </div>
        </div>

        {/* Tabs cho Task */}
        <Tabs
          value={activeTask}
          onValueChange={(v) => onChangeTask(v as "task1" | "task2")}
          className="w-full flex justify-center"
        >
          <TabsList className="bg-slate-800/60 rounded-full px-2 py-1">
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
          </TabsList>
        </Tabs>
      </div>
    </header>
  );
}
