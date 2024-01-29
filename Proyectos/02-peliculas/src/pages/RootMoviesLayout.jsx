import { Outlet } from "react-router-dom";

const RootMoviesLayout = () => {
  return (
    <>
      <div>Aqui coloco el nav</div>

      <Outlet />

      <div>Aqui coloco el Footer</div>
    </>
  );
};

export default RootMoviesLayout;
