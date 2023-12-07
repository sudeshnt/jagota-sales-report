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
