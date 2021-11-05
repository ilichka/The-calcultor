import {SingleOperandCommand} from "../calculatorLogic";

export class FactorialCommand extends SingleOperandCommand{
  constructor(leftOperand) {
    super(leftOperand);
    this.undoRow = leftOperand
  }

  execute() {
    let num = 1;
    for (let i = 1; i <= this.leftOperand; i++) {
      num *= i;
    }
    return num;
  }
}