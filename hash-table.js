class HashTable {
  constructor() {
    this.size = 100;
    this.buckets = Array(100).fill(null);
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
    for (let i = keyHash; i < this.buckets.length; i++) {
      if (!this.buckets[i]) continue;

      if (this.buckets[i].key === key) {
        return this.buckets[i].value;
      }
    }

    return undefined;
  }

  set(key, value) {
    let keyHash = this.hash(key);

    if (this.buckets[keyHash] === null || this.buckets[keyHash].key === key) {
      this.buckets[keyHash] = { key, value };
    } else {
      while (this.buckets[keyHash] !== null) {
        keyHash++;
      }

      this.buckets[keyHash] = { key, value };
    }
  }

  showInfo() {
    for (const key in this.buckets) {
      if (this.buckets[key] !== null) {
        console.log(key, this.buckets[key]);
      }
    }
  }
}
