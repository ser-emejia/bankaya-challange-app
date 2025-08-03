import { getPokemonIdFromUrl } from "../getPokemonIdFromUrl";

describe("getPokemonIdFromUrl", () => {
  it("should extract pokemon ID from valid URL", () => {
    const url = "https://pokeapi.co/api/v2/pokemon/25/";
    expect(getPokemonIdFromUrl(url)).toBe("25");
  });

  it("should handle URL without trailing slash", () => {
    const url = "https://pokeapi.co/api/v2/pokemon/25";
    expect(getPokemonIdFromUrl(url)).toBe("25");
  });

  it("should handle empty string", () => {
    expect(getPokemonIdFromUrl("")).toBe("");
  });

  it("should handle null input", () => {
    // @ts-ignore - Testing null case
    expect(getPokemonIdFromUrl(null)).toBe("");
  });

  it("should handle malformed URL", () => {
    expect(getPokemonIdFromUrl("not-a-url")).toBe("not-a-url");
  });
});
