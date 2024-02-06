import AddProductForm from "../components/AddProductForm";
import ShowProductForm from "../components/ShowProductForm";
const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold"> Productos</h1>
          <AddProductForm />
          <ShowProductForm />
      </div>
    </>
  );
};

export default Home;
