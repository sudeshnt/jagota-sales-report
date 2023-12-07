import mongoose from "mongoose";

type SalesFilter = {
  fromYear: number;
  toYear: number;
};

const distributionSchema = new mongoose.Schema({
  marketing: Number,
  salesTeam: Number,
  operations: Number,
  otherExpenses: Number,
});

const SaleSchema = new mongoose.Schema({
  year: Number,
  month: String,
  budget: Number,
  achievedValue: Number,
  costOfSales: Number,
  gap: Number,
  distribution: distributionSchema,
});

export const SaleModel = mongoose.model("Sale", SaleSchema);

// Actions
export const fetchAllSales = () => {
  return SaleModel.find();
};

export const fetchFilteredSales = (filter: SalesFilter) => {
  return SaleModel.find({
    year: { $gte: filter.fromYear, $lte: filter.toYear },
  });
};
