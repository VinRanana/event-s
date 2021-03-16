import ReactDOM from "react-dom";
import { render } from '@testing-library/react';
import Unattend from "./Unattend";

test('unattend button', () => {
  const { container, getByText, getByTestId } = render(<Unattend />);

  const unattendButton = getByTestId('unattend1');
  const unattendButton2 = getByTestId('unattend2');
  const confirmation = getByText(/confirm/i);

  expect(unattendButton).toBeInTheDocument();
  expect(unattendButton2).toBeInTheDocument();
  expect(unattendButton2).toHaveProperty('onclick');
  expect(confirmation).toBeInTheDocument();

  ReactDOM.unmountComponentAtNode(container);
});
