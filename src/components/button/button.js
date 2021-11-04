import "./index.scss";
import {mathOperationType, memoryType, ACType, equalsType, soloMathOperationType, backspaceType, setCurrentToInput, undoType, numberType} from "./buttonTypes"

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
