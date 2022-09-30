import { render, screen } from '@testing-library/react';
import { InputControl, SelectControl } from './FormControl.jsx';

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

test('select control should render', async () => {
  render(
    <SelectControl label="shade" name="shade" required>
      <option value="1">LIGHT</option>
      <option value="2">DARK</option>
      <option value="3">DARKER</option>
    </SelectControl>
  );
  const selectControl = screen.getByLabelText('shade');
  expect(selectControl.name).toEqual('shade');
  expect(selectControl.required).toEqual(true);
  expect(selectControl.options.length).toEqual(3);
});
