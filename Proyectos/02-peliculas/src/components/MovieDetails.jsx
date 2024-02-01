import { Link } from "react-router-dom";
import useDataApi from "../hooks/useDataApi";
import Spinner from "./Spinner";

const MovieDetails = ({ idPelicula }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiEndPoint = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${apiKey}&language=es-es`;

  const { data, loading, error } = useDataApi(apiEndPoint);

  //sacamos los generos
  const generos = data?.genres.map((genre) => genre.name);
  const generosJoin = generos?.join(", ");

  return (
    <div className="bg-gray-800 p-4">
      {loading && <Spinner />}
      {error && <p className="text-2xl">{error.message}</p>}
      {data && (
        <>
          <div className="flex flex-col w-3/6 items-center mx-auto">
            <img
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              alt=""
              className="mx-auto my-10 shadow-gray-700 shadow-xl  rounded-lg hover:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out"
            />
            <img
              src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
              alt=""
              className="mx-auto my-10 shadow-gray-700 shadow-xl  rounded-lg hover:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out"
            />
          </div>
          <div
            className="bg-gray-800 text-white max-w-md mx-auto rounded-xl shadow overflow-hidden
             md:max-w-2xl m-5 hower:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out"
          >
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-2xl text-indigo-500 font-semibold">
                  {data.title}
                </div>
                <p className="block mt-2 text-xl leading-tight font-medium text-white">
                  {data.tagline}
                </p>
                <p className="block mt-5 text-xl leading-tight font-medium text-white">
                  {generosJoin}
                </p>
                <p className="block mt-5 text-xl leading-tight font-medium text-white">
                  {data.release_date}
                </p>
                <p className="mt-10 text-gray-400">
                    {data.overview}
                </p>
              </div>
              <div className="flex items-center justify-between mt-2 space-x-4">
                    <Link to="/" className="text-xl text-red-500 hover:text-white m-5">Volver</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
