import { toPercentage } from "..";

describe("toPercentage", () => {
  it("converts a number to a percentage with two decimal places", () => {
    const result = toPercentage(0.456);
    expect(result).toEqual(45.6);
  });

  it("returns undefined for undefined input", () => {
    const result = toPercentage(undefined);
    expect(result).toBeUndefined();
  });

  it("returns undefined for null input", () => {
    const result = toPercentage();
    expect(result).toBeUndefined();
  });

  it("returns undefined for NaN input", () => {
    const result = toPercentage(NaN);
    expect(result).toBeUndefined();
  });

  it("handles negative numbers correctly", () => {
    const result = toPercentage(-0.123);
    expect(result).toEqual(-12.3);
  });
});
