export declare namespace Pokemon {
  type PokemonType =
    | "normal"
    | "fire"
    | "water"
    | "electric"
    | "grass"
    | "ice"
    | "fighting"
    | "poison"
    | "ground"
    | "flying"
    | "psychic"
    | "bug"
    | "rock"
    | "ghost"
    | "dragon"
    | "dark"
    | "steel"
    | "fairy";

  interface ListItem {
    id: number;
    name: string;
    image: string;
  }

  interface Type {
    type: {
      name: PokemonType;
    };
  }

  interface Ability {
    ability: {
      name: string;
    };
  }

  interface Detail extends ListItem {
    types: Type[];
    abilities: Ability[];
    height: number;
    weight: number;
  }

  type TypeColors = Record<PokemonType, string>;
}
