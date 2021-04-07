import devices from '../fixtures/devices.json';

import {
  firstDeviceName,
  secondDeviceName,
  thirdDeviceName,
  forthDeviceName
} from '../support/devices'

context('Device details page UI validation', () => {
  beforeEach(() => {
    cy.fixture('devices').as('devices');
    cy.login();
  });

  it('Verify first device', () => {
    cy.verifyDeviceDetailPage('First device', firstDeviceName);
  });

  it('Verify second device', () => {
    cy.verifyDeviceDetailPage('Second device', secondDeviceName);
  });

  it('Verify third device', () => {
    cy.verifyDeviceDetailPage('Third device', thirdDeviceName);
  });

  it('Verify forth device', () => {
    cy.verifyDeviceDetailPage('Forth device', forthDeviceName);
  });
})
