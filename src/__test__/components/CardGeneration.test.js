import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render } from '@testing-library/react';
import CardGeneration from '../../../components/CardGeneration';

test('Hacer render del contenido de CardGeneration', () => {
  const component = render(<CardGeneration text={"Texto"} />)
  component.getByText('Texto')
}); 