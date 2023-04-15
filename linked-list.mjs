export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = {
      value,
      next: null,
    };

    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }
  }

  prepend(value) {
    const newNode = {
      value,
      next: this.head,
    };

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  delete(value) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = currentNode;
    }
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedNode = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedNode;
  }

  find(value) {
    if (!this.head) {
      return;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return;
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);

    if (existingNode) {
      const newNode = {
        value,
        next: existingNode.next,
      };

      existingNode.next = newNode;
    }
  }

  toArray() {
    const elements = [];

    let currentNode = this.head;
    while (currentNode) {
      elements.push(currentNode);

      currentNode = currentNode.next;
    }

    return elements;
  }
}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append("hello there");
linkedList1.append(true);
linkedList1.append(true);
linkedList1.append(131.23);
linkedList1.prepend("first!!!");
linkedList1.prepend("first!!!");

console.log(linkedList1.toArray());

linkedList1.delete(true);
linkedList1.delete("first!!!");
linkedList1.delete(131.23);

console.log(linkedList1.toArray());
console.log(linkedList1.find(1));
console.log(linkedList1.find("hello there"));

linkedList1.insertAfter("new value", 1);
console.log(linkedList1.toArray());
