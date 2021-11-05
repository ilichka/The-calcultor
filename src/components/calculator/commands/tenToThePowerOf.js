import {SingleOperandCommand} from "../calculatorLogic";

export class TenToThePowerOfCommand extends SingleOperandCommand{
  constructor(leftOperand) {
    super(leftOperand);
    this.undoRow = leftOperand
  }

  execute() {
    return Math.pow(10, this.leftOperand);
  }
}