import { useState } from "react";
import AddProductForm from "../components/AddProductForm";
import ShowProductForm from "../components/ShowProductForm";
const Home = () => {
  const [, setForceUpdate] = useState()

  function updateProduct(){
    setForceUpdate({});
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold"> Productos</h1>
          <AddProductForm updateProduct={updateProduct}/>
          <ShowProductForm updateProduct={updateProduct}/>
      </div>
    </>
  );
};

export default Home;
