# Cypress Tests

This project is created to test UI (https://meraki-web-test-v2.herokuapp.com/) using cypress.

## Prerequisite

1. Clone this git repo

2. Run `npm i` to install all dependencies 

## How to run Functionality Tests

1. To run tests from cypress test runner: `npx cypress open`

![cypress-test-runner] (docs/cypress_test_runner.png)

2. Click on individual tests to validate functionality

## How to run Visual Tests

1. Create percy project in https://percy.io/

2. Get api token

3. Start cypress usingL `percy exec -- cypress run`

## How to run UI Performance Tests

1. To run lighthouse: `lhci autorun`
