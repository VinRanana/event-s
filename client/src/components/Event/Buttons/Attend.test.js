import ReactDOM from "react-dom";
import { render } from '@testing-library/react';
import Attend from "./Attend";

test('attend button', () => {
  const { container, getByText, getByTestId } = render(<Attend />);

  const attendButton = getByTestId('attend1');
  const attendButton2 = getByTestId('attend2');
  const confirmation = getByText(/confirm/i);

  expect(attendButton).toBeInTheDocument();
  expect(attendButton2).toBeInTheDocument();
  expect(attendButton2).toHaveProperty('onclick');
  expect(confirmation).toBeInTheDocument();

  ReactDOM.unmountComponentAtNode(container);
});
