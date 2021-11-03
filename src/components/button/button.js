import "./index.scss";
import { calculator } from "../calculator/calculator";

const mathOperationType = (value, command) => {
  if (calculator.getCurrentOperand()) {
    const currentOperation = calculator.getCurrentOperation();
    const currentOperand = calculator.getCurrentOperand();
    calculator.execute(currentOperation(currentOperand));
    calculator.setCurrentOperation(command);
  } else {
    calculator.setCurrentOperation(command);
  }
  document.getElementById(
    "calculations-input"
  ).value = `${calculator.getCurrentValue()} ${value} `;
};

const soloMathOperationType = (command) => {
  const currentValue = calculator.getCurrentValue();
  calculator.execute(command(currentValue));
  document.getElementById("calculations-input").value =
    calculator.getCurrentValue();
};

const numberType = (value) => {
  if (calculator.getCurrentOperation()) {
    if(value === ".") {
      const dotExist = String(calculator.getCurrentOperand()).indexOf(".") !== -1;
      if(dotExist) {
        return;
      }
    }
    calculator.updateOperand(value);
    document.getElementById("calculations-input").value += value;
  } else {
    if(value === ".") {
      const dotExist = String(calculator.getCurrentValue()).indexOf(".") !== -1;
      if(dotExist) {
        return;
      }
    }
    calculator.updateCurrent(value);
    if (document.getElementById("calculations-input").value === "0" && value !== ".") {
      document.getElementById("calculations-input").value = value;
    } else {
      document.getElementById("calculations-input").value += value;
    }
  }
};

const equalsType = () => {
  if (calculator.getCurrentOperand()) {
    const currentOperation = calculator.getCurrentOperation();
    const currentOperand = calculator.getCurrentOperand();
    calculator.execute(currentOperation(currentOperand));
  }
  calculator.setCurrentOperation(null);
  document.getElementById("calculations-input").value =
    calculator.getCurrentValue();
};

const undoType = () => {
  calculator.undo();
};

const ACType = () => {
  calculator.setCurrent(0);
  calculator.setOperand("");
  calculator.setCurrentOperation(null);
  calculator.clearCommands();
  document.getElementById("calculations-input").value = "0";
};

const dotType = () => {
  let value = '.';
  if (calculator.getCurrentOperation()) {
    if(!calculator.getCurrentOperand()) {
      value = `0${value}`;
    }
    calculator.updateOperand(value);
    document.getElementById("calculations-input").value += value;
  } else {
    if(!calculator.getCurrentValue()) {
      value = `0${value}`;
    }
    calculator.updateCurrent(value);
    if (document.getElementById("calculations-input").value === "0") {
      document.getElementById("calculations-input").value = value;
    } else {
      document.getElementById("calculations-input").value += value;
    }
  }
}

const setCurrentToInput = () => {
  document.getElementById("result-input").value = calculator.getCurrentValue();
};

const memoryType = (value) => {
  const current = calculator.getCurrentValue();
  switch (value) {
    case "mc":
      calculator.updateMemory(current, "set");
      break;
    case "m+":
      calculator.updateMemory(current, "increase");
      break;
    case "m-":
      calculator.updateMemory(current, "decrease");
      break;
    case "mr":
      calculator.updateMemory(0, "set");
      break;
    default:
      throw new Error("The command is not defined");
  }
};

const backspaceType = () => {
  if (calculator.getCurrentOperation() && calculator.getCurrentOperand()) {
    const currentOperand = String(calculator.getCurrentOperand());
    calculator.setOperand(currentOperand.substr(0, currentOperand.length - 1));
    const { value } = document.getElementById("calculations-input");
    document.getElementById("calculations-input").value = value.substr(
      0,
      value.length - 1
    );
  } else if (
    calculator.getCurrentOperation() &&
    !calculator.getCurrentOperand()
  ) {
    calculator.setCurrentOperation(null);
    document.getElementById("calculations-input").value =
      calculator.getCurrentValue();
  } else {
    const current = String(calculator.getCurrentValue());
    calculator.setCurrent(current.substr(0, current.length - 1));
    document.getElementById("calculations-input").value =
      calculator.getCurrentValue();
  }
};

const getEventListenerByType = (type, command, value) => {
  switch (type) {
    case "math-operation":
      return mathOperationType.bind(this, value, command);
    case "solo-math-operation":
      return soloMathOperationType.bind(this, command);
    case "number":
      return numberType.bind(this, value);
    case "equals":
      return equalsType;
    case "undo":
      return undoType;
    case "AC":
      return ACType;
    case "memory":
      return memoryType.bind(this, value);
    case "backspace":
      return backspaceType;
    case "dot":
      return dotType;
    default:
      throw new Error("The command is not defined");
  }
};

export default (value, buttonClass, command, updateInput, type) => {
  const button = document.createElement("div");
  button.classList.add("button", ...buttonClass);
  button.innerText = value;
  button.addEventListener("click", () => {
    const event = getEventListenerByType(type, command, value);
    event();
    setCurrentToInput();
  });
  return button;
};
