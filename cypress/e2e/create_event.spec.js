describe.only('create new event', () => {
  
  const URL = 'http://localhost:3000/';
  const timestamp = Date.now();
  const fakeUser = {
    email:`andras@surname.com`,
    password: 'Iamandras'
  }
  const fakeEvent = {
    name: `e2e testing ${timestamp}`,
    location: 'ME7 1FE',
    type: 'Other',
    duration: '1',
    limit: '2',
    date: '2021-03-20',
    date_alt: 'Mar 20th 21',
    description: 'Nearly finished!'
  }
  
  before(() => {
    cy.visit(`${URL}login`);
    cy.findByLabelText(/^email address$/i).type(fakeUser.email);
    cy.findByLabelText(/^password$/i).type(fakeUser.password);
    cy.findByTestId('signInButton').click();
  });

  beforeEach(() => {
      Cypress.Cookies.preserveOnce('sid');
    });
  
  it('navigate to create event page', () => {
    cy.findByTestId('avatar').click();
    cy.findByText(/new event/i).click();
    cy.url().should('equal', `${URL}new-event`);
    cy.get('p').should('contain', 'Create a new event');
  });
  
  it('should create new event', () => {
    cy.findByLabelText(/^name of event$/i).type(fakeEvent.name);
    cy.findByLabelText(/^location$/i).type(fakeEvent.location);
    cy.findByLabelText(/^event type$/i).select(fakeEvent.type);
    cy.findByLabelText(/^duration/i).type(fakeEvent.duration);
    cy.findByLabelText(/^limit of attendees$/i).type(fakeEvent.limit);
    cy.findByLabelText(/^description/i).type(fakeEvent.description);
    cy.get('input').eq(4).type(fakeEvent.date);
    cy.findByText(/^create$/i, { type: 'button' }).click();
  });
  
  it('new event should exist', () => {
    cy.findByText(/^events$/i, { type: 'button' }).click();
    cy.url().should('equal', `${URL}events`);
    cy.findByText(fakeEvent.name, { role: 'heading' })
      .siblings('p')
        .should('contain', fakeEvent.location)
        .should('contain', fakeEvent.date_alt);
  })
  
});