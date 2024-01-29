import { useState } from "react";
import useDataApi  from "../hooks/useDataApi";
import Spinner from "./Spinner";
import MovieCard from "./MovieCard";

const MovieSearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovie, setFilteredMovie] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiEndPoint = "https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by=popularity.desc&api_key=" + apiKey;

  const { data, error, loading } = useDataApi(apiEndPoint);

  function handleSeach(e) {
    e.preventDefault();
    const searchTerm = e.target.value.toLowerCase();
    setSearchQuery(e.target.value.toLowerCase().trim());
    if (!e.target.value.toLowerCase()) {
      setFilteredMovie([]);
    } else {
      const filteredResult = data?.results.filter((movie) => 
        movie.title.toLowerCase().includes(searchTerm)
      );
      setFilteredMovie(filteredResult || []);
    }

  }

  return (
    <>
      <div className="flex flex-col items-center justify-center my-4">
        <form className="w1/2 bg-gray-800 p-4 rounded-lg flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSeach}
            className="w-full py-2 px-2 bg-gray-700 text-white rounded-md focus:outline-none"
            placeholder="Buscar Peliculas..."
          />
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10 w-5/6">
      {loading && <Spinner/>}
      {error && <h1 className="text-2xl font-bold">Error</h1>}
      {( searchQuery ? filteredMovie : data?.results || []).map(movie => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </>
  );
};

export default MovieSearchForm;
