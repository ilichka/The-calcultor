import {SingleOperandCommand} from "../calculatorLogic";
import {updateCalculationInput} from "../../../utils/utils";

export class RootInTwoCommand extends SingleOperandCommand{
  constructor(leftOperand) {
    super(leftOperand);
    this.undoRow = leftOperand
  }

  execute() {
    if(this.leftOperand < 0) {
      updateCalculationInput("error");
      throw new Error(`Syntax error`);
    }
    return Math.pow(this.leftOperand,1/2);
  }
}