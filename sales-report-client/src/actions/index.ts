"use server";

import { SalesDataResponse } from "@/types";

const HOST = "https://jagota-sales-report-server.vercel.app";

export async function fetchSalesData(
  fromYear: number,
  toYear: number
): Promise<SalesDataResponse> {
  try {
    const res = await fetch(`${HOST}/sales`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: {
          fromYear,
          toYear,
        },
      }),
    });
    return await res.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
