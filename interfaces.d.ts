export interface IPrint {
  print: () => void;
}

export interface IValue<T> {
  value: T;
}

export interface ITruthy<T> {
  isTruthy: (T) => boolean;
}

export interface ICheckRule<T, Y> {
  tag: Y;
  condition: ITruthy<T>;
  defaultTag?: Y;
  checkRule: (arg: T) => Y;
}

export interface IFind<T, Y> {
  find: (arg: T) => Y;
}
