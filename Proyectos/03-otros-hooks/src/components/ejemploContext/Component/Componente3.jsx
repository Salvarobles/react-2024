import React, { useContext } from 'react'
import AppCont from '../Context/AppCont'

const Componente3 = () => {
  const {appState, setAppState} = useContext(AppCont)
  return (
    <>
    <div>Componente3</div>
    <p>En el componente 3 el Count: {appState.count}</p>
    <button onClick={()=>setAppState({...appState, count: appState.count+1 })}>
    Incrementar
    </button>
  </>
  )
}

export default Componente3