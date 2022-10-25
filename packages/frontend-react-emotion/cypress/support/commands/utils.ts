export const getByTestId = (
  testId: string,
  options?: Parameters<Cypress.Chainable["get"]>[1]
): Cypress.Chainable<JQuery<HTMLElement>> => {
  const selector = `[data-test-id="${testId}"]`;
  return cy.get(selector, options);
}

Cypress.Commands.addAll({
  getByTestId,
})
