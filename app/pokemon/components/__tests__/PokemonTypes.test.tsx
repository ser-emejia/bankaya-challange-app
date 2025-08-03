import { PokemonType } from "@/types/pokemon";
import { render } from "@testing-library/react-native";
import React from "react";
import PokemonTypes from "../PokemontTypes";

describe("PokemonTypes", () => {
  const mockTypes: PokemonType[] = [
    {
      slot: 1,
      type: {
        name: "fire",
        url: "https://pokeapi.co/api/v2/type/10/",
      },
    },
    {
      slot: 2,
      type: {
        name: "flying",
        url: "https://pokeapi.co/api/v2/type/3/",
      },
    },
  ];

  it("renders all types correctly with proper capitalization", () => {
    const { getByText } = render(<PokemonTypes types={mockTypes} />);

    expect(getByText("Fire")).toBeTruthy();
    expect(getByText("Flying")).toBeTruthy();
  });
});
