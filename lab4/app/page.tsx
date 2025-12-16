"use client";

import React, { useState } from "react";
import TaskTabs from "@/components/ui/task-tabs";
import Task1 from "@/components/ui/task-1/Task1";
import Task2 from "@/components/ui/task-2/Task2";
import Task3 from "@/components/ui/task-3/Task3";
import Task4 from "@/components/ui/task-4/Task4";
import Task5 from "@/components/ui/task-5/Task5";

type TaskKey = "task1" | "task2" | "task3" | "task4" | "task5";

export default function Home() {
  const [active, setActive] = useState<TaskKey>("task1");

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <TaskTabs value={active} onChange={setActive} />

      {active === "task1" && <Task1 />}
      {active === "task2" && <Task2 />}
      {active === "task3" && <Task3 />}
      {active === "task4" && <Task4 />}
      {active === "task5" && <Task5 />}
    </div>
  );
}
