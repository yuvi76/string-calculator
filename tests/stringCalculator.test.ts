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
    expect(add("4\n5\n6")).toBe(15);
  });

  it("should support custom single-character delimiter specified at the start", () => {
    expect(add("//;\n1;2;3")).toBe(6);
    expect(add("//@\n2@3@4")).toBe(9);
  });

  it("should throw an error if negatives are present", () => {
    expect(() => add("1,-2,3")).toThrow("negatives not allowed: -2");
    expect(() => add("//;\n2;-5;6;-1")).toThrow(
      "negatives not allowed: -5, -1"
    );
  });

  it("should ignore numbers greater than 1000", () => {
    expect(add("2,1001,3")).toBe(5);
    expect(add("//;\n1002;2;1001;3")).toBe(5);
  });

  it("should allow delimiters of any length when wrapped in square brackets", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });

  it("should allow multiple custom delimiters", () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
    expect(add("//[aa][bbb]\n1aa2bbb3")).toBe(6);
  });
});
