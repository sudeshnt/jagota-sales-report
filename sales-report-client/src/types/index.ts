import { MRT_Column } from "material-react-table";

export type HeaderProps = { column: MRT_Column<Sale, unknown> };

export type Sale = {
  _id: string;
  year: number;
  month: string;
  budget: number;
  achievedValue: number;
  costOfSales: number;
  gap: number;
  profit: number;
  margin: number;
  achievedBudget: number;
  growthPercentage: number | null;
  gapPercentage: number | null;
  distribution: {
    _id: string;
    marketing: number;
    salesTeam: number;
    operations: number;
    otherExpenses: number;
  };
};

export type SalesDataResponse = Record<string, Sale[]>;

export type SalesState = {
  fromYear: number;
  toYear: number;
  years: number[];
  salesData: SalesDataResponse;
  isLoading: boolean;
  setFromYear: (fromYear: number) => void;
  setToYear: (toYear: number) => void;
  fetchSalesData: (fromYear: number, toYear: number) => Promise<void>;
};
