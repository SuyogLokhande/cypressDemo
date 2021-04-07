import devices from '../fixtures/devices.json';

import {
  apiKeyInput,
  apiKeySubmit,
  errorMessage
} from '../support/commands'

context('Login page UI validation', () => {

  before( function () {
    cy.visit('https://meraki-web-test-v2.herokuapp.com/');
  });

  it('Should load the correct URL', function () {
    cy.url().should('eq', 'https://meraki-web-test-v2.herokuapp.com/');
  });

  it('Has a valid login form.', function () {
    cy.get(apiKeyInput).should('be.visible');
    cy.get(apiKeySubmit).should('be.visible');
  });

  it('Should display an error message after login failure.', function () {
    cy.get(apiKeyInput)
      .type('fail@test.com');
    cy.clickOnElement('Submit',apiKeySubmit);
    cy.verifyElementText('Error message', errorMessage, `${devices.errorMessage}`)
  });

  it('Should redirect to the dashboard after login success.', function () {
    cy.login();
    cy.url().should('eq', 'https://meraki-web-test-v2.herokuapp.com/devices');
  });

});
