// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
<<<<<<< HEAD
=======
Cypress.Commands.add('login', () => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:4000/login',
    body: {
      email: 'andras@surname.com',
      password: 'Iamandras',
    }
  })
  .then((resp) => {
    window.localStorage.setItem('jwt', resp.body.token)
  })
})
>>>>>>> ea8e45cd9439a5b20d5c4f64abc7e002906cf517
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
<<<<<<< HEAD
=======

import '@testing-library/cypress/add-commands';
>>>>>>> ea8e45cd9439a5b20d5c4f64abc7e002906cf517
