export const toPercentage = (value?: number) => {
  if (value == null || isNaN(value)) return null;

  return Number((value * 100).toFixed(2));
};
