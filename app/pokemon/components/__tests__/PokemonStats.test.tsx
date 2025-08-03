import { PokemonStat } from "@/types/pokemon";
import { render } from "@testing-library/react-native";
import React from "react";
import PokemonStats from "../PokemonStats";

describe("PokemonStats", () => {
  const mockStats: PokemonStat[] = [
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: "hp",
        url: "https://pokeapi.co/api/v2/stat/1/",
      },
    },
    {
      base_stat: 65,
      effort: 0,
      stat: {
        name: "attack",
        url: "https://pokeapi.co/api/v2/stat/2/",
      },
    },
  ];

  it("renders all stats correctly", () => {
    const { getByText } = render(<PokemonStats stats={mockStats} />);

    expect(getByText("HP")).toBeTruthy();
    expect(getByText("45")).toBeTruthy();
    expect(getByText("ATK")).toBeTruthy();
    expect(getByText("65")).toBeTruthy();
  });

  it("renders the section title", () => {
    const { getByText } = render(<PokemonStats stats={mockStats} />);
    expect(getByText("Stats")).toBeTruthy();
  });
});
