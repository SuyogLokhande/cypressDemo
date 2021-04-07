import devices from '../fixtures/devices.json';

import {
  firstDeviceName,
  secondDeviceName,
  thirdDeviceName,
  forthDeviceName
} from '../support/devices'

context('Device page UI validation', () => {
  before(() => {
    cy.fixture('devices').as('devices');
    cy.login();
  });

  afterEach(function stopOnFail() {
    if (this.currentTest?.state === 'failed') {
      Cypress.runner.stop();
    }
  });

  it('Verify device page is rendered', () => {
    cy.verifyPageTitleText(`${devices.header}`);
  });

  it('Visual testing', () => {
    cy.percySnapshot(`${devices.header}`);
  });

  it('Verify first device name', () => {
    cy.verifyElementText('First device', firstDeviceName, `${devices.devicesList[0]}`);
  });

  it('Verify second device name', () => {
    cy.verifyElementText('Second device', secondDeviceName, `${devices.devicesList[1]}`);
  });

  it('Verify third device name', () => {
    cy.verifyElementText('Third device', thirdDeviceName, `${devices.devicesList[2]}`);
  });

  it('Verify forth device name', () => {
    cy.verifyElementText('Forth device', forthDeviceName, `${devices.devicesList[3]}`);
  });

})
