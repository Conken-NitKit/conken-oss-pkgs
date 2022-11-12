import { Result as _Result } from "~/shared/core/Result";
import { ValueObject as _ValueObject } from "~/shared/core/ValueObject";
import {
  Id as _Id,
  IdValue as _IdValue,
} from "~/shared/domains/valueObjects/id";

export namespace Shared {
  /**
   * アーキテクチャを構成する要素のうち、特定のレイヤーに依存しないものを定義する
   */
  export namespace Core {
    export const Result = _Result;
    export const ValueObject = _ValueObject;
  }

  /**
   * アプリケーション固有のドメインを定義する
   */
  export namespace Domains {
    /**
     * ドメインの値オブジェクトを定義する
     */
    export namespace ValueObjects {
      export type IdValue = _IdValue;
      export const Id = _Id;
    }
  }
}
