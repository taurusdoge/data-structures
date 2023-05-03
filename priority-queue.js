class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.first = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
    } else {
      let currentNode = this.first;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
  }
}

const queue = new PriorityQueue();
queue.insert(5);
queue.insert(10);
queue.insert(36);
console.dir(queue);
