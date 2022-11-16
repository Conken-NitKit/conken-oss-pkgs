import { Description } from "./valueObject/Description";
import { Status } from "./valueObject/Status";
import { Title } from "./valueObject/Title";
import { Shared } from "~/shared";

export type Field = {
  id: Shared.ValueObjects.Id;
  title: Title;
  description?: Description;
  assigneeId?: Shared.ValueObjects.Id;
  createdBy: Shared.ValueObjects.Id;
  status: Status;
};

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

  update(fields: Partial<UpdatableField>): Task {
    return new Task({
      ...this.currentFields,
      ...fields,
    });
  }
}

export namespace Task {
  export const create = (props: Props): Task => {
    return new Task(props);
  };
}
