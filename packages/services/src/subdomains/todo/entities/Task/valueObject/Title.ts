import { z } from "zod";
import { Core } from "~/core";

const TitleSchema = z.string().min(1);

type TitleValue = z.infer<typeof TitleSchema>;

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
  export const schema = TitleSchema;
  export type Value = TitleValue;

  export const create = (
    value: TitleValue,
    displayName = "ToDo.Task.Title"
  ): Core.Result<Title> => {
    const title = new Title(value);

    if (!title.isValid) {
      return Core.Result.failure(
        new Error(`Invalid ${displayName}, status: ${value}`)
      );
    }

    return Core.Result.success(title);
  };
}
