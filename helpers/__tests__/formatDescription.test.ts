import { formatDescription } from "../formatDescription";

describe("formatDescription", () => {
  it("should handle empty input", () => {
    expect(formatDescription("")).toBe("No description available");
  });

  it("should handle null input", () => {
    // @ts-ignore - Testing null case
    expect(formatDescription(null)).toBe("No description available");
  });

  it("should remove special characters and extra spaces", () => {
    const input = "This is a\f test\n with\r multiple\v spaces   and   breaks";
    const expected = "This is a test with multiple spaces and breaks";
    expect(formatDescription(input)).toBe(expected);
  });

  it("should trim leading and trailing spaces", () => {
    const input = "  Hello World  ";
    expect(formatDescription(input)).toBe("Hello World");
  });
});
