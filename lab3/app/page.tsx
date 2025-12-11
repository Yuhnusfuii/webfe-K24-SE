// app/page.tsx
"use client";

import { useState } from "react";
import Header from "@/components/Header";
import TodoList from "@/components/TodoList";
import AlbumList from "@/components/AlbumList";

type ActiveTask = "task1" | "task2";

export default function HomePage() {
  const [activeTask, setActiveTask] = useState<ActiveTask>("task1");

  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-slate-50">
      <Header activeTask={activeTask} onChangeTask={setActiveTask} />

      <main className="flex flex-1 items-start justify-center px-4 py-8">
        {activeTask === "task1" && <TodoList />}
        {activeTask === "task2" && <AlbumList />}
      </main>
    </div>
  );
}
