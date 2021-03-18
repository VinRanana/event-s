import ReactDOM from "react-dom";
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./Home";

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

test('renders Home screen', () => {
  const { container, getByText, getByTestId } = render(<Router><Home /></Router>);

  const showButton = getByText(/show/i);
  const subtitle = getByTestId('subtitle');

  expect(showButton).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();

  ReactDOM.unmountComponentAtNode(container);
});
