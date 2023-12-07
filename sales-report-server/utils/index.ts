export const toPercentage = (value?: number) =>
  value != null ? Number((value * 100).toFixed(2)) : null;
