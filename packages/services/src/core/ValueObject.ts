export type Validator<T> = (value: T) => { success: boolean };

export abstract class ValueObject<T> {
  abstract validator: Validator<T>;

  constructor(protected readonly value: T) {
    Object.freeze(this);
  }

  isValid() {
    return this.validator(this.value);
  }

  getValue(): T {
    return this.value;
  }
}
