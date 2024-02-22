import useCounter from "./customHooks/useCounter";
import useCustomUUID from "./customHooks/useCustomUUID";
import useLocalStorage from "./customHooks/useLocalStorage";
import BasicoReducer from "./useReducer/BasicoReducer";
import FormUserPassword from "./useReducer/FormUserPassword";

function App() {
  const { myCount, increment, decrement, reset } = useCounter();
  const [uuid, setResetUUID] = useCustomUUID();
  const [storage, setStorage] = useLocalStorage("salva", "jejje hola");
  return (
    <>
      <h1 className="text-4xl">Custom Hooks y useReduce</h1>
      <hr />
      <BasicoReducer />
      <hr />
      <FormUserPassword />
      <hr />
      <h2 className="text-xl">Generar uuid</h2>
      <div>
        <p className="text-lg font-bold">UUID: {uuid}</p>
        <button
          onClick={setResetUUID}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Generar nuevo UUID
        </button>
      </div>

      <hr />
      <div className="conatainer mx-auto p-4">
        <h1>Hola, {storage}!</h1>
        <input
          type="text"
          value={storage}
          onChange={(e) => setStorage(e.target.value)}
        />
      </div>
    </>
  );
}

export default App;
