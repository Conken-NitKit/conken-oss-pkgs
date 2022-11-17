/* istanbul ignore file */
import { Id as SharedId } from "~/shared/valueObjects/Id";

export namespace Shared {
  /**
   * 値オブジェクトを定義する
   */
  export namespace ValueObjects {
    export type Id = SharedId;
    export const Id = SharedId;
  }
}
