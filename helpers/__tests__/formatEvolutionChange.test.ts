import { EvolutionChain } from "@/types/evolution";
import { formatEvolutionChain } from "../formatEvolutionChange";

describe("formatEvolutionChain", () => {
  it("should format a simple evolution chain correctly", () => {
    const mockChain: EvolutionChain = {
      species: {
        name: "charmander",
        url: "https://pokeapi.co/api/v2/pokemon-species/4/",
      },
      evolves_to: [
        {
          species: {
            name: "charmeleon",
            url: "https://pokeapi.co/api/v2/pokemon-species/5/",
          },
          evolves_to: [
            {
              species: {
                name: "charizard",
                url: "https://pokeapi.co/api/v2/pokemon-species/6/",
              },
              evolves_to: [],
            },
          ],
        },
      ],
    };

    const result = formatEvolutionChain(mockChain);

    expect(result).toEqual([
      {
        name: "Charmander",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      },
      {
        name: "Charmeleon",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      },
      {
        name: "Charizard",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      },
    ]);
  });

  it("should handle pokemon with no evolutions", () => {
    const mockChain: EvolutionChain = {
      species: {
        name: "tauros",
        url: "https://pokeapi.co/api/v2/pokemon-species/128/",
      },
      evolves_to: [],
    };

    const result = formatEvolutionChain(mockChain);

    expect(result).toEqual([
      {
        name: "Tauros",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
      },
    ]);
  });

  it("should handle branched evolutions", () => {
    const mockChain: EvolutionChain = {
      species: {
        name: "eevee",
        url: "https://pokeapi.co/api/v2/pokemon-species/133/",
      },
      evolves_to: [
        {
          species: {
            name: "vaporeon",
            url: "https://pokeapi.co/api/v2/pokemon-species/134/",
          },
          evolves_to: [],
        },
        {
          species: {
            name: "jolteon",
            url: "https://pokeapi.co/api/v2/pokemon-species/135/",
          },
          evolves_to: [],
        },
      ],
    };

    const result = formatEvolutionChain(mockChain);

    expect(result).toEqual([
      {
        name: "Eevee",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
      },
      {
        name: "Vaporeon",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
      },
      {
        name: "Jolteon",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
      },
    ]);
  });
});
