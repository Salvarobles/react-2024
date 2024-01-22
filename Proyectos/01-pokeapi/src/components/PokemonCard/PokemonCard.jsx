import { useEffect, useState } from "react";
import pokeApi from "../../api/pokeApi";
import PokemonModal from "../PokemonModal/PokemonModal";

import "./PokemonCards.css"

const PokemonCard = (props) => {
  const { search } = props;
  const [pokemons, setPokemons] = useState([]);
  const [filterPokemons, setFilterPokemons] = useState([]);
  const [selectPokemon, setSelectPokemon] = useState({});
  const [selectEstilos, setSelectEstilos] = useState({});

  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const bgPokemon = {
    normal: "bg-gray-300 ",
    fire: "bg-red-500 ",
    water: "bg-blue-500 ",
    grass: "bg-green-500 ",
    electric: "bg-yellow-500 ",
    ice: "bg-blue-200 ",
    fighting: "bg-yellow-800 ",
    poison: "bg-purple-500 ",
    ground: "bg-yellow-700 ",
    flying: "bg-indigo-500 ",
    psychic: "bg-pink-500 ",
    bug: "bg-green-300 ",
    rock: "bg-gray-600 ",
    ghost: "bg-indigo-700 ",
    dragon: "bg-blue-800 ",
    dark: "bg-gray-800",
    steel: "bg-gray-500 ",
    fairy: "bg-pink-300",
  };

  const hoverPokemon = {
    normal: "hover:bg-gray-400",
    fire: "hover:bg-red-400",
    water: "hover:bg-blue-400",
    grass: "hover:bg-green-400",
    electric: "hover:bg-yellow-400",
    ice: "hover:bg-blue-300",
    fighting: "hover:bg-yellow-400",
    poison: "hover:bg-purple-400",
    ground: "hover:bg-yellow-400",
    flying: "hover:bg-indigo-400",
    psychic: "hover:bg-pink-400",
    bug: "hover:bg-green-400",
    rock: "hover:bg-gray-400",
    ghost: "hover:bg-indigo-400",
    dragon: "hover:bg-blue-400",
    dark: "hover:bg-gray-400",
    steel: "hover:bg-gray-400",
    fairy: "hover:bg-pink-400",
  };

  const shadowPokemon = {
    normal: "hover:shadow-gray-400",
    fire: "hover:shadow-red-400",
    water: "hover:shadow-blue-400",
    grass: "hover:shadow-green-400",
    electric: "hover:shadow-yellow-400",
    ice: "hover:shadow-blue-200",
    fighting: "hover:shadow-yellow-800",
    poison: "hover:shadow-purple-400",
    ground: "hover:shadow-yellow-600",
    flying: "hover:shadow-indigo-400",
    psychic: "hover:shadow-pink-400",
    bug: "hover:shadow-green-200",
    rock: "hover:shadow-gray-600",
    ghost: "hover:shadow-indigo-600",
    dragon: "hover:shadow-blue-800",
    dark: "hover:shadow-gray-800",
    steel: "hover:shadow-gray-500",
    fairy: "hover:shadow-pink-300",
  };

  const borderPokemon = {
    normal: "border-gray-300",
    fire: "border-red-500",
    water: "border-blue-500",
    grass: "border-green-500",
    electric: "border-yellow-500",
    ice: "border-blue-200",
    fighting: "border-yellow-800",
    poison: "border-purple-500",
    ground: "border-yellow-700",
    flying: "border-indigo-500",
    psychic: "border-pink-500",
    bug: "border-green-300",
    rock: "border-gray-600",
    ghost: "border-indigo-700",
    dragon: "border-blue-800",
    dark: "border-gray-800",
    steel: "border-gray-500",
    fairy: "border-pink-300",
  };

  const obtenerEstiloPokemon = (tipo) => {
    return {
      bg: bgPokemon[tipo] || "",
      hover: hoverPokemon[tipo] || "",
      shadow: shadowPokemon[tipo] || "",
      border: borderPokemon[tipo] || "",
    };
  };

  useEffect(() => {
    if (search.trim() === "") {
      setFilterPokemons(pokemons);
      return;
    }
    setFilterPokemons(
      pokemons.filter((pokemon) =>
        pokemon.forms.some((form) => form.includes(search.trim().toLowerCase()))
      )
    );
  }, [search, pokemons]);

  console.log(filterPokemons);

  useEffect(() => {
    // traer la data la guardo en una variable llaada fetchData y por ultimo la seeteo
    // e mi estadoUsers
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const data = await pokeApi();
          setPokemons(data);
          setFilterPokemons(data);
          setLoading(false);
        }, 3000);
      } catch (error) {
        setLoading(true);
        console.log("Error");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="spinner w-64 h-64 relative overflow-hidden">
          <img src="/src/assets/images/spinner.png" alt="" className=" object-cover animate-circle" />
        </div>
      ) : (
        <div className="flex flex-wrap gap-8 justify-center mt-8">
          { filterPokemons.map((pokemon) => {
              const tipo = pokemon.types[0];
              const estilos = obtenerEstiloPokemon(tipo);

              const tipo2 = pokemon.types[1];
              const estilos2 = obtenerEstiloPokemon(tipo2);

              return (
                <div
                  key={pokemon.id}
                  className={` overflow-hidden w-60 h-96  border-2  border-purple-600 rounded-3xl text-black p-4 flex flex-col items-start justify-center gap-3 ${estilos.hover} hover:shadow-2xl ${estilos.shadow} transition-shadow`}
                >
                  <div className={` flex justify-center w-52 h-40 rounded-2xl`}>
                    <img src={pokemon.sprites.front_default} alt="" />
                  </div>

                  <p className="font-extrabold capitalize">{pokemon.forms}</p>

                  <div className=" grid grid-cols-2 gap-2 justify-center items-center mx-2">
                    <div
                      className={`border ${estilos.border} rounded-md px-1 capitalize`}
                    >
                      {pokemon.types[0]}
                    </div>
                    <div>
                      {pokemon.types[1] && (
                        <div
                          className={`border ${estilos2.border} rounded-md px-1 capitalize`}
                        >
                          {pokemon.types[1]}
                        </div>
                      )}
                    </div>
                    <p className="text-center">Habilidades:</p>
                    <br />
                    <div className="border border-black rounded-md px-1">
                      {pokemon.abilities[0]}
                    </div>
                    {pokemon.abilities[1] && (
                      <div className="border border-black rounded-md ">
                        {pokemon.abilities[1]}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setSelectPokemon({ ...pokemon });
                      setIsOpen(true);
                      setSelectEstilos(estilos);
                    }}
                    className={` w-full ${estilos.bg} font-extrabold p-2 px-6 rounded-xl ${estilos.hover} transition-colors`}
                  >
                    Ver más
                  </button>
                </div>
              );
            })}
        </div>
      )}

      {isOpen && selectPokemon && (
        <PokemonModal
          isOpen={isOpen}
          pokemon={selectPokemon}
          onClose={() => setIsOpen(false)}
          estilos={selectEstilos}
        />
      )}
    </>
  );
};

export default PokemonCard;
