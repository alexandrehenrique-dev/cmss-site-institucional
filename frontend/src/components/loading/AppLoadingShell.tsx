"use client";

import { Container } from "@/components/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export function AppLoadingShell() {
  return (
    <div className="flex flex-col gap-12 py-10 md:py-14">
      <Container>
        <div className="flex flex-col gap-6">
          <Skeleton className="h-[280px] w-full rounded-xl md:h-[420px]" />
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Skeleton className="h-8 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[92%]" />
            <Skeleton className="h-4 w-[85%]" />
            <Skeleton className="h-12 w-40 mt-3" />
          </div>

          <Skeleton className="h-[320px] w-full rounded-xl" />
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Skeleton className="h-[220px] w-full" />
          <Skeleton className="h-[220px] w-full" />
          <Skeleton className="h-[220px] w-full" />
        </div>
      </Container>
    </div>
  );
}