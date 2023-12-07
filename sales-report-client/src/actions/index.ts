"use server";

import { SalesDataResponse } from "@/types";

const HOST = "http://localhost:8080";

export async function fetchSalesData(
  fromYear: number,
  toYear: number
): Promise<SalesDataResponse> {
  try {
    const res = await fetch(`${process.env.HOST}/sales`, {
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
