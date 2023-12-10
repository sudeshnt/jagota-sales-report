import {
  SaleDocument,
  TransformedSaleDocument,
  TransformedSaleDocumentResponse,
} from "../types";
import { toPercentage } from "../utils";

const transformSale = (sale: SaleDocument) => {
  const gap = sale.budget - sale.achievedValue;
  const profit = sale.achievedValue - sale.costOfSales;
  const achievedBudget = toPercentage(sale.achievedValue / sale.budget);
  const margin = toPercentage(profit / sale.achievedValue);

  return {
    ...sale.toObject(),
    gap,
    achievedBudget,
    profit,
    margin,
  } as TransformedSaleDocument;
};

const calculateGrowthAndGapPercentages = (
  salesData: TransformedSaleDocumentResponse
) => {
  const salesDataWithGrowthAndGapPercentages: TransformedSaleDocumentResponse =
    {};
  Object.entries(salesData).forEach(([year, sales]) => {
    const previousYearSales = salesData[Number(year) - 1];
    salesDataWithGrowthAndGapPercentages[year] = sales.map((sale) => {
      const previousYearsMonthlySales = previousYearSales?.find(
        (prevSale) => prevSale.month === sale.month
      );
      const {
        achievedValue: previousYearMonthlySalesValue,
        gap: previousYearMonthlyGap,
      } = previousYearsMonthlySales ?? {};
      const growthRatio = previousYearMonthlySalesValue
        ? (sale.achievedValue - previousYearMonthlySalesValue) /
          previousYearMonthlySalesValue
        : undefined;
      const gapRatio = previousYearMonthlyGap
        ? (sale.gap - previousYearMonthlyGap) / Math.abs(previousYearMonthlyGap)
        : undefined;
      return {
        ...sale,
        growthPercentage: toPercentage(growthRatio),
        gapPercentage: toPercentage(gapRatio),
      } as TransformedSaleDocument;
    });
  });

  return salesDataWithGrowthAndGapPercentages;
};

export const transformSales = (sales: SaleDocument[] = []) => {
  const transformedSales = sales.map(transformSale).reduce((acc, sale) => {
    const year = sale.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(sale);
    return acc;
  }, {} as TransformedSaleDocumentResponse);

  return calculateGrowthAndGapPercentages(transformedSales);
};
