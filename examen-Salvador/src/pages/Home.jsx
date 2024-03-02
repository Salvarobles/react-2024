import { useEffect, useState } from "react";
import Buscador from "../components/Buscador";
// import { getUrlExits } from "../apis/rickAndMortyApi";
import Swal from "sweetalert2";
import { getUrls, validarURL } from "../apis/rickAndMortyApi";
import getImgs from "../apis/urlApi";
import Spinner from "../components/Spinner";
import Card from "../components/Card";
import { useJsonImageUrl } from "../context/useJsonImageUrl";

const Home = () => {
  const { url, handleAddUrl, handleUrlFirebase } = useJsonImageUrl();
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState();

  const conseguirImg = async (url) => {
    const imagenes = await getImgs(url);
    console.log("se esta imprimiendo imagenes");
    setImg(imagenes);
    setLoading(false);
    return imagenes;
  };

  const fetchUrlsApi = async () => {
    console.log("estoy en el fecth")
    const result = await validarURL(url);
    console.log(result)
    if (result.cierto) {
      conseguirImg(url);
      handleUrlFirebase(result.obj)
    }
  };

  useEffect(() => {
    if (url) {
      fetchUrlsApi();
    }
  }, [url]);

  return (
    <>
      <Buscador handleAddUrl={handleAddUrl} />
      {loading ? (
        <Spinner />
      ) : (
        img.map((img) => <Card key={img.img} id={img.img} image={img.img} />)
      )}
    </>
  );
};

export default Home;
