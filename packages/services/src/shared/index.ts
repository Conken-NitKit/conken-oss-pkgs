import { Result as _Result } from "~/core/Result";
import { ValueObject as _ValueObject } from "~/core/ValueObject";
import { Id as _Id, IdValue as _IdValue } from "~/shared/valueObjects/Id";

/**
 * アーキテクチャを構成する要素のうち、特定のレイヤーに依存しないものを定義する
 */
export namespace Core {
  export const Result = _Result;
  export const ValueObject = _ValueObject;
}

export namespace Shared {
  /**
   * 値オブジェクトを定義する
   */
  export namespace ValueObjects {
    export type IdValue = _IdValue;
    export const Id = _Id;
  }
}
