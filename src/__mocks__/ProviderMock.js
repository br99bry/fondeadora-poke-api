import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from "redux";
import GenerationMock from './GenerationMock';
import PokemonesMock from './PokemonesMock';
import PokemonMock from './PokemonMock';
import GenderMock from './GenderMock';


const store = createStore(
  combineReducers({
    main: (state = {
      generaciones: GenerationMock,
      pokemones: PokemonesMock,
      pokemonSeleccionado: PokemonMock,
      generacionSelecionada: GenderMock,
    }, action ) => {
      switch (action.type) {
        case "SET_GENERACIONES":
          return { ...state, generaciones: action.payload };
        case "SET_POKEMONES":
          return { ...state, pokemones: action.payload };
        case "SET_POKEMON_SELECCIONADO":
          return { ...state, pokemonSeleccionado: action.payload };
        case "SET_GENERACION_SELECCIONADA":
          return { ...state, generacionSelecionada: action.payload };
        default:
          return { ...state };
      }
    }
  })
  );

const ProviderMock = props => (
  <Provider store={store} >
      {props.children}
  </Provider>
);

export default ProviderMock;