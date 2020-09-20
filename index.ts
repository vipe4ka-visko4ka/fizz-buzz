import { AndStrategy, DivCondition } from "./condition";
import { Printer } from "./print";
import { Tag } from "./tag";
import { TagNumRule } from "./rule";
import { RuleCollection } from "./collection";

const MAX_NUMS = 105;

const rules = new RuleCollection([
  new TagNumRule(new Tag('FizzBuzz'), new AndStrategy([new DivCondition(3), new DivCondition(5)])),
  new TagNumRule(new Tag('Fizz'), new AndStrategy([new DivCondition(3)])),
  new TagNumRule(new Tag('Buzz'), new AndStrategy([new DivCondition(5)]))
]);

[...Array(MAX_NUMS).keys()].map(i => i + 1).forEach(i => {
  new Printer(rules.find({ num: i, defaultValue: new Tag(i.toString())})).print();
});
