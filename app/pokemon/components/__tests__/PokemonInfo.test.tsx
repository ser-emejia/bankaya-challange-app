import { render } from "@testing-library/react-native";
import React from "react";
import PokemonInfo from "../PokemonInfo";

describe("PokemonInfo", () => {
  const mockProps = {
    height: 1.7,
    weight: 75,
  };

  it("renders height and weight correctly", () => {
    const { getByText } = render(
      <PokemonInfo height={mockProps.height} weight={mockProps.weight} />
    );

    expect(getByText("1.7 m")).toBeTruthy();
    expect(getByText("75 kg")).toBeTruthy();
  });

  it("renders labels correctly", () => {
    const { getByText } = render(
      <PokemonInfo height={mockProps.height} weight={mockProps.weight} />
    );

    expect(getByText("Height")).toBeTruthy();
    expect(getByText("Weight")).toBeTruthy();
  });

  it("handles zero values", () => {
    const { getByText } = render(<PokemonInfo height={0} weight={0} />);

    expect(getByText("0 m")).toBeTruthy();
    expect(getByText("0 kg")).toBeTruthy();
  });

  it("handles undefined values", () => {
    const { getByText } = render(
      <PokemonInfo height={undefined as any} weight={undefined as any} />
    );

    expect(getByText("0 m")).toBeTruthy();
    expect(getByText("0 kg")).toBeTruthy();
  });
});
