class HashTable {
  constructor() {
    this.size = 16;
    this.buckets = Array(16).fill(null);
  }

  hash(key) {
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0);
    }

    return hash % this.size;
  }

  get(key) {
    const keyHash = this.hash(key);

    return this.buckets[keyHash];
  }

  set(key, value) {
    const keyHash = this.hash(key);

    this.buckets[keyHash] = value;
  }

  showInfo() {
    for (const key in this.buckets) {
      if (this.buckets[key] !== null) {
        console.log(key, this.buckets[key]);
      }
    }
  }
}
