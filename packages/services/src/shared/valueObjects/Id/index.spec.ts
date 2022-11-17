import { Shared } from "~/shared";

describe("ID のバリデーションが適切である。", () => {
  const TEST_CASES = [
    { id: "E034B584-7D89-11E9-9669-1AECF481A97B", expected: true },
    { id: "A987FBC9-4BED-4078-8F07-9141BA07C9F3", expected: true },
    { id: "AAAAAAAA-1111-2222-AAAG-111111111111", expected: false },
    { id: "xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3", expected: false },
    { id: "AAAAAAAA-1111-2222-AAAG", expected: false },
    { id: "ああああああああああ", expected: false },
    { id: "🙇‍♂️", expected: false },
    { id: "", expected: false },
  ];
  TEST_CASES.forEach((data) => {
    it(`${data.expected ? "有効" : "無効"}なID: "${data.id}"`, () => {
      const id = Shared.ValueObjects.Id.create(data.id, "Test Id");
      expect(id.success).toBe(data.expected);
      if (data.expected) {
        expect(id.unwrap().value).toBe(data.id);
      }
    });
  });
});
