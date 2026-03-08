"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AppLoadingShell } from "./AppLoadingShell";

export function InitialLoadGate({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setReady(true);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  if (!ready) {
    return <AppLoadingShell />;
  }

  return <>{children}</>;
}