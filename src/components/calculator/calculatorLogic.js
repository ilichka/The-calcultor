const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;
const pow = (x, y) => Math.pow(y, x);
const sign = (x) => (x[0] === "-" ? x.substr(1) : `-${x}`);

class Command {
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

export class AddCommand extends Command {
  constructor(value) {
    super(value);
  }

  execute(x, y) {
    return add(x, y);
  }
  undo(x, y) {
    // отмена действия
    return sub(x, y);
  }
}

export class SubCommand extends Command {
  constructor(value) {
    super(value);
  }

  execute(x, y) {
    return sub(x, y);
  }
  undo(x, y) {
    // отмена действия
    return add(x, y);
  }
}

export class MulCommand extends Command {
  constructor(value) {
    super(value);
  }

  execute(x, y) {
    return mul(x, y);
  }
  undo(x, y) {
    // отмена действия
    return div(x, y);
  }
}

export class DivCommand extends Command {
  constructor(value) {
    super(value);
  }

  execute(x, y) {
    return div(x, y);
  }
  undo(x, y) {
    // отмена действия
    return mul(x, y);
  }
}

export class PercentCommand extends Command {
  constructor(value) {
    super(value);
  }

  execute(x) {
    return div(x, 100);
  }
  undo(x, y) {
    // отмена действия
    return mul(x, 100);
  }
}

export class TenInDegree extends Command {
  constructor(value) {
    super(value);
  }

  execute(x) {
    return pow(x, 10);
  }
  undo(x, y) {
    // отмена действия
    return pow(1 / x, 10);
  }
}

export class OneDivValue extends Command {
  constructor(value) {
    super(value);
  }

  execute(x) {
    return div(1, x);
  }
  undo(x, y) {
    // отмена действия
    return div(1, x);
  }
}

export class ChangeSign extends Command {
  constructor(value) {
    super(value);
  }

  execute(x) {
    console.log("sign", sign(x));
    return sign(String(x));
  }
  undo(x) {
    // отмена действия
    return sign(String(x));
  }
}

export class PowIn2 extends Command {
  constructor(value) {
    super(value);
  }

  execute(x) {
    return pow(2, x);
  }
  undo(x) {
    // отмена действия
    return pow(1 / 2, x);
  }
}

export class PowIn3 extends Command {
  constructor(value) {
    super(value);
  }

  execute(x) {
    return pow(3, x);
  }
  undo(x) {
    // отмена действия
    return pow(1 / 3, x);
  }
}

export class PowInY extends Command {
  constructor(value) {
    super(value);
  }

  execute(x, y) {
    return pow(y, x);
  }
  undo(x, y) {
    // отмена действия
    return pow(1 / y, x);
  }
}

export class RootIn2 extends Command {
  constructor(value) {
    super(value);
  }

  execute(x) {
    return pow(1 / 2, x);
  }
  undo(x) {
    // отмена действия
    return pow(2, x);
  }
}

export class RootIn3 extends Command {
  constructor(value) {
    super(value);
  }

  execute(x) {
    return pow(1 / 3, x);
  }
  undo(x) {
    // отмена действия
    return pow(3, x);
  }
}

export class RootInY extends Command {
  constructor(value) {
    super(value);
  }

  execute(x, y) {
    return pow(1 / x, y);
  }
  undo(x, y) {
    // отмена действия
    return pow(x, y);
  }
}

export class FactorialCommand extends Command {
  constructor(value) {
    super(value);
  }

  execute(x) {
    let num = 1;
    for (let i = 1; i <= x; i++) {
      num *= i;
    }
    return num;
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
