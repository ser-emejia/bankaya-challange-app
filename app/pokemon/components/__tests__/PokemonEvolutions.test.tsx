import { FormattedEvolution } from "@/types/evolution";
import { render } from "@testing-library/react-native";
import React from "react";
import PokemonEvolutions from "../PokemonEvolutions";

jest.mock("@/components/Icon", () => {
  return function MockIcon({ name, size, color }: any) {
    return <div data-testid={`icon-${name}`} />;
  };
});

jest.mock("@/components/PokemonImage", () => {
  return function MockPokemonImage({ url }: any) {
    return <div data-testid="pokemon-image" />;
  };
});

describe("PokemonEvolutions", () => {
  const mockEvolutions: FormattedEvolution[] = [
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
  ];

  it("renders evolution names correctly", () => {
    const { getByText } = render(
      <PokemonEvolutions evolutions={mockEvolutions} />
    );

    expect(getByText("Charmander")).toBeTruthy();
    expect(getByText("Charmeleon")).toBeTruthy();
    expect(getByText("Charizard")).toBeTruthy();
  });

  it("renders section title", () => {
    const { getByText } = render(
      <PokemonEvolutions evolutions={mockEvolutions} />
    );
    expect(getByText("Evolutions")).toBeTruthy();
  });
});
