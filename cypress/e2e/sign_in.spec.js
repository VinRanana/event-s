describe('Sign in process', () => {
  const URL = 'http://localhost:3000/';
  const fakeUser = {
    firstName: 'john',
    lastName: 'doe',
    email:`john@doe.com`,
    password: 'password'
  }
  
  it('should navigate to sign in page', () => {
    cy.visit(URL);
    cy.findByTestId('avatar', {type: 'button'}).click();
    cy.findByText(/^sign in$/i, {type: 'button'}).click();
    cy.url().should('equal', `${URL}login`);
  });

  it('should sign in successfully', () => {
    cy.findByLabelText(/^email address$/i).type(fakeUser.email);
    cy.findByLabelText(/^password$/i).type(fakeUser.password);
    cy.findByTestId('signInButton').click();
    // cy.findByText(/^Sign in$/i, { type: 'button' }).click()   // <-----  Why doesn't this work?
    cy.url().should('equal', `${URL}profile`);
    cy.get('h2')
      .should('contain', fakeUser.firstName)
      .should('contain', fakeUser.lastName);
  });
});
