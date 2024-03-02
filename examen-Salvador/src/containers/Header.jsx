import { useJsonImageUrl } from "../context/useJsonImageUrl";

const Header = () => {
  const { urlFirebase } = useJsonImageUrl();
  return (
    <header className=" bg-purple-200 h-20 flex">
      <div className=" items-center justify-center">Examen DWEC Salvador Robles</div>
      <div>{urlFirebase?.URL}</div>
      <div>Numero de imagenes: {urlFirebase?.imagenes.length}</div>
      <div>Numero de favoritas:{urlFirebase?.favoritas.length}</div>
    </header>
  );
};

export default Header;
