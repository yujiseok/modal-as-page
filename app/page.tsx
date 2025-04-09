import { getPokemon } from "@/api/pokemon";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const pokemons = await getPokemon();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6 md:p-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
        {pokemons.map((pokemon) => (
          <Link
            key={pokemon.id}
            href={`/pokemon/${pokemon.id}`}
            className="group block"
            scroll={false}
          >
            <div className="relative aspect-square rounded-2xl bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/10 group-hover:to-purple-400/10 transition-colors duration-300" />
              <div className="relative h-full w-full">
                <Image
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority={pokemon.id <= 12}
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-white to-white/0">
                <h3 className="text-center font-semibold capitalize text-gray-800">
                  {pokemon.name}
                </h3>
                <div className="mt-1 text-center">
                  <span className="inline-block px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                    #{String(pokemon.id).padStart(3, "0")}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
