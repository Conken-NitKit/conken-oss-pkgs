import { z } from "zod";
import { Result } from "~/shared/core/Result";
import { ValueObject } from "~/shared/core/ValueObject";

const idSchema = z.string().uuid();

export type IdValue = z.infer<typeof idSchema>;

export class Id extends ValueObject<IdValue> {
  validator = (value: IdValue) => {
    return idSchema.safeParse(value);
  };
}

export namespace Id {
  export const create = (value: IdValue, name: string): Result<Id> => {
    const id = new Id(value);

    const { success } = id.isValid();
    if (!success) {
      return Result.failure(new Error(`Invalid ${name} id: ${value}`));
    }

    return Result.success(id);
  };
}
