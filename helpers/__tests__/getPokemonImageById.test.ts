import { getPokemonImageById } from "../getPokemonImageById";

describe("getPokemonImageById", () => {
  it("should generate correct image URL for pokemon ID", () => {
    const expectedUrl =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
    expect(getPokemonImageById("25")).toBe(expectedUrl);
  });

  it("should work with numeric IDs", () => {
    const expectedUrl =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
    expect(getPokemonImageById("1")).toBe(expectedUrl);
  });

  it("should handle string IDs", () => {
    const expectedUrl =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/001.png";
    expect(getPokemonImageById("001")).toBe(expectedUrl);
  });
});
