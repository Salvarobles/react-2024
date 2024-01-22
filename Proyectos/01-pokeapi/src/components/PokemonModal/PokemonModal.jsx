const PokemonModal = (props) => {
  const { isOpen, pokemon, onClose } = props;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "opacity-100 visible z-[9]" : "opacity-0 invisible z-[-10]"
      } transition-opacity ease-in-out duration-500`}
    >
      <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-80"></div>
      <div className="z-10 bg-white p-4 rounded-lg max-w-2xl">
        <h1 className=" capitalize font-bold mb-2 text-4xl">{pokemon.forms}</h1>

        <div className="grid grid-cols-2 gap-4 justify-center items-center mx-48 ">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.forms}
            className="rounded w-full h-full bg-gray-300 max-w-40"
          />
          <img
            src={pokemon.sprites.back_default}
            alt={pokemon.forms}
            className="rounded w-full h-full bg-gray-300 max-w-40"
          />
          <img
            src={pokemon.sprites.front_shiny}
            alt={pokemon.forms}
            className="rounded w-full h-full bg-gray-300 max-w-40"
          />
          <img
            src={pokemon.sprites.back_shiny}
            alt={pokemon.forms}
            className="rounded w-full h-full bg-gray-300 max-w-40"
          />
        </div>
        <div className="mt-2">
          <h3>Habilidades {pokemon.abilities.join(", ")}</h3>
          <h3>Movimientos: {pokemon.moves.join(", ")}</h3>
          <h3>Peso y altura: {(pokemon.weight / 10).toFixed(2).replace(/\.?0+$/, '')}kg  {(pokemon.height / 10).toFixed(2).replace(/\.?0+$/, '')}m</h3>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-4 p-2 bg-gray-100 rounded-md shadow-md">
          <div className="col-span-1 bg-blue-300 p-4 rounded-md">
            <h2 className="text-4xl  font-bold mb-4 capitalize ">
              {pokemon.stats[0].statName}
            </h2>
            <p className="text-3xl">{pokemon.stats[0].base_stat}</p>
          </div>
          <div className="col-span-1 bg-green-300 p-4 rounded-md">
            <h2 className="text-4xl  font-bold mb-4 capitalize ">
              {pokemon.stats[1].statName}
            </h2>
            <p className="text-3xl">{pokemon.stats[1].base_stat}</p>
          </div>
          <div className="col-span-1 bg-yellow-300 p-4 rounded-md">
            <h2 className="text-4xl  font-bold mb-4 capitalize ">
              {pokemon.stats[2].statName}
            </h2>
            <p className="text-3xl">{pokemon.stats[2].base_stat}</p>
          </div>
          <div className="col-span-1 bg-red-300 p-4 rounded-md">
            <h2 className="text-4xl  font-bold mb-4 capitalize ">
              {pokemon.stats[3].statName}
            </h2>
            <p className="text-3xl">{pokemon.stats[3].base_stat}</p>
          </div>
          <div className="col-span-1 bg-purple-300 p-4 rounded-md">
            <h2 className="text-4xl  font-bold mb-4 capitalize ">
              {pokemon.stats[4].statName}
            </h2>
            <p className="text-3xl">{pokemon.stats[4].base_stat}</p>
          </div>
          <div className="col-span-1 bg-gray-300 p-4 rounded-md">
            <h2 className="text-4xl  font-bold mb-4 capitalize ">
              {pokemon.stats[5].statName}
            </h2>
            <p className="text-3xl">{pokemon.stats[5].base_stat}</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-4 p-2 bg-blue-400 text-white rounded"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default PokemonModal;
