import { Todo } from "~/subdomains/todo";

describe("Todo.Task.Status", () => {
  const TEST_CASES = [
    { status: "todo", expected: true },
    { status: "doing", expected: true },
    { status: "done", expected: true },
  ] as const;

  TEST_CASES.forEach((data) => {
    it(`${data.expected ? "有効" : "無効"}なステータス: "${
      data.status
    }"`, () => {
      const status = Todo.Task.Status.create(data.status);
      expect(status.success).toBe(data.expected);
      if (data.expected) {
        const unwrapped = status.unwrap();
        expect(unwrapped.value).toBe(data.status);
      }
    });
  });
});
