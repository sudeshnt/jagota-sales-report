import { fetchSalesData } from "@/actions";
import { SalesState } from "@/types";
import { getYearsList } from "@/utils";
import { create } from "zustand";

const START_YEAR = 2003;
const END_YEAR = 2022;

const useSalesStore = create<SalesState>((set, get) => ({
  fromYear: START_YEAR,
  toYear: END_YEAR,
  years: getYearsList(START_YEAR, END_YEAR),
  salesData: {},
  isLoading: false,
  setFromYear: (fromYear: number) => {
    set({ fromYear });
  },
  setToYear: (toYear: number) => {
    set({ toYear });
  },
  fetchSalesData: async (fromYear: number, toYear: number) => {
    try {
      set({ isLoading: true });
      const response = await fetchSalesData(fromYear, toYear);
      set({ salesData: response });
      set({ isLoading: false });
    } catch (err) {
      console.error(err);
    }
  },
}));

export default useSalesStore;
