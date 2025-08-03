import { PokemonStat } from "@/types/pokemon";
import { parseStats } from "../parsePokemonStat";

describe("parseStats", () => {
  it("should parse all pokemon stats correctly", () => {
    const mockStats: PokemonStat[] = [
      {
        base_stat: 45,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
      },
    ];

    const result = parseStats(mockStats);

    expect(result).toEqual([
      { name: "HP", value: 45, color: "#FF0000" },
      { name: "ATK", value: 49, color: "#F08030" },
      { name: "DEF", value: 49, color: "#F8D030" },
      { name: "SATK", value: 65, color: "#6890F0" },
      { name: "SDEF", value: 65, color: "#78C850" },
      { name: "SPD", value: 45, color: "#F85888" },
    ]);
  });

  it("should handle unknown stat names", () => {
    const mockStats: PokemonStat[] = [
      {
        base_stat: 100,
        effort: 0,
        stat: {
          name: "unknown-stat",
          url: "https://pokeapi.co/api/v2/stat/100/",
        },
      },
    ];

    const result = parseStats(mockStats);

    expect(result).toEqual([
      { name: "unknown-stat", value: 100, color: "#A8A878" },
    ]);
  });

  it("should handle empty stats array", () => {
    const result = parseStats([]);
    expect(result).toEqual([]);
  });
});
