import {
  type SaleDocument,
  type TransformedSale,
  type TransformedSaleDocumentResponse
} from '../types'
import { toPercentage } from '../utils'

const transformSale = (sale: SaleDocument): TransformedSale => {
  const saleObject = sale.toObject()
  const gap = saleObject.budget - saleObject.achievedValue
  const profit = saleObject.achievedValue - saleObject.costOfSales
  const achievedBudget = toPercentage(
    saleObject.achievedValue / saleObject.budget
  )
  const margin = toPercentage(profit / saleObject.achievedValue)

  return {
    ...saleObject,
    gap,
    profit,
    achievedBudget,
    margin
  }
}

const calculateGrowthAndGapPercentages = (
  salesData: TransformedSaleDocumentResponse
): TransformedSaleDocumentResponse => {
  const salesDataWithGrowthAndGapPercentages: TransformedSaleDocumentResponse =
    {}
  Object.entries(salesData).forEach(([year, sales]) => {
    const previousYearSales = salesData[Number(year) - 1]
    salesDataWithGrowthAndGapPercentages[year] = sales.map((sale) => {
      const previousYearsMonthlySales = previousYearSales?.find(
        (prevSale) => prevSale.month === sale.month
      )
      const {
        achievedValue: previousYearMonthlySalesValue,
        gap: previousYearMonthlyGap
      } = previousYearsMonthlySales ?? {}
      const growthRatio =
        previousYearMonthlySalesValue != null
          ? (sale.achievedValue - previousYearMonthlySalesValue) /
            previousYearMonthlySalesValue
          : undefined
      const gapRatio =
        previousYearMonthlyGap != null
          ? (sale.gap - previousYearMonthlyGap) /
            Math.abs(previousYearMonthlyGap)
          : undefined
      return {
        ...sale,
        growthPercentage: toPercentage(growthRatio),
        gapPercentage: toPercentage(gapRatio)
      }
    })
  })

  return salesDataWithGrowthAndGapPercentages
}

export const transformSales = (sales: SaleDocument[] = []) => {
  const transformedSales = sales
    .map(transformSale)
    .reduce<TransformedSaleDocumentResponse>((acc, sale) => {
    const year = sale.year
    if (acc[year] == null) {
      acc[year] = []
    }
    acc[year].push(sale)
    return acc
  }, {})

  return calculateGrowthAndGapPercentages(transformedSales)
}
