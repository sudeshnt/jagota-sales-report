import { toPercentage } from "..";

describe("toPercentage", () => {
  it("converts a number to a percentage with two decimal places", () => {
    const result = toPercentage(0.456);
    expect(result).toEqual(45.6);
  });

  it("returns null for undefined input", () => {
    const result = toPercentage(undefined);
    expect(result).toBeNull();
  });

  it("returns null for null input", () => {
    const result = toPercentage();
    expect(result).toBeNull();
  });

  it("returns null for NaN input", () => {
    const result = toPercentage(NaN);
    expect(result).toBeNull();
  });

  it("handles negative numbers correctly", () => {
    const result = toPercentage(-0.123);
    expect(result).toEqual(-12.3);
  });
});
