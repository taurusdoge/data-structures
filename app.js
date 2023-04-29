class TrieNode {
  constructor(value) {
    this.value = value;
    this.children = Array(26);
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  insert(key, value) {
    let node = this.root;
    for (let i = 0; i < key.length; i++) {
      const alphabetIndex = key[i].charCodeAt(0) - 97;
      if (!node.children[alphabetIndex]) {
        const newNode = new TrieNode();
        node.children[alphabetIndex] = newNode;
      }
      node = node.children[alphabetIndex];
    }
    node.value = value;
  }
}

const trie = new Trie();

trie.insert("age", 31);
trie.insert("name", "Max");
trie.insert("names", ["Max", "Manu"]);

console.dir(trie);
