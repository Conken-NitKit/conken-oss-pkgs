import { z } from "zod";
import { Core } from "~/core";

describe("ValueObject の検証", () => {
  const mockSchema = z.string().min(5).max(10);

  type MockValue = z.infer<typeof mockSchema>;

  class MockValueObject extends Core.ValueObject<MockValue> {
    validator = (value: MockValue) => mockSchema.safeParse(value);
    constructor(value: string) {
      super(value);
    }
  }
  it("5以下の文字列を渡すとエラーになる", () => {
    const mock = new MockValueObject("1234");
    expect(mock.isValid).toBeFalsy();
  });

  it("10以上の文字列を渡すとエラーになる", () => {
    const mock = new MockValueObject("12345678901");
    expect(mock.isValid).toBeFalsy();
  });

  it("5以上10以下の文字列を渡すと正常に生成される", () => {
    const mock = new MockValueObject("12345");
    expect(mock.isValid).toBeTruthy();
  });
});
