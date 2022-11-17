/**
 * 処理結果を統一のインターフェースで取り扱う
 * SuccessResult: 成功
 * FailureResult: 失敗
 */
export type Result<T, E extends Error = Error> =
  | SuccessResult<T, E>
  | FailureResult<T, E>;

export namespace Result {
  /**
   * SuccessResult を作成する便利関数
   */
  export const success = <T, E extends Error>(data: T): Result<T, E> =>
    new SuccessResult(data);

  /**
   * FailureResult を作成する便利関数
   */
  export const failure = <T, E extends Error>(error: E): Result<T, E> =>
    new FailureResult(error);
}

abstract class AbstractResult<T, E extends Error> {
  /**
   * 成功していた場合は値を取り出し、失敗の場合に例外を投げる
   */
  public unwrap(): T {
    const wrapped = this._getWrapped(
      (data) => Result.success(data),
      (error) => Result.failure(error)
    );
    if (!wrapped.success) {
      throw wrapped.error;
    }
    return wrapped.data;
  }

  /**
   * Result でラップされた "データ" or "エラー" の情報を取得する。
   * 継承先のクラスに、Result が成功しているか失敗しているかの判定を任せる
   */
  protected abstract _getWrapped(
    success: (data: T) => Result<T, E>,
    failure: (error: E) => Result<T, E>
  ): Result<T, E>;
}

class SuccessResult<T, E extends Error> extends AbstractResult<T, E> {
  readonly success = true;

  constructor(readonly data: T) {
    super();
  }

  protected _getWrapped(
    success: (data: T) => Result<T, E>,
    _: (error: E) => Result<T, E>
  ): Result<T, E> {
    return success(this.data);
  }
}

class FailureResult<T, E extends Error> extends AbstractResult<T, E> {
  readonly success = false;

  constructor(readonly error: E) {
    super();
  }

  protected _getWrapped(
    _success: (data: T) => Result<T, E>,
    failure: (error: E) => Result<T, E>
  ): Result<T, E> {
    return failure(this.error);
  }
}
