describe.only('Signup process', () => {
const URL = 'http://localhost:3000/';
const timestamp = Date.now();
// const randomNumber = Math.trunc(Math.random() * 1000000);
const fakeUser = {
  firstName: 'john',
  lastName: 'doe',
  email:`john@doe${timestamp}.com`,
  password: 'password'
}

  it('should navigate to sign in page', () => {
    cy.visit(URL);
    cy.findByTestId('avatar', {type: 'button'}).click();
    cy.findByText(/^sign In$/i, {type: 'button'}).click();
    cy.url().should('equal', `${URL}login`);
  });

  it('should navigate to sign up page', () => {
    cy.findByText(/create new account/i, {type: 'button'}).click();
    cy.url().should('equal', `${URL}register`);
  })

  it('should register a new guest user', () => {
    cy.findByLabelText(/^first name$/i).type(fakeUser.firstName)
    cy.findByLabelText(/^last name$/i).type(fakeUser.lastName)
    cy.findByLabelText(/^email address$/i).type(fakeUser.email)
    cy.findByLabelText(/^password$/i).type(fakeUser.password)
    cy.findByLabelText(/^type of user$/i).select('Guest')
    cy.findByText(/^Sign up$/i, { type: 'button' }).click()
    cy.url().should('equal', `${URL}profile`);
    cy.get('h2')
      .should('contain', fakeUser.firstName)
      .should('contain', fakeUser.lastName);
    cy.get('p').should('contain', 'Guest');
  })

  it.skip('should register a new host user', () => {
    cy.findByLabelText(/^first name$/i).type(fakeUser.firstName)
    cy.findByLabelText(/^last name$/i).type(fakeUser.lastName)
    cy.findByLabelText(/^email address$/i).type(fakeUser.email)
    cy.findByLabelText(/^password$/i).type(fakeUser.password)
    cy.findByLabelText(/^type of user$/i).select('Host')
    cy.findByText(/^Sign up$/i, { type: 'button' }).click()
    cy.url().should('equal', `${URL}profile`);
    cy.get('h2')
      .should('contain', fakeUser.firstName)
      .should('contain', fakeUser.lastName);
    cy.get('p').should('contain', 'Host');
  })
});
