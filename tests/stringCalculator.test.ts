import { add } from "../src/stringCalculator";

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return the number itself when only one number is provided", () => {
    expect(add("1")).toBe(1);
  });

  it("should return sum of two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  it("should handle an unknown amount of comma-separated numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  it("should handle new lines as valid separators along with commas", () => {
    expect(add("1\n2,3")).toBe(6);
  });
});
