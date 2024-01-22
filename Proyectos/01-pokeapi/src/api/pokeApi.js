const URL = import.meta.env.VITE_API_URL;
// const limitPerPage = 20;
const totalPokemon = 100;

// async function getPokemonData(offset) {
//   const url = `${URL}?limit=${limitPerPage}&offset=${offset}}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data.results;
// }

async function getPokemonData() {
  const url = `${URL}?limit=${totalPokemon}}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

async function pokeApi() {
  const pokemonObj = [];
  const results = await getPokemonData();
  const promises = [];

  for (let pokemon of results) {
    promises.push(fetch(pokemon.url));
  }
  
  const promisesPending = await Promise.all(promises);

  const data = await Promise.all(
    promisesPending.map((promise) => promise.json())
  );

  data.map((pokemon) => {
    const abilities = pokemon.abilities.map(({ ability }) => ability.name);
    const formName = pokemon.forms[0].name;

    const {
      height,
      id,
      moves: [
        {
          move: { name: moveName },
        },
      ],
      sprites: {
        other: {
          showdown: { back_default, back_shiny, front_default, front_shiny },
        },
      },
      stats,
      types,
      weight,
    } = pokemon;

    const extractedStats = stats.map(
      ({ base_stat, stat: { name: statName } }) => ({ base_stat, statName })
    );
    const extractedTypes = types.map(
      ({ type: { name: typeName } }) => typeName
    );

    const objPokemon = {
      abilities,
      forms: [formName],
      height,
      id,
      moves: [moveName],
      sprites: {
        back_default,
        back_shiny,
        front_default,
        front_shiny,
      },
      stats: extractedStats,
      types: extractedTypes,
      weight,
    };
    pokemonObj.push(objPokemon);
  });
  return pokemonObj;
}

/*
async function pokeApi() {
  // let offset = 0;

  // console.log(pokemonArray);
  const results = await getPokemonData();
  const promises = [];
  //   console.log(pokemonArray);

  // const uniquePokemonArray = Array.from(
  //   new Set(pokemonArray.map((pokemon) => pokemon.url))
  // );
  for (let pokemon of results) {
    const response = await fetch(pokemon.url);
    const data = await response.json();
    // console.log(data)

    //Hacer OBJETO
    const abilities = data.abilities.map(({ ability }) => ability.name);
    const formName = data.forms[0].name;

    const {
      height,
      id,
      moves: [
        {
          move: { name: moveName },
        },
      ],
      sprites: {
        other: {
          showdown: { back_default, back_shiny, front_default, front_shiny },
        },
      },
      stats,
      types,
      weight,
    } = data;

    const extractedStats = stats.map(
      ({ base_stat, stat: { name: statName } }) => ({ base_stat, statName })
    );
    const extractedTypes = types.map(
      ({ type: { name: typeName } }) => typeName
    );

    const objPokemon = {
      abilities,
      forms: [formName],
      height,
      id,
      moves: [moveName],
      sprites: {
        back_default,
        back_shiny,
        front_default,
        front_shiny,
      },
      stats: extractedStats,
      types: extractedTypes,
      weight,
    };
    // // Verifica si ya existe un objeto con el mismo id en pokemonObj
    // const alreadyExists = pokemonObj.some(
    //   (pokemon) => pokemon.id === objPokemon.id
    // );

    // // Si no existe, agrega el nuevo objeto
    // if (!alreadyExists) {
    //   pokemonObj.push(objPokemon);
    // }
    pokemonObj.push(objPokemon);
  }
  return pokemonObj;
} */

export default pokeApi;
