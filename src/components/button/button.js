import "./index.scss";
import {doubleOperandMathOperation, singleOperandMathOperation, number, equals, undo, AC, backspace, memory} from "./buttonTypes";

const getEventListenerByType = (type, value) => {
  switch (type) {
    case "double-math-operation":
      return doubleOperandMathOperation.bind(this, value);
    case "single-math-operation":
      return singleOperandMathOperation.bind(this, value);
    case "number":
      return number.bind(this, value)
    case "equals":
      return equals;
    case "undo":
      return undo;
    case "AC":
      return AC;
    case "backspace":
      return backspace;
    case "memory":
      return memory.bind(this, value);
    default:
      throw new Error("The command is not defined");
  }
};

export default (value, buttonClass, type) => {
  const button = document.createElement("div");
  button.classList.add("button", ...buttonClass);
  button.innerText = value;
  button.addEventListener("click", () => {
    if(!button.classList.contains("disabled")) {
      const event = getEventListenerByType(type, value);
      event();
    }
  });
  return button;
};
