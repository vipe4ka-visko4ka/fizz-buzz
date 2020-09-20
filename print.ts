import { IPrint, IValue } from "./interfaces";

export class Printer implements IPrint {
  constructor(private tag: IValue<string>) {}

  public print(): void {
    console.log(this.tag.value);
  }
}
