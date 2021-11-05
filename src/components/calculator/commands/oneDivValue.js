import {SingleOperandCommand} from "../calculatorLogic";
import {updateCalculationInput} from "../../../utils/utils";

export class OneDivValueCommand extends SingleOperandCommand{
  constructor(leftOperand) {
    super(leftOperand);
    this.undoRow = leftOperand
  }

  execute() {
    if(this.leftOperand === 0) {
      updateCalculationInput("error");
      throw new Error(`Syntax error`);
    }
    return 1/this.leftOperand;
  }
}