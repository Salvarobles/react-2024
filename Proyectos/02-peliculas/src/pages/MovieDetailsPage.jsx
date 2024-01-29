import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import MovieDetails from "../components/MovieDetails";

const MovieDetailsPage = () => {
  const { idPelicula } = useParams();
  return (
    <div>
      <BackButton />
      <MovieDetails idPelicula={idPelicula}/>

    </div>
    );
};

export default MovieDetailsPage;
