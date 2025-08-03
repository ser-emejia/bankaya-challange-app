import { PokemonAbility } from "@/types/pokemon";
import { render } from "@testing-library/react-native";
import React from "react";
import PokemonAbilities from "../PokemonAbilities";

describe("PokemonAbilities", () => {
  const mockAbilities: PokemonAbility[] = [
    {
      ability: {
        name: "blaze",
        url: "https://pokeapi.co/api/v2/ability/66/",
      },
    },
    {
      ability: {
        name: "solar-power",
        url: "https://pokeapi.co/api/v2/ability/94/",
      },
    },
  ];

  it("renders all abilities correctly with proper capitalization", () => {
    const { getByText } = render(
      <PokemonAbilities abilities={mockAbilities} />
    );

    expect(getByText("Blaze")).toBeTruthy();
    expect(getByText("Solar-power")).toBeTruthy();
  });

  it("renders the section title", () => {
    const { getByText } = render(
      <PokemonAbilities abilities={mockAbilities} />
    );
    expect(getByText("Abilities")).toBeTruthy();
  });
});
