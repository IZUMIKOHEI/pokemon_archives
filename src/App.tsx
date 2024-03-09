import CharacterCard from "@/components/CharacterCard";
import Header from "@/components/Header";
import { PokemonType, PokemonsType } from "@/type";
import { fetchPokes } from "@/utils/fetchPokes";
import { useEffect, useState } from "react";

const App = () => {
  const [pokes, setPokes] = useState<PokemonType[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [offset, setOffset] = useState(0);

  const getPokes = async (url: string) => {
    const response = await fetchPokes(url);
    const pokenmons: PokemonsType[] = response.results;
    setPokes([]);

    pokenmons.map(async (pokemon) => {
      const data = await fetchPokes(pokemon.url);
      setPokes((prev) => [...prev, data]);
    });
  };

  const handleInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageNumber(() => parseInt(e.target.value));
    setOffset(() => parseInt(e.target.value) - 1);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await getPokes(
      `https://pokeapi.co/api/v2/pokemon?limit=30&offset=${offset * 30}`
    );
  };

  useEffect(() => {
    getPokes("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0");
  }, []);

  return (
    <div className="w-full flex-col">
      <div className="max-container w-full flex sm:justify-start">
        <Header />
      </div>

      <div className="max-conatiner flex-center  sm:pr-32 xl:pr-0 2xl:pr-0 mt-8">
        <div className="max-container flex space-x-2 w-full justify-center sm:justify-end p-2 items-center ">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-1">
              <span>第</span>
              <input
                id="number"
                type="number"
                value={pageNumber}
                max={44}
                min={1}
                onChange={handleInput}
                // onKeyDown={hadnleKeyDown}
                className="outline-none border-none rounded-sm w-8 shadow-sm text-center bg-[#e3e3e3] "
              />
              <span>页</span>
              <div className="ml-1 h-6 px-1 bg-cyan-600 opacity-80  rounded-sm cursor-pointer  hover:bg-cyan-700">
                <button type="submit">跳转</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-10 flex-1  p-16 flex-center space-between ">
        {pokes.map((poke, index) => (
          <CharacterCard
            imgUrl={poke.sprites.front_default}
            name={poke.name}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
