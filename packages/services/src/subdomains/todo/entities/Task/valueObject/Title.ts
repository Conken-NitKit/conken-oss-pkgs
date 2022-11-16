import { z } from "zod";
import { Core } from "~/core";

const TitleSchema = z.string().min(1);

export type TitleValue = z.infer<typeof TitleSchema>;

export class Title extends Core.ValueObject<TitleValue> {
  validator = (value: TitleValue) => {
    return TitleSchema.safeParse(value);
  };
  constructor(value: TitleValue) {
    super(value);
    Object.freeze(this);
  }
}

export namespace Title {
  export const create = (
    value: TitleValue,
    displayName: string
  ): Core.Result<Title> => {
    const title = new Title(value);

    const { success } = title.isValid;
    if (!success) {
      return Core.Result.failure(
        new Error(`Invalid ${displayName}, status: ${value}`)
      );
    }

    return Core.Result.success(title);
  };
}
