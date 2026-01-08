"use client";

import { Provider } from "react-redux";
import { store } from "@/lib/auth/store";
import React from "react";

export default function AuthProvider({  
    children,
}: {
    children: React.ReactNode;
}) {
    return <Provider store={store}>{children}</Provider>;
}