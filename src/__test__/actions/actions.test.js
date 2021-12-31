import actions from '../../../redux/actions/main';
import GenerationMock from '../../__mocks__/GenerationMock';
import PokemonesMock from '../../__mocks__/PokemonesMock';
import PokemonMock from '../../__mocks__/PokemonMock';
import GenderMock from '../../__mocks__/GenderMock';
describe('Probando el actions', () => {
  test('setGeneraciones action', () => {
    const payload = GenerationMock;
    const expected = {
      type: "SET_GENERACIONES",
      payload
    };
    expect(actions.setGeneraciones(payload)).toEqual(expected);
  });

  test('setPokemones action', () => {
    const payload = PokemonesMock;
    const expected = {
      type: "SET_POKEMONES",
      payload
    };
    expect(actions.setPokemones(payload)).toEqual(expected);
  });

  test('setPokemonSeleccionado action', () => {
    const payload = PokemonMock;
    const expected = {
      type: "SET_POKEMON_SELECCIONADO",
      payload
    };
    expect(actions.setPokemonSeleccionado(payload)).toEqual(expected);
  });

  test('setGeneracionSeleccionada action', () => {
    const payload = GenderMock;
    const expected = {
      type: "SET_GENERACION_SELECCIONADA",
      payload
    };
    expect(actions.setGeneracionSeleccionada(payload)).toEqual(expected);
  });


});