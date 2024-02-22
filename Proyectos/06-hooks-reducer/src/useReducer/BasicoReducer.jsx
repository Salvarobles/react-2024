import { useReducer } from "react";

const initialState = { edad: 10 };

function edadReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { edad: state.edad + 1 };
    case "DECREMENT":
      if (state.edad === 0) return ({ edad: state.edad });
      return { edad: state.edad - 1 };

      case "RESET":
        return { edad: initialState.edad };

    default:
      return initialState;
  }
}

const BasicoReducer = () => {
  const [state, dispatch] = useReducer(edadReducer, initialState);

  /**
   *  initialState--> estado inicial
   * reducer --> funcion que define como el state pasa de un estado a otro
   * Se le pasa dos parametros state y action
   * state --> estado actual o estado mas actualizado
   * dispatch --> es la funcion para activar la actualizacion del estado
   * a) type
   * b) payload (opcional)
   */

  return (
    <div className="container mx-auto py8- text-center">
      <div className="text-2xl font-bold">Basico de UseReducer</div>
      <p className="text-xl mb-4">Tu edad es: {state.edad}</p>
      <div className="flex justify-center">
        <button className="bg-blue-500 text-white rounded" onClick={()=>dispatch({type: "INCREMENT"})}>
          Incrementar Edad
        </button>
        <button className="bg-red-500 text-white rounded" onClick={()=>dispatch({type: "DECREMENT"})}>
          Decrementar edad
        </button>

        <button className="bg-green-500 text-white rounded" onClick={()=>dispatch({type: "RESET"})}>
         RESET
        </button>
      </div>
    </div>
  );
};

export default BasicoReducer;
