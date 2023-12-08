"use client";

import { DurationPicker } from "@/components/Sales/DurationPicker/DurationPicker";
import { SalesTable } from "@/components/Sales/SalesTable/SalesTable";
import useSalesStore from "@/store";
import Loading from "./loading";

export default function Home() {
  const { isLoading, salesData } = useSalesStore((state) => state);

  return (
    <section>
      <DurationPicker />
      <div className="max-h-[calc(100vh-240px)] overflow-scroll hide-scrollbar">
        <div className="flex flex-row gap-8">
          {isLoading || !Object.keys(salesData).length ? (
            <Loading />
          ) : (
            Object.entries(salesData).map(([year, data]) => (
              <SalesTable key={year} year={year} data={data} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
