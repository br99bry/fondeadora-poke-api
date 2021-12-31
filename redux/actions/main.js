import * as t from "../types";

export const setGeneraciones = (generaciones) => ({
  type: t.SET_GENERACIONES,
  payload: generaciones,
});

export const setPokemones = (pokemones) => ({
  type: t.SET_POKEMONES,
  payload: pokemones,
});

export const setPokemonSeleccionado = (pokemon) => ({
  type: t.SET_POKEMON_SELECCIONADO,
  payload: pokemon,
});

export const setGeneracionSeleccionada = (generacion) => ({
  type: t.SET_GENERACION_SELECCIONADA,
  payload: generacion,
});

const actions = {
  setGeneraciones,
  setPokemones,
  setPokemonSeleccionado,
  setGeneracionSeleccionada
}

export default actions;