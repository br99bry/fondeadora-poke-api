import * as t from "../types";

const main = (
  state = {
    generaciones: [],
    pokemones: [],
    pokemonSeleccionado: null,
    generacionSelecionada: '',
  },
  action
) => {
  switch (action.type) {
    case t.SET_GENERACIONES:
      return { ...state, generaciones: action.payload };
    case t.SET_POKEMONES:
      return { ...state, pokemones: action.payload };
    case t.SET_POKEMON_SELECCIONADO:
      return { ...state, pokemonSeleccionado: action.payload };
    case t.SET_GENERACION_SELECCIONADA:
      return { ...state, generacionSelecionada: action.payload };
    default:
      return { ...state };
  }
};

export default main;
