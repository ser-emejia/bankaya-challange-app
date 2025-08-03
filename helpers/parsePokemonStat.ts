import { PokemonStat } from "@/types/pokemon";

export function parseStats(stats: PokemonStat[]) {
  return stats.map((s) => {
    switch (s.stat.name) {
      case "hp":
        return { name: "HP", value: s.base_stat, color: "#FF0000" };
      case "attack":
        return { name: "ATK", value: s.base_stat, color: "#F08030" };
      case "defense":
        return { name: "DEF", value: s.base_stat, color: "#F8D030" };
      case "special-attack":
        return { name: "SATK", value: s.base_stat, color: "#6890F0" };
      case "special-defense":
        return { name: "SDEF", value: s.base_stat, color: "#78C850" };
      case "speed":
        return { name: "SPD", value: s.base_stat, color: "#F85888" };
      default:
        return { name: s.stat.name, value: s.base_stat, color: "#A8A878" };
    }
  });
}
