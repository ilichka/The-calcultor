import {DoubleOperandCommand} from "../calculatorLogic";
import {updateCalculationInput} from "../../../utils/utils";

export class DivCommand extends DoubleOperandCommand{
  constructor(leftOperand, rightOperand) {
    super(leftOperand, rightOperand);
    this.undoRow = `${leftOperand} / ${rightOperand}`
  }

  execute() {
    if(this.rightOperand === 0) {
      updateCalculationInput("error");
      throw new Error(`Syntax error`);
    }
    return this.leftOperand / this.rightOperand
  }
}