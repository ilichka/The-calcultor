import {DoubleOperandCommand} from "../calculatorLogic";

export class PowInYCommand extends DoubleOperandCommand{
  constructor(leftOperand, rightOperand) {
    super(leftOperand, rightOperand);
    this.undoRow = `${leftOperand} ^ ${rightOperand}`
  }

  execute() {
    return Math.pow(this.leftOperand,this.rightOperand);
  }
}