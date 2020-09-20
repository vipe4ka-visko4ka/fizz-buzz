import { ICheckRule, IFind, IValue } from "./interfaces";

export class RuleCollection implements IFind<{num: number, defaultValue: IValue<string>}, IValue<string>> {
  constructor(private rules: ICheckRule<number, IValue<string>>[]) {}

  public find(body: { num: number, defaultValue: IValue<string> }): IValue<string> {
    for (const rule of this.rules) {
      if (rule.condition.isTruthy(body.num)) {
        return rule.tag;
      }
    }

    return body.defaultValue;
  }
}
