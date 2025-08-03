import { capitalizeFirstLetter } from "../capitalizeFirstLetter";

describe("capitalizeFirstLetter", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalizeFirstLetter("pikachu")).toBe("Pikachu");
    expect(capitalizeFirstLetter("charmander")).toBe("Charmander");
  });

  it("should handle empty string", () => {
    expect(capitalizeFirstLetter("")).toBe("");
  });

  it("should handle null input", () => {
    // @ts-ignore - Testing null case
    expect(capitalizeFirstLetter(null)).toBe("");
  });

  it("should handle already capitalized string", () => {
    expect(capitalizeFirstLetter("Bulbasaur")).toBe("Bulbasaur");
  });

  it("should handle single letter", () => {
    expect(capitalizeFirstLetter("a")).toBe("A");
  });
});
