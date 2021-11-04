import "./index.scss";
import button from "../button/button";
import Calculator from "./calculatorLogic";
import {
  AddCommand,
  SubCommand,
  DivCommand,
  MulCommand,
  PercentCommand,
  TenInDegree,
  OneDivValue,
  ChangeSign,
  PowIn2,
  PowIn3,
  PowInY,
  RootIn2,
  RootIn3,
  RootInY,
  FactorialCommand,
} from "./calculatorCommands";

export const calculator = new Calculator();

const BUTTONS = [
  [
    {
      value: "%",
      classList: ["math-operation"],
      command: (value) => new PercentCommand(value),
      type: "solo-math-operation",
    },
    {
      value: "+/-",
      classList: ["math-operation"],
      command: (value) => new ChangeSign(value),
      type: "solo-math-operation",
    },
    {
      value: "x^2",
      classList: ["math-operation"],
      command: (value) => new PowIn2(value),
      type: "solo-math-operation",
    },
    {
      value: "x^3",
      classList: ["math-operation"],
      command: (value) => new PowIn3(value),
      type: "solo-math-operation",
    },
    {
      value: "^",
      classList: ["math-operation"],
      command: (value) => new PowInY(value),
      type: "math-operation",
    },
  ],
  [
    {
      value: "10^y",
      classList: ["math-operation"],
      command: (value) => new TenInDegree(value),
      type: "solo-math-operation",
    },
    {
      value: "1/x",
      classList: ["math-operation"],
      command: (value) => new OneDivValue(value),
      type: "solo-math-operation",
    },
    {
      value: "2√",
      classList: ["math-operation"],
      command: (value) => new RootIn2(value),
      type: "solo-math-operation",
    },
    {
      value: "3√",
      classList: ["math-operation"],
      command: (value) => new RootIn3(value),
      type: "solo-math-operation",
    },
    {
      value: "√",
      classList: ["math-operation"],
      command: (value) => new RootInY(value),
      type: "math-operation",
    },
    {
      value: "x!",
      classList: ["math-operation"],
      command: (value) => new FactorialCommand(value),
      type: "solo-math-operation",
    },
  ],
  [
    { value: "mc", classList: ["memory"], type: "memory" },
    { value: "AC", classList: ["action"], type: "AC" },
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
      command: (value) => new DivCommand(value),
      type: "math-operation",
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
    { value: "mr", classList: ["memory"], type: "memory" },
    {
      value: "*",
      classList: ["math-operation"],
      command: (value) => new MulCommand(value),
      type: "math-operation",
    },
    {
      value: "-",
      classList: ["math-operation"],
      command: (value) => new SubCommand(value),
      type: "math-operation",
    },
    {
      value: "+",
      classList: ["math-operation", "height-1"],
      command: (value) => new AddCommand(value),
      type: "math-operation",
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
          buttonObj.command,
          buttonObj.updateInput,
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
