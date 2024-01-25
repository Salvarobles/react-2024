import { useState } from "react";
import { useDataApi } from "../hooks/useDataApi";
const apiToken = import.meta.env.VITE_API_TOKEN;
const apiEndPoint = "api.themoviedb.org/3/discover/movie?api_key=" + apiToken;

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovie, setFilteredMovie] = useState([]);
  const { data, error, loading } = useDataApi(apiEndPoint);

  function handleSeach(e){
    e.preventDefault();
    setSearchQuery(e.target.value.toLowerCase().trim());
    if (!e.target.value.toLowerCase()) {
        setFilteredMovie([])
    } else {
        const filteredResult = data?.result.filter(()=>)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center my-4">
      <form className="w1/2 bg-gray-800 p-4 rounded-lg flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full py-2 px-2 bg-gray-700 text-white rounded-md focus:outline-none"
          placeholder="Buscar Peliculas..."
        />
      </form>
    </div>
  );
};

export default Home;
