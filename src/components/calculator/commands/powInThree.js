import {SingleOperandCommand} from "../calculatorLogic";

export class PowInThreeCommand extends SingleOperandCommand{
  constructor(leftOperand) {
    super(leftOperand);
    this.undoRow = leftOperand
  }

  execute() {
    return Math.pow(this.leftOperand,3);
  }
}