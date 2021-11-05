import {SingleOperandCommand} from "../calculatorLogic";

export class PercentCommand extends SingleOperandCommand{
  constructor(leftOperand) {
    super(leftOperand);
    this.undoRow = leftOperand
  }

  execute() {
    return this.leftOperand/100;
  }
}