import { z } from "zod";
import { Core } from "~/core";

const DescriptionSchema = z.string();

type DescriptionValue = z.infer<typeof DescriptionSchema>;

export class Description extends Core.ValueObject<DescriptionValue> {
  validator = (value: DescriptionValue) => {
    return DescriptionSchema.safeParse(value);
  };
  constructor(value: DescriptionValue) {
    super(value);
    Object.freeze(this);
  }
}

export namespace Description {
  export const schema = DescriptionSchema;
  export type Value = DescriptionValue;

  export const create = (
    value: DescriptionValue,
    displayName = "ToDo.Task.Description"
  ): Core.Result<Description> => {
    const description = new Description(value);

    if (!description.isValid) {
      return Core.Result.failure(
        new Error(`Invalid ${displayName}, Description: ${value}`)
      );
    }

    return Core.Result.success(description);
  };
}
