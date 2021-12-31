import reducer from '../../../redux/reducers/main';
import GenerationMock from '../../__mocks__/GenerationMock';
import PokemonesMock from '../../__mocks__/PokemonesMock';
import PokemonMock from '../../__mocks__/PokemonMock';
import GenderMock from '../../__mocks__/GenderMock';

describe('Probando los reducers', () => {
  test('Obtener state por default', () => {
    expect(reducer({
      generaciones: [],
      pokemones: [],
      pokemonSeleccionado: null,
      generacionSelecionada: '',
    },'')).toEqual({
      generaciones: [],
      pokemones: [],
      pokemonSeleccionado: null,
      generacionSelecionada: '',
    });
  });

  const initialState = {
    generaciones: [],
    pokemones: [],
    pokemonSeleccionado: null,
    generacionSelecionada: '',
  };

  test('SET_GENERACIONES', () => {
    const payload = GenerationMock;
    const action = {
      type: 'SET_GENERACIONES',
      payload
    };
    const expected = {
      generaciones: GenerationMock,
      pokemones: [],
      pokemonSeleccionado: null,
      generacionSelecionada: '',
    }
    expect(reducer(initialState,action)).toEqual(expected);
  });

  test('SET_POKEMONES', () => {
    const payload = PokemonesMock;
    const action = {
      type: 'SET_POKEMONES',
      payload
    };
    const expected = {
      generaciones: [],
      pokemones: PokemonesMock,
      pokemonSeleccionado: null,
      generacionSelecionada: '',
    }
    expect(reducer(initialState,action)).toEqual(expected);
  });

  test('SET_POKEMON_SELECCIONADO', () => {
    const payload = PokemonMock;
    const action = {
      type: 'SET_POKEMON_SELECCIONADO',
      payload
    };
    const expected = {
      generaciones: [],
      pokemones: [],
      pokemonSeleccionado: PokemonMock,
      generacionSelecionada: '',
    }
    expect(reducer(initialState,action)).toEqual(expected);
  });

  test('SET_GENERACION_SELECCIONADA', () => {
    const payload = GenderMock;
    const action = {
      type: 'SET_GENERACION_SELECCIONADA',
      payload
    };
    const expected = {
      generaciones: [],
      pokemones: [],
      pokemonSeleccionado: null,
      generacionSelecionada: GenderMock,
    }
    expect(reducer(initialState,action)).toEqual(expected);
  });

});