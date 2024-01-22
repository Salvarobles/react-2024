import { useState } from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import SearchBar from "../../components/SearchBar/SearchBar"

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchBar setSearch={setSearch}/>
      <PokemonCard search={search}/>
    </>
  )
}

export default Home