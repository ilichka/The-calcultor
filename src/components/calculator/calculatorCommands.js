import {Command} from "./calculatorLogic";

const add = (x, y) => +x + +y;
const sub = (x, y) => +x - +y;
const mul = (x, y) => +x * +y;
const div = (x, y) => +x / +y;
const pow = (x, y) => Math.pow(+y, +x);
const sign = (x) => (x[0] === "-" ? x.substr(1) : `-${x}`);

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