//? Class type Annotations
class User {
  msg: () => string;
  constructor(
    private username: string,
    protected salary: number,
    public readonly address: string
  ) {
    this.msg = function () {
      return `Hello ${this.username} And salar is $${this.salary}`;
    };
  }

  sayMsg() {
    return `Hello ${this.username} And salar is $${this.salary}`;
  }
  get name(): string {
    return this.username;
  }

  set name(value: string) {
    this.username = value;
  }
}

let userOne = new User("ziad", 5000, "alex");

// ==============================================
