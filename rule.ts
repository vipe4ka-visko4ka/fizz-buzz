import { ICheckRule, ITruthy, IValue } from "./interfaces";

export class TagNumRule implements ICheckRule<number, IValue<string>> {
  constructor(
    public tag: IValue<string>,
    public condition: ITruthy<number>,
    public defaultTag?: IValue<string>
  ) {}

  public checkRule(num: number): IValue<string> {
    if (!this.defaultTag) {
      throw new Error('Default value required!');
    }

    if (this.condition.isTruthy(num)) {
      return this.tag;
    } else {
      return this.defaultTag;
    }
  }
}
