"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store";
import { toggleTheme } from "@/lib/theme/theme-slide";
import Link from "next/link";

export default function Home() {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Home</h1>

      <div className="flex items-center gap-2">
        <Switch
          checked={mode === "dark"}
          onCheckedChange={() => dispatch(toggleTheme())}
        />
        <span>{mode}</span>
      </div>

      <Button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </Button>

      <Link href="/profile" className="underline block">
        Go to Profile
      </Link>
    </div>
  );
}
