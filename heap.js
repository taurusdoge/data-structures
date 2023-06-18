const exampleHeap = [250, 197, 85, 101, 12, 40, 15];
Math.floor((6 + 1) / 2 - 1); // parent of 15

class MaxHeap {
  constructor() {
    this.heapElements = [];
  }

  insert(value) {
    this.heapElements.push(value);
    let currentElementIndex = this.heapElements.length - 1;
    let parentElementIndex = Math.floor((currentElementIndex + 1) / 2 - 1);

    while (
      parentElementIndex >= 0 &&
      this.heapElements[currentElementIndex] >
        this.heapElements[parentElementIndex]
    ) {
      const parentElement = this.heapElements[parentElementIndex];
      this.heapElements[parentElementIndex] = value;
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
      this.heapElements[rightChildIndex] >= this.heapElements[leftChildIndex]
        ? rightChildIndex
        : leftChildIndex;

    while (
      this.heapElements[childElementIndex] &&
      this.heapElements[currentElementIndex] <=
        this.heapElements[childElementIndex]
    ) {
      const currentNode = this.heapElements[currentElementIndex];
      const currentChildNode = this.heapElements[childElementIndex];
      this.heapElements[childElementIndex] = currentNode;
      this.heapElements[currentElementIndex] = currentChildNode;
    }

    return topElement;
  }
}

const heap = new MaxHeap();

heap.insert(40);
heap.insert(85);
heap.insert(197);
heap.insert(15);
heap.insert(12);
heap.insert(101);
heap.insert(250);

console.dir(heap);
heap.process();
console.dir(heap);
