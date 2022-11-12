import { z } from "zod";
import { ValueObject } from "~/shared/core/valueObject";

const idSchema = z.string().uuid();

export type IdValue = z.infer<typeof idSchema>;

export class Id extends ValueObject<IdValue> {
  validator = (value: IdValue) => {
    return idSchema.safeParse(value);
  };
}
