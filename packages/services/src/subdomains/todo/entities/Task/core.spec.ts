import { Todo } from "~/subdomains/todo";

describe("Todo.Task", () => {
  const PROPS_MOCK = {
    id: "E034B584-7D89-11E9-9669-1AECF481A97B",
    title: "猫です。よろしくお願いします🙇‍♂️",
    description: "猫です。よろしくお願いします🙇‍♂️",
    status: "todo",
    assigneeId: "E034B584-7D89-11E9-9669-1AECF481A97B",
    createdBy: "E034B584-7D89-11E9-9669-1AECF481A97B",
  } as const;

  const wrappedTask = Todo.Task.create(PROPS_MOCK);

  it("タスクを作成できる", () => {
    expect(wrappedTask.success).toBeTruthy();
  });

  const task = wrappedTask.unwrap();

  it("タスクを作成時の値が正しい", () => {
    expect(task.id).toBe(PROPS_MOCK.id);
    expect(task.title).toBe(PROPS_MOCK.title);
    expect(task.description).toBe(PROPS_MOCK.description);
    expect(task.status).toBe(PROPS_MOCK.status);
    expect(task.assigneeId).toBe(PROPS_MOCK.assigneeId);
    expect(task.createdBy).toBe(PROPS_MOCK.createdBy);
  });

  const PROPS_MOCK_TO_UPDATE = {
    title: "犬です。よろしくお願いします🙇‍♂️",
    status: "doing",
  } as const;

  const updateResult = task.update(PROPS_MOCK_TO_UPDATE);
  const updated = updateResult.unwrap();

  it("タスクを更新ができ、その値が適切である", () => {
    expect(updated.id).toBe(PROPS_MOCK.id);
    expect(updated.title).toBe(PROPS_MOCK_TO_UPDATE.title);
    expect(updated.description).toBe(PROPS_MOCK.description);
    expect(updated.status).toBe(PROPS_MOCK_TO_UPDATE.status);
    expect(updated.assigneeId).toBe(PROPS_MOCK.assigneeId);
    expect(updated.createdBy).toBe(PROPS_MOCK.createdBy);
  });

  const PROPS_MOCK_TO_UPDATE_BY_METHOD_CHAINING = [
    {
      title: "人です。よろしくお願いします🙇‍♂️",
      status: "done",
    },
    {
      title: "人でした。よろしくお願いします🙇‍♂️",
      description: "人でした。よろしくお願いします🙇‍♂️",
    },
  ] as const;

  const updatedByMethodChainingResult = task
    .update(PROPS_MOCK_TO_UPDATE_BY_METHOD_CHAINING[0], { unwrap: true })
    .update(PROPS_MOCK_TO_UPDATE_BY_METHOD_CHAINING[1]);

  const updatedByMethodChaining = updatedByMethodChainingResult.unwrap();

  it("メソッドチェインを使って、タスクの更新ができ、その値が適切である", () => {
    expect(updatedByMethodChaining.title).toBe(
      PROPS_MOCK_TO_UPDATE_BY_METHOD_CHAINING[1].title
    );
    expect(updatedByMethodChaining.description).toBe(
      PROPS_MOCK_TO_UPDATE_BY_METHOD_CHAINING[1].description
    );
    expect(updatedByMethodChaining.status).toBe(
      PROPS_MOCK_TO_UPDATE_BY_METHOD_CHAINING[0].status
    );
  });

  const missingUpdated = task.update({
    title: "",
  });

  it("不正なタスクの更新はできない", () => {
    expect(missingUpdated.success).toBeFalsy();
  });

  it("{ unwrap: true } の場合、不正な値を受け取った瞬間に例外を投げる", () => {
    expect(() => {
      task.update(
        {
          title: "",
        },
        { unwrap: true }
      );
    }).toThrowError();
  });

  it("forceCreate を使うと、 Result を経由せずに Task インスタンスを生成できる", () => {
    const forceCreated = Todo.Task.forceCreate(PROPS_MOCK);
    expect(forceCreated.id).toBe(PROPS_MOCK.id);
    expect(forceCreated.title).toBe(PROPS_MOCK.title);
    expect(forceCreated.description).toBe(PROPS_MOCK.description);
    expect(forceCreated.status).toBe(PROPS_MOCK.status);
    expect(forceCreated.assigneeId).toBe(PROPS_MOCK.assigneeId);
    expect(forceCreated.createdBy).toBe(PROPS_MOCK.createdBy);
  });
});

describe("Todo.Task", () => {
  const PROPS_MOCK = {
    id: "E034B584-7D89-11E9-9669",
    title: "猫です。よろしくお願いします🙇‍♂️",
    status: "todo",
    createdBy: "E034B584-7D89-11E9-9669",
  } as const;

  it("不正な値を受け取った場合にタスクの作成に失敗する", () => {
    const task = Todo.Task.create(PROPS_MOCK);
    expect(task.success).toBeFalsy();
  });

  it("forceCreate を使うと、不正な値を受け取った瞬間に例外を投げる", () => {
    expect(() => {
      Todo.Task.forceCreate(PROPS_MOCK);
    }).toThrowError();
  });
});
