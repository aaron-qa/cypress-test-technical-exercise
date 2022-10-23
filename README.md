# cypress-test-technical-exercise

## Requirements
Node v14.12.0 or higher
NPM v6.14.8 or higher

## Install
Copy the directory onto your machine and run `npm install` from a terminal inside `cypress-test-technical-exercise/`.

## Run Tests
To open Cypress interactive mode run `npm run cy:open`.
To run the tests though CLI run `npm run cy:run`

## Writing Tests

The tests are kept in `cypress/e2e/tests.cy.js`. To write new tests just create a new describe function.

Keep any selectors/test data in `cypress/support/test-data.js`

Note this project uses Cypress Testing Library to help find elements by text (E.G. cy.findByText('')), more details here: https://testing-library.com/docs/cypress-testing-library/intro/.

For more information on Cypress see https://www.cypress.io/.
