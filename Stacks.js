class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }
  pop() {
    if (this.size() === 0)
      return "Stack is empty , cannot perform pop operation";
    this.stack.pop();
  }
  size() {
    return this.stack.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    if (this.size() === 0) return "Stack is empty";
    return this.stack[this.size() - 1];
  }

  printElement() {
    this.stack.forEach((element) => {
      console.log(element);
    });
  }
}

const stack = new Stack();

stack.push(121);
stack.push(124);
stack.push(122);
stack.push(142);

console.log(stack.printElement());
