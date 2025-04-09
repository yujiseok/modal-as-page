import { getPokemonById } from "@/api/pokemon";
import Image from "next/image";
import type { Pokemon } from "@/types/pokemon";
import Modal from "./Modal";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const TYPE_COLORS: Pokemon.TypeColors = {
  normal: "bg-gray-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  electric: "bg-yellow-400",
  grass: "bg-green-500",
  ice: "bg-blue-300",
  fighting: "bg-red-600",
  poison: "bg-purple-500",
  ground: "bg-yellow-600",
  flying: "bg-indigo-400",
  psychic: "bg-pink-500",
  bug: "bg-lime-500",
  rock: "bg-yellow-800",
  ghost: "bg-purple-700",
  dragon: "bg-indigo-600",
  dark: "bg-gray-800",
  steel: "bg-gray-500",
  fairy: "bg-pink-400",
};

const PokemonModal = async ({ params }: Props) => {
  const { id } = await params;
  const pokemon = await getPokemonById(id);

  return (
    <Modal>
      <div className="bg-white rounded-3xl overflow-hidden">
        <div className="relative h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            className="object-contain p-4"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold capitalize">{pokemon.name}</h1>
            <span className="text-2xl font-mono text-gray-500">
              #{String(pokemon.id).padStart(3, "0")}
            </span>
          </div>

          <div className="flex gap-2 mb-8">
            {pokemon.types.map((type: Pokemon.Type) => (
              <span
                key={type.type.name}
                className={`${
                  TYPE_COLORS[type.type.name]
                } text-white px-4 py-1 rounded-full capitalize text-sm font-medium`}
              >
                {type.type.name}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-gray-600 text-sm">Height</p>
                  <p className="font-medium text-lg">{pokemon.height / 10}m</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-gray-600 text-sm">Weight</p>
                  <p className="font-medium text-lg">{pokemon.weight / 10}kg</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Abilities</h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex flex-wrap gap-2">
                  {pokemon.abilities.map((ability: Pokemon.Ability) => (
                    <span
                      key={ability.ability.name}
                      className="inline-block px-3 py-1 bg-white rounded-lg shadow-sm text-gray-700 capitalize"
                    >
                      {ability.ability.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PokemonModal;
