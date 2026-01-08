"use client"; 

import "./globals.css";
import { ReduxProvider } from "@/lib/provider";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

function ThemeBridge({ children }: { children: React.ReactNode }) {
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <html lang="en" className={mode === "dark" ? "dark" : ""}>
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <ThemeBridge>{children}</ThemeBridge>
    </ReduxProvider>
  );
}
