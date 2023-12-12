"use server";

import { SalesDataResponse } from "@/types";

export async function fetchSalesData(
  fromYear: number,
  toYear: number
): Promise<SalesDataResponse> {
  try {
    const res = await fetch(`${process.env.HOST}/sales`, {
      method: "POST",
      cache: "no-store",
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
