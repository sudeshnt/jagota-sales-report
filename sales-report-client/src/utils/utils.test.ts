import { getYearsList } from "./";

describe("getYearsList", () => {
  it("returns an array of years within the specified range", () => {
    const startYear = 2020;
    const endYear = 2022;
    const result = getYearsList(startYear, endYear);
    expect(result).toEqual([2020, 2021, 2022]);
  });

  it("returns an array with a single year if startYear and endYear are the same", () => {
    const startYear = 2020;
    const endYear = 2020;
    const result = getYearsList(startYear, endYear);
    expect(result).toEqual([2020]);
  });

  it("returns an empty array if startYear is greater than endYear", () => {
    const startYear = 2022;
    const endYear = 2020;
    const result = getYearsList(startYear, endYear);
    expect(result).toEqual([]);
  });

  it("returns an empty array if startYear is negative", () => {
    const startYear = -5;
    const endYear = 5;
    const result = getYearsList(startYear, endYear);
    expect(result).toEqual([]);
  });

  it("returns an empty array if startYear and endYear are both negative", () => {
    const startYear = -2020;
    const endYear = -2020;
    const result = getYearsList(startYear, endYear);
    expect(result).toEqual([]);
  });
});
