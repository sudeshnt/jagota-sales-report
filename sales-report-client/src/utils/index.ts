export const getYearsList = (startYear: number, endYear: number) => {
  if (startYear < 0 || endYear < 0 || startYear > endYear) return [];

  const yearArray = [];
  for (let year = startYear; year <= endYear; year++) {
    yearArray.push(year);
  }
  return yearArray;
};
