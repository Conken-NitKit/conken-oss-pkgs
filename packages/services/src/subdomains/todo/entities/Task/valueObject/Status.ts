import { z } from "zod";
import { Core } from "~/core";

const StatusSchema = z.enum(["todo", "doing", "done"]);

export type StatusValue = z.infer<typeof StatusSchema>;

export class Status extends Core.ValueObject<StatusValue> {
  validator = (value: StatusValue) => {
    return StatusSchema.safeParse(value);
  };
  constructor(value: StatusValue) {
    super(value);
    Object.freeze(this);
  }
}

export namespace Status {
  export const create = (
    value: StatusValue,
    displayName: string
  ): Core.Result<Status> => {
    const status = new Status(value);

    const { success } = status.isValid;
    if (!success) {
      return Core.Result.failure(
        new Error(`Invalid ${displayName}, status: ${value}`)
      );
    }

    return Core.Result.success(status);
  };
}
