export const getYearsList = (startYear: number, endYear: number) => {
  const yearArray = [];
  for (let year = startYear; year <= endYear; year++) {
    yearArray.push(year);
  }
  return yearArray;
};
