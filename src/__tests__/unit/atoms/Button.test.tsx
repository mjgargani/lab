import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Button from '../../../components/UI/atoms/Button';

afterEach(cleanup);

test('verify if component receive the `onClick` prop correctly', () => {
  const currentDataTestId = "button__rtl";
  const handleClick = jest.fn();

  render(<Button
    dataTestId={currentDataTestId} 
    active={false}
    onClick={handleClick}
  ></Button>);

  const button = screen.getByTestId(currentDataTestId);
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test.each([
  [false, ".1"], 
  [true, ".7"]])(
  'verify if component receive the `active` prop correctly (state: %p, expectedOpacity: %p)', 
  (state: boolean, expectedOpacity: string) => {
  const currentDataTestId = "button__rtl";

  render(<Button
    dataTestId={currentDataTestId} 
    active={state}
    onClick={() => true}
  ></Button>);

  const button = screen.getByTestId(currentDataTestId);
  expect(button).toBeInTheDocument();

  expect(button).toHaveStyle(`background-color: rgba(255, 255, 255, ${expectedOpacity})`);

  cleanup();
});
