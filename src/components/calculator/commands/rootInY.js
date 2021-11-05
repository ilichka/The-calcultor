import {DoubleOperandCommand} from "../calculatorLogic";

export class RootInYCommand extends DoubleOperandCommand{
  constructor(leftOperand, rightOperand) {
    super(leftOperand, rightOperand);
    this.undoRow = `${leftOperand} √ ${rightOperand}`
  }

  execute() {
    return Math.pow(this.rightOperand, 1/this.leftOperand);
  }
}