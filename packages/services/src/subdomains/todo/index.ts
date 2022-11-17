/* istanbul ignore file */
import { Task as TaskEntity } from "./entities/Task";

export namespace Todo {
  export type Task = TaskEntity;
  export const Task = TaskEntity;
}
