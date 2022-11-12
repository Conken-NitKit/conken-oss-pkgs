import { Result as CoreResult } from "~/core/Result";
import { ValueObject as CoreValueObject } from "~/core/ValueObject";

/**
 * アーキテクチャを構成する要素のうち、特定のレイヤーに依存しないものを定義する
 */
export namespace Core {
  export type Result<T> = CoreResult<T>;
  export const Result = CoreResult;
  export const ValueObject = CoreValueObject;
}
