import Header from "@/components/Header";
import { PokemonType } from "@/type";
import { fetchPokes } from "@/utils/fetchPokes";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pokemon = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState<PokemonType>();
  const [status] = useState([
    "生命值",
    "攻击力",
    "防御值",
    "特殊攻击力",
    "特殊防御值",
    "速度",
  ]);

  useEffect(() => {
    const getPokenmon = async () => {
      const pokemon: PokemonType = await fetchPokes(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );

      setPokemon(pokemon);
    };
    getPokenmon();
  });

  return (
    <div className="w-full flex-center flex-col">
      <div className="max-w-2xl w-full">
        <Header />
      </div>

      {pokemon?.sprites.front_default && (
        <div className="max-w-2xl w-full bg-cyan-700 opacity-90 py-16 rounded-3xl mt-20 flex-center space-x-16">
          <div>
            <img
              src={pokemon?.sprites.front_default}
              alt={pokemonName}
              className="w-[250px] h-[250px] object-cover"
            />
          </div>
          <div className="font-semibold text-lg felx-1 max-w-[200px]  w-full flex flex-col space-y-3">
            {pokemon?.stats.map((stat, index) => (
              <div key={index} className=" w-full flex justify-between">
                <p className="">{status[index]}</p>
                <p className="">{stat.base_stat}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
