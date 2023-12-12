import { type Document, type Types } from 'mongoose'

export interface SalesFilter {
  fromYear: number
  toYear: number
}

export interface Sale {
  year: number
  month: string
  budget: number
  achievedValue: number
  costOfSales: number
  distribution: {
    marketing: number
    salesTeam: number
    operations: number
    otherExpenses: number
  }
}

export type TransformedSale = Sale & {
  gap: number
  profit: number
  achievedBudget?: number
  margin?: number
  growthPercentage?: number
  gapPercentage?: number
}

export type SaleDocument = Document<unknown, unknown, Sale> &
Sale & {
  _id: Types.ObjectId
}

export type TransformedSaleDocumentResponse = Record<string, TransformedSale[]>
