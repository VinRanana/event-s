import ReactDOM from "react-dom";
import { getByText, render } from '@testing-library/react';
import { Router } from "react-router";
import { createMemoryHistory } from 'history'
import userEvent from "@testing-library/user-event";
import Register from "./Register";

// mock api calls
const fakeUser = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
  password: '12345',
  photo: 'me.jpg',
  typeOfUser: 'Host'
};

const setIsAuthenticated = jest.fn(() => ({}));
jest.mock('../../services/UsersApiService', () => ({ register: () => ({}) }));   // need to be inline functions!
jest.mock('../../utils/auth', () => ({ login: () => ({}) }));


test('register form', async () => {
  // get DOM nodes
  const { container, getByLabelText, getByText } = render(<Register setIsAuthenticated={setIsAuthenticated} />);

  const firstNameNode = getByLabelText(/^First name$/);
  const lastNameNode = getByLabelText(/^Last name$/);
  const emailAddressNode = getByLabelText(/^Email address$/);
  const passwordNode = getByLabelText(/^Password$/);
  const photoNode = getByLabelText(/^Photo$/);
  const typeOfUserNode = getByLabelText(/^Type of user$/);
  const signUpButtonNode = getByText(/^Sign up$/);

  
  // fill out form
  userEvent.type(firstNameNode, fakeUser.firstName);
  userEvent.type(lastNameNode, fakeUser.lastName);
  userEvent.type(emailAddressNode, fakeUser.email);
  userEvent.type(passwordNode, fakeUser.password);
  userEvent.type(photoNode, fakeUser.photo);
  userEvent.type(typeOfUserNode, fakeUser.typeOfUser);
  
  userEvent.click(signUpButtonNode);

  // make assertions
  await Promise.resolve();  // fake setTimeout
  expect(setIsAuthenticated).toHaveBeenCalled();
  
  // unmount container
  ReactDOM.unmountComponentAtNode(container);
})