import { z } from "zod";
import { Description } from "./valueObject/Description";
import { Status } from "./valueObject/Status";
import { Title } from "./valueObject/Title";
import { Core } from "~/core";
import { Shared } from "~/shared";

const FieldSchema = z.object({
  id: Shared.ValueObjects.Id.schema,
  title: Title.schema,
  description: Description.schema.optional(),
  status: Status.schema,
  assigneeId: Shared.ValueObjects.Id.schema.optional(),
  createdBy: Shared.ValueObjects.Id.schema,
});

export type Field = z.infer<typeof FieldSchema>;

export type Props = Pick<
  Field,
  "id" | "title" | "description" | "assigneeId" | "createdBy" | "status"
>;

export type UpdatableField = Pick<
  Field,
  "title" | "description" | "assigneeId" | "status"
>;

export class Task {
  readonly id: Props["id"];
  readonly title: Props["title"];
  readonly description: Props["description"];
  readonly assigneeId: Props["assigneeId"];
  readonly createdBy: Props["createdBy"];
  readonly status: Props["status"];

  constructor(props: Props) {
    this.id = props.id;
    this.title = props.title;
    this.description = props.description;
    this.assigneeId = props.assigneeId;
    this.createdBy = props.createdBy;
    this.status = props.status;
  }

  get isValid(): boolean {
    return FieldSchema.safeParse(this.currentFields).success;
  }

  private get currentFields(): Props {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      assigneeId: this.assigneeId,
      createdBy: this.createdBy,
      status: this.status,
    };
  }

  update(fields: Partial<UpdatableField>): Core.Result<Task>;
  update(fields: Partial<UpdatableField>, { unwrap }: { unwrap: true }): Task;
  update(
    fields: Partial<UpdatableField>,
    { unwrap }: { unwrap: boolean } = { unwrap: false }
  ): Task | Core.Result<Task> {
    const updated = new Task({
      ...this.currentFields,
      ...fields,
    });

    if (unwrap) {
      if (!updated.isValid) {
        throw new Error(`Invalid Task, props: ${JSON.stringify(fields)}`);
      }
      return updated;
    }

    if (!updated.isValid) {
      return Core.Result.failure(
        new Error(`Invalid Task, props: ${JSON.stringify(fields)}`)
      );
    }

    return Core.Result.success(updated);
  }
}

export namespace Task {
  export const create = (
    props: Props,
    displayName = "Todo.Task"
  ): Core.Result<Task> => {
    const task = new Task(props);

    if (!task.isValid) {
      return Core.Result.failure(
        new Error(`Invalid ${displayName}, props: ${JSON.stringify(props)}`)
      );
    }

    return Core.Result.success(task);
  };

  export const forceCreate = (
    props: Props,
    displayName = "Todo.Task"
  ): Task => {
    const task = new Task(props);

    if (!task.isValid) {
      throw new Error(
        `Invalid ${displayName}, props: ${JSON.stringify(props)}`
      );
    }

    return task;
  };
}
