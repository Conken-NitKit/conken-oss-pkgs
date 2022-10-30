import { mount, unmount } from "cypress/react18";
export { mount, unmount };

Cypress.Commands.addAll({
  mount,
  unmount,
});
