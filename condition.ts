import { ITruthy } from "./interfaces";

export class DivCondition implements ITruthy<number> {
  constructor(private divider: number) {}

  public isTruthy(num: number): boolean {
    return !!num && num % this.divider === 0;
  }
}

export class AndStrategy implements ITruthy<number> {
  constructor(private conditions: ITruthy<number>[]) {}

  public isTruthy(num: number): boolean {
    for (const condition of this.conditions) {
      if (!condition.isTruthy(num)) {
        return false;
      }
    }

    return true;
  }
}
