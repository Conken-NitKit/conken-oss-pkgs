export type Validator<T> = (value: T) => { success: boolean };

export abstract class ValueObject<T> {
  abstract validator: Validator<T>;

  constructor(protected readonly value: T, protected readonly objectName: string) {
    const { success } = this.validate();
    if (!success) {
      throw new Error(`Invalid ${this.objectName}`);
    }
    Object.freeze(this);
  }

  private validate() {
    return this.validator(this.value);
  }

  getValue(): T {
    return this.value;
  }
}
