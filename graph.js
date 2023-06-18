class Graph {
  constructor() {
    this.nodes = {};
    this.edges = {};
  }

  addNode(identifier, value) {
    if (this.nodes[identifier]) {
      throw new Error("Node already exists");
    }
    this.nodes[identifier] = value;
  }

  addEdge(startNode, endNode) {
    if (!this.nodes[startNode] || !this.nodes[endNode]) {
      throw new Error("Start or end node does not exist");
    }

    if (
      this.edges[startNode] &&
      this.edges[startNode].indexOf(endNode) === -1
    ) {
      this.edges[startNode].push(endNode);
    } else {
      this.edges[startNode] = [endNode];
    }
  }

  hasEdge(startNode, endNode) {
    if (!this.edges[startNode]) {
      return false;
    }
    return this.edges[startNode].indexOf(endNode) > -1;
  }

  getAllEdges(node) {
    return this.edges[node];
  }
}

const graph = new Graph();

graph.addNode(1, "Max");
graph.addNode(2, "Manuel");
graph.addNode(3, "Jules");

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(3, 2);

console.log(graph.hasEdge(3, 2));
console.log(graph.hasEdge(2, 1));
console.log(graph.getAllEdges(1));
console.log(graph.getAllEdges(2));
console.log(graph.getAllEdges(3));

console.dir(graph);
