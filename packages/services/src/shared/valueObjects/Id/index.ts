import { z } from "zod";
import { Core } from "~/core";

const idSchema = z.string().uuid();

type IdValue = z.infer<typeof idSchema>;

export class Id extends Core.ValueObject<IdValue> {
  /**
   * バリデーションルール
   * @see https://github.com/validatorjs/validator.js/blob/master/src/lib/isUUID.js#L9
   */
  validator = (value: IdValue) => {
    return idSchema.safeParse(value);
  };
  constructor(value: IdValue) {
    super(value);
    Object.freeze(this);
  }
}

export namespace Id {
  export const schema = idSchema;
  export type Value = IdValue;

  /**
   * Id のインスタンスの生成結果を作成する便利関数
   * @param value Id の値
   * @param displayName エラー時に表示する名前
   * @returns Id のインスタンスの生成結果 (成功 or 失敗)
   */
  export const create = (
    value: IdValue,
    displayName = "Shared.ValueObject.Id"
  ): Core.Result<Id> => {
    const id = new Id(value);

    if (!id.isValid) {
      return Core.Result.failure(
        new Error(`Invalid ${displayName}, id: ${value}`)
      );
    }

    return Core.Result.success(id);
  };
}
