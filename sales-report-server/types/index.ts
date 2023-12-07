import { Document } from "mongoose";

export type SalesFilter = {
  fromYear: number;
  toYear: number;
};

export type SaleDocument = {
  year: number;
  month: string;
  budget: number;
  achievedValue: number;
  costOfSales: number;
  gap: number;
  distribution: {
    marketing: number;
    salesTeam: number;
    operations: number;
    otherExpenses: number;
  };
} & Document;

export type TransformedSaleDocument = SaleDocument & {
  profit: number;
  margin: number;
  achievedBudget: number;
};

export type TransformedSaleDocumentResponse = Record<
  string,
  TransformedSaleDocument[]
>;
