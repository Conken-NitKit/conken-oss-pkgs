import { Todo } from "~/subdomains/todo";

describe("Todo.Task.Title", () => {
  const TEST_CASES = [
    { description: "猫です。よろしくお願いします🙇‍♂️", expected: true },
    { description: "123456789", expected: true },
    { description: "", expected: false },
  ];

  TEST_CASES.forEach((data) => {
    it(`${data.expected ? "有効" : "無効"}なタイトル: "${
      data.description
    }"`, () => {
      const title = Todo.Task.Title.create(data.description);
      expect(title.success).toBe(data.expected);
      if (data.expected) {
        const unwrapped = title.unwrap();
        expect(unwrapped.value).toBe(data.description);
      }
    });
  });
});
