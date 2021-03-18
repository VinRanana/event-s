describe('testing navigation', () => {
const URL = 'http://localhost:3000/';

  beforeEach(() => {
    cy.visit(URL);
  });

  it('navigates to events page', () => {
    cy.findByText('Events', {type: 'button'}).click();
    cy.url().should('equal', `${URL}events`);
  })

  it('navigates to the correct event from /events', () => {
    cy.findByText('Events', {type: 'button'}).click();
    let eventNameText;
    cy.findByTestId('event-list').get('ul').within(($ul) => {
      cy.get('h2').first().invoke('text')
        .then((text) => { eventNameText = text; })
        .then(() => { cy.get('h2').first().click() })
    }).then(() => { cy.findByText(eventNameText).should('contain', eventNameText) });
  })
})