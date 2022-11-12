import {
  Id as SharedId,
  IdValue as SharedIdValue,
} from "~/shared/valueObjects/Id";

export namespace Shared {
  /**
   * 値オブジェクトを定義する
   */
  export namespace ValueObjects {
    export const Id = SharedId;
    export type IdValue = SharedIdValue;
  }
}
