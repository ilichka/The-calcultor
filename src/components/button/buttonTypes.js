import {calculator} from "../calculator/calculator";
import {AddCommand} from "../calculator/commands/add";
import {PercentCommand} from "../calculator/commands/percent";
import {SubCommand} from "../calculator/commands/sub";
import {MulCommand} from "../calculator/commands/mul";
import {DivCommand} from "../calculator/commands/div";
import {TenToThePowerOfCommand} from "../calculator/commands/tenToThePowerOf";
import {OneDivValueCommand} from "../calculator/commands/oneDivValue";
import {ChangeSignCommand} from "../calculator/commands/changeSign";
import {PowInTwoCommand} from "../calculator/commands/powInTwo";
import {PowInThreeCommand} from "../calculator/commands/powInThree";
import {PowInYCommand} from "../calculator/commands/powInY";
import {RootInTwoCommand} from "../calculator/commands/rootInTwo";
import {RootInThreeCommand} from "../calculator/commands/rootInThree";
import {RootInYCommand} from "../calculator/commands/rootInY";
import {FactorialCommand} from "../calculator/commands/factorial";
import {updateCalculationInput, enableButtons} from "../../utils/utils";

const CALCULATOR_COMMANDS = {
  "+": AddCommand,
  "%": PercentCommand,
  "—": SubCommand,
  "*": MulCommand,
  "/": DivCommand,
  "10^y": TenToThePowerOfCommand,
  "1/x": OneDivValueCommand,
  "+/-": ChangeSignCommand,
  "x^2": PowInTwoCommand,
  "x^3": PowInThreeCommand,
  "^": PowInYCommand,
  "2√": RootInTwoCommand,
  "3√": RootInThreeCommand,
  "√": RootInYCommand,
  "x!": FactorialCommand,
};

const doubleOperandMathOperation = (value) => {
  const string = document.getElementById("calculations-input").value;
  const operationSign = getOperationSign(string);
  if (operationSign) {
    const operandsArray = getOperands(string, operationSign[0]);
    const leftOperand = +operandsArray[0];
    const rightOperand = +operandsArray[1];
    if (operandsArray[1].length) {
      const command = new CALCULATOR_COMMANDS[operationSign[0]](leftOperand, rightOperand);
      calculator.execute(command);
      const current = calculator.getCurrentValue();
      updateCalculationInput("set", current, "", value)
      updateResultInput(current);
    } else {
      updateCalculationInput("set", leftOperand, "", value)
    }
  } else {
    updateCalculationInput("set", string, "", value)
  }
};

const singleOperandMathOperation = (value) => {
  equals();
  const string = document.getElementById("calculations-input").value ? document.getElementById("calculations-input").value : "0";
  const command = new CALCULATOR_COMMANDS[value](+string);
  calculator.execute(command);
  const current = calculator.getCurrentValue();
  updateResultInput(current);
  updateCalculationInput("set", current, "", "")
};

const number = (value) => {
  updateCalculationInput("add", value)
};

const equals = (memory) => {
  const string = document.getElementById("calculations-input").value;
  const operationSign = getOperationSign(string);
  if (operationSign) {
    const operandsArray = getOperands(string, operationSign[0]);
    const leftOperand = +operandsArray[0];
    const rightOperand = +operandsArray[1];
    if (operandsArray[1].length) {
      const command = new CALCULATOR_COMMANDS[operationSign[0]](leftOperand, rightOperand);
      calculator.execute(command);
      const current = calculator.getCurrentValue();
      updateCalculationInput("set", current, "", "");
      updateResultInput(current);
    } else {
      updateCalculationInput("set", leftOperand, "", "")
    }
  } else {
    updateCalculationInput("set", string, "", "");
    !memory && updateResultInput(string);
  }
};

const undo = () => {
  calculator.undo();
  const current = calculator.getCurrentValue();
  const undoRow = calculator.getUndoRow();
  updateCalculationInput("set", undoRow, "", "");
  updateResultInput(current);
};

const AC = () => {
  calculator.setCurrentValue(0);
  updateCalculationInput("set", "0", "", "");
  updateResultInput("0");
  enableButtons();
};

const backspace = () => {
  updateCalculationInput("delete")
};

const memory = (operation) => {
  const value = document.getElementById("calculations-input").value;
  switch (operation) {
    case "mc":
      calculator.updateMemory(0, "set");
      break;
    case "m+":
      equals(true);
      calculator.updateMemory(value, "increase");
      break;
    case "m-":
      equals(true);
      calculator.updateMemory(value, "decrease");
      break;
    case "mr":
      const calculationInput = document.getElementById("calculations-input").value;
      const operationSing = getOperationSign(calculationInput);
      const memoryValue = calculator.getMemory()
      if(operationSing) {
        const operands = getOperands(calculationInput, operationSing[0]);
        if(operands[1].length) {
          updateCalculationInput("set", operands[0], memoryValue, operationSing);
        } else {
          updateCalculationInput("add", memoryValue, "", "");
        }
      } else {
        updateCalculationInput("set", memoryValue, "", "");
      }

      //updateResultInput(memoryValue);
      break;
    case "ms":
      calculator.updateMemory(value, "set");
      break;
    default:
      throw new Error("The command is not defined");
  }
};

const updateResultInput = (value) => {
  document.getElementById("result-input").value = value;
};

const getOperationSign = (string) => {
  return string.match(/[—/+*^√]/);
};

const getOperands = (string, operationSign) => {
  return string.split(operationSign)
};

export {doubleOperandMathOperation, singleOperandMathOperation, number, equals, undo, AC, backspace, memory}