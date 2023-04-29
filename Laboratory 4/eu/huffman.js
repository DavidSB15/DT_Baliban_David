function encode() {
  let inputString = document.getElementById("inputString").value;

  // Create frequency table
  let freq = {};
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString.charAt(i);
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }

  // Create Huffman tree
  let tree = createTree(freq);

  // Create code table
  let codeTable = {};
  createCodeTable(tree, "", codeTable);

  // Encode input string
  let encodedString = "";
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString.charAt(i);
    encodedString += codeTable[char];
  }

  // Create JSON object
  let jsonObject = {
    freq: freq,
    codeTable: codeTable,
    encodedString: encodedString,
  };

  // Display output
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = JSON.stringify(jsonObject, null, "\t");
  outputDiv.appendChild(createTreeVisualization(tree));
}

function createTree(freq) {
  let nodes = [];
  for (let char in freq) {
    nodes.push({ char: char, freq: freq[char], left: null, right: null });
  }

  while (nodes.length > 1) {
    nodes.sort(function (a, b) {
      return a.freq - b.freq;
    });

    let left = nodes.shift();
    let right = nodes.shift();
    let newNode = {
      char: null,
      freq: left.freq + right.freq,
      left: left,
      right: right,
    };
    nodes.push(newNode);
  }

  return nodes[0];
}

function createCodeTable(node, prefix, codeTable) {
  if (node.char) {
    codeTable[node.char] = prefix;
  } else {
    createCodeTable(node.left, prefix + "0", codeTable);
    createCodeTable(node.right, prefix + "1", codeTable);
  }
}

function createTreeVisualization(node) {
  if (!node) {
    return document.createElement("div");
  }

  let container = document.createElement("div");
  container.classList.add("node-container");

  let label = document.createElement("div");
  label.classList.add("node-label");
  label.innerHTML = node.char ? `${node.char} (${node.freq})` : node.freq;
  container.appendChild(label);

  let left = createTreeVisualization(node.left);
  if (left) {
    left.classList.add("node-left");
    container.appendChild(left);
  }

  let right = createTreeVisualization(node.right);
  if (right) {
    right.classList.add("node-right");
    container.appendChild(right);
  }

  return container;
}

