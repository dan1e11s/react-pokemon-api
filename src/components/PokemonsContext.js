import axios from 'axios';
import React, { useReducer } from 'react';

export const pokemonsContext = React.createContext();

const INIT_STATE = {
  pokemons: [],
  onePokemon: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'GET_ALL_POKEMONS':
      return { ...state, pokemons: action.payload };
    case 'GET_ONE_POKEMON':
      return { ...state, onePokemon: action.payload };
    default:
      return state;
  }
}

const PokemonsContextProvider = ({ children }) => {
  const API = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getPokemons() {
    const pokemons = [];

    const {
      data: { results },
    } = await axios(API);

    await results.forEach(async (pokemon) => {
      const { data } = await axios.get(pokemon.url);
      pokemons.push(data);
    });
    setTimeout(() => {
      dispatch({
        type: 'GET_ALL_POKEMONS',
        payload: pokemons,
      });
    }, 1000);
  }

  async function getOnePokemon(id) {
    const res = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
    dispatch({
      type: 'GET_ONE_POKEMON',
      payload: res.data,
    });
  }

  return (
    <pokemonsContext.Provider
      value={{
        pokemons: state.pokemons,
        onePokemon: state.onePokemon,

        getPokemons,
        getOnePokemon,
      }}
    >
      {children}
    </pokemonsContext.Provider>
  );
};

export default PokemonsContextProvider;
