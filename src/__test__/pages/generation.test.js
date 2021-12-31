import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import Generation from '../../../pages/generation';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('Funcionalidades básicas de la ruta /generation', () => {
  test('Asegurarse que el modal esta oculto', () => {
    const component = render(
      <ProviderMock>
        <Generation />
      </ProviderMock>
    )
    const btn = component.getByText('Confirmar');
    expect(btn.parentElement.parentElement).toHaveStyle('display: none');
  }); 

  test('Asegurarse que el modal se vuelve visible con click en el boton que lo activa', () => {
    const component = render(
      <ProviderMock>
        <Generation />
      </ProviderMock>
    )
    const btn = component.getAllByText('Elegir Pokémon');
    fireEvent.click(btn[0])
    const btn2 = component.getByText('Confirmar');
    expect(btn2.parentElement.parentElement).toHaveStyle('display: flex');
  });

  test('Asegurarse que se muestre el mensaje con el pokemon seleccionado', () => {
    const component = render(
      <ProviderMock>
        <Generation />
      </ProviderMock>
    )
    component.getAllByText('Haz elegido a pokemonX para tu aventura');
    const btn = component.getAllByText('Elegir Pokémon');
    fireEvent.click(btn[1])
    const btn2 = component.getByText('Confirmar');
    fireEvent.click(btn2)
    component.getAllByText('Haz elegido a pokemonY para tu aventura');
  });
  
});
