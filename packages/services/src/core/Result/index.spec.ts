import { Core } from "~/core";

describe("SuccessResult", () => {
  const MOCK_LABEL = "MOCK";
  const result = Core.Result.success(MOCK_LABEL);
  it("正誤判定が正常", () => {
    expect(result.success).toBeTruthy();
  });

  it("返却された値が正常", () => {
    const unwrapped = result.unwrap();
    expect(unwrapped).toBe(MOCK_LABEL);
  });
});

describe("FailureResult", () => {
  const MOCK_ERROR = new Error("failure");
  const result = Core.Result.failure(MOCK_ERROR);

  it("正誤判定が正常", () => {
    expect(result.success).toBeFalsy();
  });

  it("返却された値が正常", () => {
    expect(() => result.unwrap()).toThrowError(MOCK_ERROR);
  });
});
