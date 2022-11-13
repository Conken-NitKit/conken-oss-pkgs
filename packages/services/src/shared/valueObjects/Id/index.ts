import { z } from "zod";
import { Core } from "~/core";

const idSchema = z.string().uuid();

export type IdValue = z.infer<typeof idSchema>;

export class Id extends Core.ValueObject<IdValue> {
  validator = (value: IdValue) => {
    return idSchema.safeParse(value);
  };
  constructor(value: IdValue) {
    super(value);
    Object.freeze(this);
  }
}

export namespace Id {
  /**
   * Id のインスタンスの生成結果を作成する便利関数
   * @param value Id の値
   * @param displayName エラー時に表示する名前
   * @returns Id のインスタンスの生成結果 (成功 or 失敗)
   */
  export const create = (
    value: IdValue,
    displayName: string
  ): Core.Result<Id> => {
    const id = new Id(value);

    const { success } = id.isValid();
    if (!success) {
      return Core.Result.failure(
        new Error(`Invalid ${displayName}, id: ${value}`)
      );
    }

    return Core.Result.success(id);
  };
}
