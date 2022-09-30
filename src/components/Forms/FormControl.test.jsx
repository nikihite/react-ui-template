import { render, screen } from '@testing-library/react';
import { InputControl } from './FormControl.jsx';

test('input control should work', async () => {
  render(
    <InputControl
      label="FAV COLOR"
      name="color"
      required
      placeholder="FIRST FAV"
    />
  );

  const inputControl = screen.getByLabelText('FAV COLOR');
  expect(inputControl.name).toEqual('color');
  expect(inputControl.placeholder).toEqual('FIRST FAV');
  expect(inputControl.required).toEqual(true);
});
