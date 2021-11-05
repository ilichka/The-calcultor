import {SingleOperandCommand} from "../calculatorLogic";

export class ChangeSignCommand extends SingleOperandCommand{
  constructor(leftOperand) {
    super(leftOperand);
    this.undoRow = leftOperand
  }

  execute() {
    return this.leftOperand[0] === "-" ? this.leftOperand.substr(1) : `-${this.leftOperand}`
  }
}