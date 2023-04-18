const word = "academind";

function findFirstRepUnoptimal(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return str[i];
      }
    }
  }
}

function findFirstRep(str) {
  const table = {};

  for (const char of str) {
    if (table[char]) {
      return char;
    }

    table[char] = 1;
  }
}
