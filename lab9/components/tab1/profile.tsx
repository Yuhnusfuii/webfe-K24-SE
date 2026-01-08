"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Link from "next/link";

export default function Profile() {
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      <p>Current theme: {mode}</p>

      <Link href="/" className="underline">
        Back to Home
      </Link>
    </div>
  );
}
