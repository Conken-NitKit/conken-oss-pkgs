import { z } from "zod";
import { ValueObject } from "~/shared/core/valueObject";

const idSchema = z.string().uuid();

export type IdValue = z.infer<typeof idSchema>;

export class Id extends ValueObject<IdValue> {
  validator = (value: IdValue) => {
    return idSchema.safeParse(value);
  };
}

export namespace Id {
  export const create = (value: IdValue, name: string) => {
    const id = new Id(value);

    const { success } = id.isValid();
    if (!success) {
      throw new Error(`Invalid ${name}`);
    }
  };
}
