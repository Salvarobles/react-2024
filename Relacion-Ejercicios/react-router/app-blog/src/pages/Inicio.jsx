import { Link } from "react-router-dom"
import CardList from "../components/cardList"

const Inicio = () => {
    const arrayNumber = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div >
        <h1 className="text-center my-6 font-bold">Inicio</h1>
        <div className=" flex flex-wrap gap-4 justify-center items-center">
        {
            arrayNumber.map((listNumber) => (<Link key={listNumber} to={`/post/${listNumber}`}><CardList id={listNumber}/></Link>))
        }
        </div>
    </div>
  )
}

export default Inicio
