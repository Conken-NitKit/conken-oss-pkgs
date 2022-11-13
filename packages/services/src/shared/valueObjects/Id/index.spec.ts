import { Shared } from "~/shared";

describe("ID のバリデーションが適切である。", () => {
  const TEST_DATA = [
    { id: "E034B584-7D89-11E9-9669-1AECF481A97B", expected: true },
    { id: "A987FBC9-4BED-4078-8F07-9141BA07C9F3", expected: true },
    { id: "AAAAAAAA-1111-2222-AAAG-111111111111", expected: false },
    { id: "xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3", expected: false },
    { id: "AAAAAAAA-1111-2222-AAAG", expected: false },
  ];
  TEST_DATA.forEach((data) => {
    it(`${data.expected ? "有効" : "無効"}なID: ${data.id}`, () => {
      const id = Shared.ValueObjects.Id.create(data.id, `ID: ${data.id}`);
      expect(id.success).toBe(data.expected);
    });
  });
});
