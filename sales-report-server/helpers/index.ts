import {
  SaleDocument,
  TransformedSaleDocument,
  TransformedSaleDocumentResponse,
} from "../types";
import { toPercentage } from "../utils";

const transformSale = (sale: SaleDocument) => {
  const achievedBudget = toPercentage(sale.achievedValue / sale.budget);
  const profit = sale.achievedValue - sale.costOfSales;
  const margin = toPercentage(profit / sale.achievedValue);

  return {
    ...sale.toObject(),
    achievedBudget,
    profit,
    margin,
  } as TransformedSaleDocument;
};

export const transformSales = (sales: SaleDocument[] = []) => {
  return sales.map(transformSale).reduce((acc, sale) => {
    const year = sale.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(sale);
    return acc;
  }, {} as TransformedSaleDocumentResponse);
};
