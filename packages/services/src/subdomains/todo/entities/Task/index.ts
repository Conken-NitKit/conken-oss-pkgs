/* istanbul ignore file */
import { Task as TaskCore } from "./core";
import { Description as TaskDescription } from "./valueObject/Description";
import { Status as TaskStatus } from "./valueObject/Status";
import { Title as TaskTitle } from "./valueObject/Title";

export type Task = TaskCore;

export namespace Task {
  export const create = TaskCore.create;
  export const forceCreate = TaskCore.forceCreate;
  export type Description = TaskDescription;
  export const Description = TaskDescription;
  export type Status = TaskStatus;
  export const Status = TaskStatus;
  export type Title = TaskTitle;
  export const Title = TaskTitle;
}
