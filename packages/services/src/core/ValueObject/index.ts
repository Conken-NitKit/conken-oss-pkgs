export type Validator<T> = (value: T) => { success: boolean };

export abstract class ValueObject<T> {
  abstract validator: Validator<T>;

  constructor(readonly value: T) {}

  get isValid() {
    return this.validator(this.value).success;
  }
}
