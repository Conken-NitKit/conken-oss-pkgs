import { mount } from "cypress/react18";
import "./commands/utils";

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      getByTestId: (
        testId: string,
        options?: Parameters<Cypress.Chainable["get"]>[1]
      ) => Chainable<JQuery<HTMLElement>>;
    }
  }
}
