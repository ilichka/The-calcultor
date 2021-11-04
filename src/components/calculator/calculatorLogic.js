export class Command {
  constructor(value) {
    this.value = value;
  }

  execute() {
    throw new Error(
      `Не описан метод Execute() в классе ${this.constructor.name}`
    );
  }
  undo() {
    // отмена действия
    throw new Error(
      `Не описан метод Execute() в классе ${this.constructor.name}`
    );
  }
}

class Calculator {
  constructor() {
    this.current = 0;
    this.commands = [];
    this.currentOpertation = null;
    this.currentOperand = "";
    this.memory = 0;
  }

  setCurrentOperation = (command) => {
    this.currentOpertation = command;
  };

  getCurrentOperation = () => this.currentOpertation;

  updateOperand = (value) => {
    this.currentOperand += value;
  };

  setOperand = (value) => {
    this.currentOperand = value;
  };

  clearCommands = () => {
    this.commands = [];
  };

  updateCurrent = (value) => {
    if (this.current === 0 && value!== ".") {
      this.current += +value;
    } else {
      this.current += value;
    }
    console.log(this.current);
  };

  setCurrent = (value) => {
    this.current = value;
  };

  updateMemory = (value, type) => {
    console.log(this.current, +value);
    switch (type) {
      case "decrease":
        this.memory -= +value;
        break;
      case "increase":
        this.memory += +value;
        break;
      case "set":
        this.memory = +value;
        break;
    }
    console.log(this.memory);
  };

  getCurrentOperand = () => this.currentOperand;

  execute = (command) => {
    console.log(this.current, +this.currentOperand);
    this.current = command.execute(+this.current, +this.currentOperand);
    this.currentOperand = "";
    console.log(+this.current, this.currentOperand);
    console.log("executed command", command);
    this.commands.push(command);
  };

  undo = () => {
    if (!this.commands.length) {
      console.log(`невозможно отменить`);
    } else {
      console.log(this.commands, this.current);
      const command = this.commands.pop();
      this.current = command.undo(this.current, command.value);
    }
  };

  getCurrentValue = () => this.current;
}

export default Calculator;
