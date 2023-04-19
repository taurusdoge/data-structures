class Node {
  constructor(value, parentNode = null) {
    this.children = [];
    this.value = value;
    this.parent = parentNode;
  }

  addNode(value) {
    const segments = value.split("/");

    if (segments.length === 0) return;

    if (segments.length === 1) {
      const node = new Node(segments[0], this);
      this.addToChildren(node);
      return this.createNode(node, this.children.length - 1);
    }

    const existingChildNode = this.children.find(
      (child) => child.value === segments[0]
    );
    if (existingChildNode) {
      existingChildNode.addNode(segments.slice(1).join("/"));
    } else {
      const node = new Node(segments[0], this);
      node.addNode(segments.slice(1).join("/"));
      this.addToChildren(node);
      return this.createNode(node, this.children.length - 1);
    }
  }

  addToChildren(node) {
    this.children.push(node);
  }

  createNode(node, index) {
    return {
      node,
      index,
    };
  }

  removeNode(value) {
    const segments = value.split("/");

    if (segments.length === 0) return;

    if (segments.length === 1) {
      const existingNodeIndex = this.children.findIndex(
        (child) => child.value === segments[0]
      );

      if (existingNodeIndex < 0) {
        throw new Error("Could not find matching value!");
      }

      this.children.splice(existingNodeIndex, 1);
    }

    if (segments.length > 1) {
      const existingChildNode = this.children.find(
        (child) => child.value === segments[0]
      );

      if (!existingChildNode) {
        throw new Error(
          "Could not find matching path! Path segment: " + segments[0]
        );
      }

      existingChildNode.removeNode(segments.slice(1).join("/"));
    }
  }

  find(value) {
    console.log(this);
    // Depth-first
    // for (const child of this.children) {
    //   if (child.value === value) {
    //     return child;
    //   }

    //   const nestedChildNode = child.find(value);
    //   if (nestedChildNode) {
    //     return nestedChildNode;
    //   }
    // }

    // Breadth-first
    for (const child of this.children) {
      if (child.value === value) {
        return child;
      }
    }

    for (const child of this.children) {
      const nestedChildNode = child.find(value);
      if (nestedChildNode) {
        return nestedChildNode;
      }
    }
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  add(path) {
    this.root.addNode(path);
  }

  remove(path) {
    this.root.removeNode(path);
  }

  find(value) {
    if (this.root.value === value) {
      return this.root;
    }
    return this.root.find(value);
  }
}
