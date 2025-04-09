import { Pokemon } from "@/types/pokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemon = async (limit = 151): Promise<Pokemon.ListItem[]> => {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
  const data = await response.json();

  return Promise.all(
    data.results.map(async (pokemon: { url: string; name: string }) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return {
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
      };
    })
  );
};

export const getPokemonById = async (id: string): Promise<Pokemon.Detail> => {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`);
  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default,
    types: data.types,
    abilities: data.abilities,
    height: data.height,
    weight: data.weight,
  };
};
