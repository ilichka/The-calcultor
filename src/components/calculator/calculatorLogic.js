export class SingleOperandCommand {
  constructor(leftOperand) {
    this.leftOperand = leftOperand;
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

export class DoubleOperandCommand extends SingleOperandCommand {
  constructor(leftOperand, rightOperand) {
    super(leftOperand);
    this.rightOperand = rightOperand;
  }
}

class Calculator {
  constructor() {
    this.current = 0;
    this.commands = [];
    this.memory = 0;
    this.undoRow = "";
    this.memory = 0;
  }

  getCurrentValue = () => this.current;

  setCurrentValue = (value) => {
    this.current = value;
  }

  getUndoRow = () => this.undoRow;

  execute = (command) => {
    this.current = command.execute();
    this.commands.push(command);
  };

  updateMemory = (value, type) => {
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
  };

  undo = () => {
    if (!this.commands.length) {
      console.log(`невозможно отменить`);
    } else {
      const command = this.commands.pop();
      this.current = command.execute();
      this.undoRow = command.undoRow;
    }
  };
}

export default Calculator;
