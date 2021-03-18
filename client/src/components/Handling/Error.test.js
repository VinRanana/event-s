import ReactDOM from "react-dom";
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from "./Error";

// mock matchMedia because it's not available natively on JSDOM
window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // Deprecated
  removeListener: jest.fn(), // Deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
})

test('renders 40 error screen', () => {
  const { container, getByText } = render(<Router><NotFound /></Router>);

  const error = getByText(/404/i);
  const errorButton = getByText(/back/i);

  expect(error).toBeInTheDocument();
  expect(errorButton).toBeInTheDocument();

  ReactDOM.unmountComponentAtNode(container);
});
