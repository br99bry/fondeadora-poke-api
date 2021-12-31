import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from '../../../pages/index';
import ProviderMock from '../../__mocks__/ProviderMock';
import dataHome from '../utils/dataHome';
describe('Funcionalidades básicas del home', () => {
  beforeAll(() => jest.spyOn(window, "fetch"));
  test('Hacer render de la página Home y ver mensajes básicos', () => {
    const component = render(
      <ProviderMock>
        <App />
      </ProviderMock>
    )
    const txt = component.getByText('Bienvenido a mundo Pokémon');
    expect(txt).toHaveStyle('display: block');
    const txt2 = component.getByText('Elije una generación de pokémon');
    expect(txt2).toHaveStyle('display: block');
  }); 

  test("llamar a la API para pedir generaciones y a pokemon 1", async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => dataHome,
    });

    expect(window.fetch).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/pikachu");
    expect(window.fetch).toHaveBeenCalledWith("https://pokeapi.co/api/v2/generation/");

  });

  test("Probar que las generaciones se renderizan", () => {
    const component = render(
      <ProviderMock>
        <App />
      </ProviderMock>
    )
    component.getByText('generation-i');
  });
  
});
