class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toArray() {
    return this.items.slice();
  }
}

const stack = new Stack();
stack.push("first item");
stack.push("task");
stack.push("third");
console.log("last elem: ", stack.pop());

console.log(stack.toArray());
