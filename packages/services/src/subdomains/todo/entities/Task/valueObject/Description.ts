import { z } from "zod";
import { Core } from "~/core";

const DescriptionSchema = z.string();

export type DescriptionValue = z.infer<typeof DescriptionSchema>;

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
  export const create = (
    value: DescriptionValue,
    displayName: string
  ): Core.Result<Description> => {
    const description = new Description(value);

    const { success } = description.isValid;
    if (!success) {
      return Core.Result.failure(
        new Error(`Invalid ${displayName}, Description: ${value}`)
      );
    }

    return Core.Result.success(description);
  };
}
