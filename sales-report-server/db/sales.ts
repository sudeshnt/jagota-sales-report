import mongoose, { Schema } from 'mongoose'
import { type SaleDocument, type Sale, type SalesFilter } from '../types'

const distributionSchema = new Schema({
  marketing: Number,
  salesTeam: Number,
  operations: Number,
  otherExpenses: Number
})

const SaleSchema = new Schema<Sale>({
  year: Number,
  month: String,
  budget: Number,
  achievedValue: Number,
  costOfSales: Number,
  distribution: distributionSchema
})

export const SaleModel = mongoose.model<Sale>('Sale', SaleSchema)

// Actions
export const fetchAllSales = async (): Promise<SaleDocument[]> =>
  await SaleModel.find().exec()

export const fetchFilteredSales = async (
  filter: SalesFilter
): Promise<SaleDocument[]> =>
  await SaleModel.find({
    year: { $gte: filter.fromYear, $lte: filter.toYear }
  }).exec()
