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
    cy.get(firstDeviceName)
      .then((el)=> {
        expect(el.text()).to.be.oneOf([`${devices.devicesList[0]}`, `${devices.devicesList[1]}`, `${devices.devicesList[2]}`, `${devices.devicesList[3]}`]);
      });
  });

  it('Verify second device name', () => {
    cy.get(secondDeviceName)
      .then((el)=> {
        expect(el.text()).to.be.oneOf([`${devices.devicesList[0]}`, `${devices.devicesList[1]}`, `${devices.devicesList[2]}`, `${devices.devicesList[3]}`]);
      });
  });

  it('Verify third device name', () => {
    cy.get(thirdDeviceName)
      .then((el)=> {
        expect(el.text()).to.be.oneOf([`${devices.devicesList[0]}`, `${devices.devicesList[1]}`, `${devices.devicesList[2]}`, `${devices.devicesList[3]}`]);
      });
  });

  it('Verify forth device name', () => {
    cy.get(forthDeviceName)
      .then((el)=> {
        expect(el.text()).to.be.oneOf([`${devices.devicesList[0]}`, `${devices.devicesList[1]}`, `${devices.devicesList[2]}`, `${devices.devicesList[3]}`]);
      });
  });

})
