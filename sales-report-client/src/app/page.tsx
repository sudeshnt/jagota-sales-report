"use client";

import { SalesTable } from "@/components/Sales/SalesTable/SalesTable";
import { useSalesTable } from "@/hooks/useSalesTable";
import { salesResponse } from "@/mocks";

export default function Home() {
  const { tables } = useSalesTable(salesResponse);

  return (
    <main className="max-h-[calc(100vh-240px)] overflow-scroll hide-scrollbar">
      <div className="flex flex-row gap-8">
        {tables.map((table) => (
          <SalesTable {...table} />
        ))}
      </div>
    </main>
  );
}
