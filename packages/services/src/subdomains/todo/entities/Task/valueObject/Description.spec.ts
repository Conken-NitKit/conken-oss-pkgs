import { Todo } from "~/subdomains/todo";

describe("Todo.Task.Description", () => {
  const TEST_CASES = [
    { description: "猫です。よろしくお願いします🙇‍♂️", expected: true },
    { description: "123456789", expected: true },
    { description: "", expected: true },
  ];

  TEST_CASES.forEach((data) => {
    it(`${data.expected ? "有効" : "無効"}な説明文: "${
      data.description
    }"`, () => {
      const description = Todo.Task.Description.create(data.description);
      expect(description.success).toBe(data.expected);
      if (data.expected) {
        const unwrapped = description.unwrap();
        expect(unwrapped.value).toBe(data.description);
      }
    });
  });
});
