import mongoose, { Schema } from "mongoose";
import { SaleDocument, SalesFilter } from "../types";

const distributionSchema = new Schema({
  marketing: Number,
  salesTeam: Number,
  operations: Number,
  otherExpenses: Number,
});

const SaleSchema = new Schema<SaleDocument>({
  year: Number,
  month: String,
  budget: Number,
  achievedValue: Number,
  costOfSales: Number,
  distribution: distributionSchema,
});

export const SaleModel = mongoose.model<SaleDocument>("Sale", SaleSchema);

// Actions
export const fetchAllSales = () => {
  return SaleModel.find();
};

export const fetchFilteredSales = (filter: SalesFilter) => {
  return SaleModel.find({
    year: { $gte: filter.fromYear, $lte: filter.toYear },
  });
};
