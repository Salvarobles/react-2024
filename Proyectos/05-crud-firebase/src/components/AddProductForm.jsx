import { useState } from 'react'


const AddProductForm = () => {
  const [nombre, setNombre] = useState("");
  const [stock, setStock] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [urlImg, setUrlImg] = useState("");
  return (
    <div className='w-1/2 mx-auto mt-8'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8'>
        <h2 className='text-3xl font-semibold my-4'>Añadir nuevos productos</h2>
        
        <div className='mb-4'>
          <label htmlFor="nombre" className='block text-gray-700 text-sm font-bold mb-2'>
            Nombre del Producto
          </label>
          <input type="text" className='shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
          id='nombre' value={nombre} required onChange={(e)=>setNombre(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor="stock" className='block text-gray-700 text-sm font-bold mb-2'>
            Stock
          </label>
          <input type="number" className='shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
          id='stock' value={stock} required onChange={(e)=>setStock(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor="descripcion" className='block text-gray-700 text-sm font-bold mb-2'>
          Descripcion
          </label>
          <textarea type="text" className='shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
          id='descripcion' value={descripcion} required onChange={(e)=>setDescripcion(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor="urlImg" className='block text-gray-700 text-sm font-bold mb-2'>
            Url del Producto
          </label>
          <input type="text" className='shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
          id='urlImg' value={urlImg} required onChange={(e)=>setUrlImg(e.target.value)}
          />
        </div>
        
        <button> Añadir </button>
      </form>
    </div>
  )
}

export default AddProductForm