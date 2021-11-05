import {DoubleOperandCommand} from "../calculatorLogic";

export class SubCommand extends DoubleOperandCommand{
  constructor(leftOperand, rightOperand) {
    super(leftOperand, rightOperand);
    this.undoRow = `${leftOperand} - ${rightOperand}`
  }

  execute() {
    return this.leftOperand - this.rightOperand
  }
}