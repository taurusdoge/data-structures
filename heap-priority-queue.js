class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.heapElements = [];
  }

  insert(value, priority) {
    const newNode = new Node(value, priority);
    this.heapElements.push(newNode);
    let currentElementIndex = this.heapElements.length - 1;
    let parentElementIndex = Math.floor((currentElementIndex + 1) / 2 - 1);

    while (
      parentElementIndex >= 0 &&
      this.heapElements[currentElementIndex].priority >
        this.heapElements[parentElementIndex].priority
    ) {
      const parentElement = this.heapElements[parentElementIndex];
      this.heapElements[parentElementIndex] = newNode;
      this.heapElements[currentElementIndex] = parentElement;
      currentElementIndex = parentElementIndex;
      parentElementIndex = Math.floor((currentElementIndex + 1) / 2 - 1);
    }
  }

  process() {
    if (this.heapElements.length === 0) return null;
    if (this.heapElements.length === 1) return this.heapElements.pop();

    const topElement = this.heapElements[0];
    this.heapElements[0] = this.heapElements.pop();
    let currentElementIndex = 0;
    let leftChildIndex = currentElementIndex + 1;
    let rightChildIndex = currentElementIndex + 2;
    let childElementIndex =
      this.heapElements[rightChildIndex] &&
      this.heapElements[rightChildIndex].priority >=
        this.heapElements[leftChildIndex].priority
        ? rightChildIndex
        : leftChildIndex;

    while (
      this.heapElements[childElementIndex] &&
      this.heapElements[currentElementIndex].priority <=
        this.heapElements[childElementIndex].priority
    ) {
      const currentNode = this.heapElements[currentElementIndex];
      const currentChildNode = this.heapElements[childElementIndex];
      this.heapElements[childElementIndex] = currentNode;
      this.heapElements[currentElementIndex] = currentChildNode;
    }

    return topElement;
  }
}

const priorityQueue = new PriorityQueue();

priorityQueue.insert("clean the room", 1);
priorityQueue.insert("Do taxes", 53);
priorityQueue.insert("learn coding", 500);

console.log(priorityQueue.process());
console.dir(priorityQueue);
