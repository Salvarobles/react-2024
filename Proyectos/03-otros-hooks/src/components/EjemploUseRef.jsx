import {useEffect, useRef} from 'react';

const EjemploUseRef = () => {

    const inputRef = useRef();
    useEffect(() => {
       inputRef.current.focus();
    }, []);

    
  return (
    <div>
      <label htmlFor="">
        Nombre:
        <input type="text" ref={inputRef}/>
      </label>
    </div>
  );
};

export default EjemploUseRef;
