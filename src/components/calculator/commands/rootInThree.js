import {SingleOperandCommand} from "../calculatorLogic";

export class RootInThreeCommand extends SingleOperandCommand{
  constructor(leftOperand) {
    super(leftOperand);
    this.undoRow = leftOperand
  }

  execute() {
    return Math.pow(this.leftOperand,1/3);
  }
}