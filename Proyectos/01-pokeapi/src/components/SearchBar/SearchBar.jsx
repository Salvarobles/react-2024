/**
 * @author Salvador Robles Gómez
 * SearchBar: Componente para el buscador. Permitirá buscar por pulsación de teclado la tarjeta
 * del pokemon deseada filtrando los datos en tiempo real. La pulsación de la tecla ESC limpia el
 * buscador y por tanto vuelve a mostrar todos los 100 pokemons
 */

const SearchBar = (props) => {
  const { setSearch } = props;

  const handlekeyEsc = (e) => {
    if (e.key === "Escape"){
      setSearch('')
      e.target.value = '';
    }
  } 

  return (
    <div className="flex items-center justify-center mt-6">
      <input
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handlekeyEsc}
        type="text"
        name="inputname"
        className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-purple-400 focus:ring-purple-700 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 shadow-md focus:shadow-lg focus:shadow-purple-400"
        placeholder="Ingrese un nombre"
      />
      <button className="bg-purple-700 text-white border border-purple-400 border-b-4 font-medium overflow-hidden relative m-3 px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
        <span className="bg-purple-400 shadow-purple-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
