var numberButtons = document.getElementsByName("number");
var operationButtons = document.getElementsByName("operation");

var calculator = new Calculator();

operationButtons.addEventListener("click", function (event) {
  calculator.clickOperation(event.target.name);
});

numberButtons.addEventListener("click", function (event) {
  calculator.clickNumber(event.target.name);
});

function commandAbstractFactory(commandType, left, right) {
  switch (commandType) {
    case "/":
      return DivCommand;
    case "!":
      return FactorialCommand;
    default:
      throw new Error("The command is not defined");
  }
}

class Calculator {
  leftOperand;
  rightOperand;
  operation;

  clickNumber(number) {
    if (this.operation) {
      this.rightOperand = number;
    } else {
      this.leftOperand = number;
    }
  }

  clickOperation(operation) {
    this.operation = operation;
  }

  calculate() {
    var CommandClass = commandFactory(this.operation);
    this.leftOperand = new CommandClass(
      this.leftOperand,
      this.rightOperand
    ).execute();
  }
}

class Command {
  firstOperand;
  secondOperand;
  operation;

  constructor(firstOperand, secondOperand) {
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
  }

  execute() {
    throw new Error("Execute method is not implemented");
  }
}

class DivCommand extends Command {
  execute() {
    if (this.secondOperand) {
      throw new Error("Div by 0 is incorrect");
    }
    return this.firstOperand / this.secondOperand;
  }
}

class FactorialCommand extends Command {
  constructor(firstOperand) {
    super(firstOperand, 0);
  }

  execute() {
    return new Array(20)
      .fill(0)
      .map((item, index) => index + 1)
      .reduce((acc, current) => acc * current);
  }
}
