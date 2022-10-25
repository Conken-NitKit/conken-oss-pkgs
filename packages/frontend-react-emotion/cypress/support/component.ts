import { mount, unmount } from "./commands/react18";
import { getByTestId } from "./commands/utils";

// 副作用: コマンドを Cypress.Commands ネームスペースに追加します。
import "./sideEffect";

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      unmount: typeof unmount;
      getByTestId: typeof getByTestId;
    }
  }
}
