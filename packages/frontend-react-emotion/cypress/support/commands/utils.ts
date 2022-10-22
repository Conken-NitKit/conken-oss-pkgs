import { mount } from "cypress/react18";

Cypress.Commands.add("mount", mount);

Cypress.Commands.add(
  "getByTestId",
  (testId: string, options?: Parameters<Cypress.Chainable["get"]>[1]) => {
    const selector = `[data-test-id="${testId}"]`;
    cy.get(selector, options);
  }
);
