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
import '@percy/cypress';

export const apiKeyInput = "input[name='api_key']";
export const apiKeySubmit = "input[type='submit']";
export const pageHeader = "h1";

Cypress.Commands.add('login', () => {
  cy.visit(Cypress.env('baseUrl'));
  cy.get(apiKeyInput)
    .type(Cypress.env('apiKey'));
  cy.clickOnElement('Submit',apiKeySubmit);
});

Cypress.Commands.add('verifyElementText', (description, element, assertText) => {
  cy.log(`Verifying text for: ${description}`)
    .get(element)
    .should('have.text', assertText);
});

Cypress.Commands.add('clickOnElement', (description, element) => {
  cy.log(`Clicking on: ${description}`)
    .get(element)
    .click();
});

Cypress.Commands.add('verifyPageTitleText', (assertText) => {
  cy.log('Verifying page title text')
    .get(pageHeader)
    .as('page title text')
    .should('have.text', assertText);
});

Cypress.Commands.add('goBackToPreviousPage', () => {
  cy.log('Verifying page title text')
    .go('back');
});

Cypress.Commands.add('verifyDeviceDetailPage', (description, element) => {
  cy.log(`Verifying device detail page for: ${description}`);
  cy.get(element).then(($product) => {
    const name = $product.text();

    cy.clickOnElement(`${description}`, element);
    cy.get("p[class='name']").should(($product2) => {
      expect($product2.text()).to.eq(name);
    })
  });
});
