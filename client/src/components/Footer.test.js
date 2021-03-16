import ReactDOM from "react-dom";
import { render } from '@testing-library/react';
import Footer from "./Footer";

test('renders Home screen', () => {
  const { container, getByText } = render(<Footer />);

  const footer = getByText(/andras/i);

  expect(footer).toBeInTheDocument();

  ReactDOM.unmountComponentAtNode(container);
});