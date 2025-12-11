"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos(prev => [...prev, { id: Date.now(), title: text, completed: false }]);
    setText("");
  };

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const clearCompleted = () => {
    setTodos(prev => prev.filter(t => !t.completed));
  };

  const remaining = todos.filter(t => !t.completed).length;

  return (
 <Card className="w-full max-w-md mx-auto bg-slate-800 border border-slate-700 text-slate-100">
  <CardHeader>
    <CardTitle className="text-lg">Exercise 1 – Todo List</CardTitle>
  </CardHeader>

  <CardContent className="space-y-3 text-slate-200">

    <div className="flex gap-2">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
        className="bg-slate-700 border-slate-600 text-slate-100 placeholder:text-slate-400"
      />
      <Button className="bg-sky-600 hover:bg-sky-500">+</Button>
    </div>

    <div className="space-y-2">
      {todos.length === 0 && (
        <p className="text-sm text-slate-400 text-center">
          No tasks yet. Add something above.
        </p>
      )}

      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center gap-2 p-2 rounded-xl bg-slate-700"
        >
          <Checkbox
            checked={todo.completed}
            onCheckedChange={() => toggleTodo(todo.id)}
          />
          <span
            className={
              todo.completed
                ? "line-through text-slate-400"
                : "text-slate-100"
            }
          >
            {todo.title}
          </span>
        </div>
      ))}
    </div>
  </CardContent>

  <CardFooter className="flex justify-between text-sm text-slate-300">
    <Button
      variant="outline"
      className="border-slate-500 text-slate-200 hover:bg-slate-700"
      onClick={clearCompleted}
    >
      Clear completed
    </Button>

    <span>{remaining} remaining</span>
  </CardFooter>
</Card>

  );
}
