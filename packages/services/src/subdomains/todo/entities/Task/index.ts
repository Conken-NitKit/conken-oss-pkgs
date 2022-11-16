/* istanbul ignore file */
import { Task as TaskCore } from "./core";
import { Status as TaskStatus } from "./valueObject/Status";

export type Task = TaskCore;

export namespace Task {
  export const create = TaskCore.create;
  export type Status = TaskStatus;
  export const Status = TaskStatus;
}
