import ReactDOM from "react-dom";
import Login from "./Login";
import { render } from '@testing-library/react';
import { Router } from "react-router";
import { createMemoryHistory } from 'history'
import userEvent from "@testing-library/user-event";


const history = []
const setIsAuthenticated = jest.fn();
jest.mock('../../services/UsersApiService', () => ({ login: () => ({}) }));
jest.mock('../../utils/auth', () => ({ login: () => history.push('/profile') }));


test('Login', async () => {
  const histroy = createMemoryHistory();

  const { container, getByLabelText, getByTestId } = render(<Router history={histroy} ><Login history={history} setIsAuthenticated={setIsAuthenticated} /></Router>);
  const fakeUser = { email: 'john@doe.com', password: '12345' };

  const emailNode = getByLabelText(/email/i);
  const passwordNode = getByLabelText(/password/i);
  const signInButtonNode = getByTestId('signInButton');

  expect(emailNode).toBeInTheDocument();
  expect(passwordNode).toBeInTheDocument();
  expect(signInButtonNode).toBeInTheDocument();

  // set input fields in a way that triggers a state refresh
  userEvent.type(emailNode, fakeUser.email);
  userEvent.type(passwordNode, fakeUser.password);

  userEvent.click(signInButtonNode);

  // expect(history.length).toBe(1);
  await Promise.resolve();  // fake setTimeout
  expect(setIsAuthenticated).toHaveBeenCalled();

  ReactDOM.unmountComponentAtNode(container);
});
