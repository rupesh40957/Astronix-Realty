// app/admin/layout.tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {Header}  from "@/components/admin//layout/header";
import {Sidebar}  from "@/components/admin//layout/sidebar";
import type { ReactNode } from "react";

const queryClient = new QueryClient();

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
     <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        {children}
      </div>
    </div>
    </QueryClientProvider>
  );
}
