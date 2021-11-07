import "./index.scss";
import button from "../button/button";
import Calculator from "./calculatorLogic";

export const calculator = new Calculator();

const BUTTONS = [
  [
    {
      value: "%",
      classList: ["math-operation"],
      type: "single-math-operation",
    },
    {
      value: "+/-",
      classList: ["math-operation"],
      type: "single-math-operation",
    },
    {
      value: "x^2",
      classList: ["math-operation"],
      type: "single-math-operation",
    },
    {
      value: "x^3",
      classList: ["math-operation"],
      type: "single-math-operation",
    },
    {
      value: "^",
      classList: ["math-operation"],
      type: "double-math-operation",
    },
    { value: "mr", classList: ["memory"], type: "memory" },
  ],
  [
    {
      value: "10^y",
      classList: ["math-operation"],
      type: "single-math-operation",
    },
    {
      value: "1/x",
      classList: ["math-operation"],
      type: "single-math-operation",
    },
    {
      value: "2√",
      classList: ["math-operation"],
      type: "single-math-operation",
    },
    {
      value: "3√",
      classList: ["math-operation"],
      type: "single-math-operation",
    },
    {
      value: "√",
      classList: ["math-operation"],
      type: "double-math-operation",
    },
    {
      value: "x!",
      classList: ["math-operation"],
      type: "single-math-operation",
    },
  ],
  [
    { value: "mc", classList: ["memory"], type: "memory" },
    { value: "AC", classList: ["action", "AC"], type: "AC" },
    { value: "7", classList: [], type: "number" },
    { value: "4", classList: [], type: "number" },
    { value: "1", classList: [], type: "number" },
    { value: "undo", classList: [], type: "undo" },
  ],
  [
    { value: "m+", classList: ["memory"], type: "memory" },
    { value: "back", classList: ["action"], type: "backspace" },
    { value: "8", classList: [], type: "number" },
    { value: "5", classList: [], type: "number" },
    { value: "2", classList: [], type: "number" },
    { value: "0", classList: [], type: "number" },
  ],
  [
    { value: "m-", classList: ["memory"], type: "memory" },
    {
      value: "/",
      classList: ["math-operation"],
      type: "double-math-operation",
    },
    { value: "9", classList: [], type: "number" },
    { value: "6", classList: [], type: "number" },
    {
      value: "3",
      classList: [],
      type: "number",
    },
    { value: ".", classList: [], type: "number" },
  ],
  [
    { value: "ms", classList: ["memory"], type: "memory" },
    {
      value: "*",
      classList: ["math-operation"],
      type: "double-math-operation",
    },
    {
      value: "—",
      classList: ["math-operation"],
      type: "double-math-operation",
    },
    {
      value: "+",
      classList: ["math-operation", "height-1"],
      type: "double-math-operation",
    },
    {
      value: "=",
      classList: ["height-1", "equals"],
      type: "equals",
    },
  ],
];

const createButtons = () => {
  const template = document.createElement("div");
  template.classList.add("buttons");
  BUTTONS.forEach((elem) => {
    const column = document.createElement("div");
    column.classList.add("column");
    elem.forEach((buttonObj) => {
      column.appendChild(
        button(
          buttonObj.value,
          buttonObj.classList,
          buttonObj.type
        )
      );
    });
    template.appendChild(column);
  });
  return template;
};

const createInput = (id, value) => {
  const input = document.createElement("input");
  input.classList.add("input");
  input.disabled = true;
  input.id = id;
  input.value = value;
  return input;
};

const createInputBlock = () => {
  const inputBlock = document.createElement("div");
  inputBlock.classList.add("input-block");
  inputBlock.appendChild(createInput("calculations-input", 0));
  inputBlock.appendChild(createInput("result-input", 0));
  return inputBlock;
};

export default () => {
  const calculatorElem = document.createElement("div");
  calculatorElem.classList.add("calculator");
  calculatorElem.appendChild(createInputBlock());
  calculatorElem.appendChild(createButtons());
  return calculatorElem;
};
