import { IValue } from "./interfaces";

export class Tag implements IValue<string> {
  constructor(public value: string) {}
}
