"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/component/ui/tooltip";
// import { Toaster } from "@/component/ui/toaster";
import { Toaster as Sonner } from "sonner";
import { useState } from "react";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {children}
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
