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
