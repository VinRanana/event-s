import ReactDOM from "react-dom";
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from "./Navbar";

test('renders Navbar', () => {
  const { container, getByText, getByTestId } = render(<Router><NavigationBar /></Router>);

  const homeButton = getByText('Home');
  const eventsButton = getByText('Events');
  const avatarButton = getByTestId('avatar');

  expect(homeButton).toBeInTheDocument();
  expect(eventsButton).toBeInTheDocument();
  expect(avatarButton).toBeInTheDocument();

  ReactDOM.unmountComponentAtNode(container);
});
