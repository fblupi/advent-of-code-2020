const fs = require('fs');

function processInput(input) {
  const linesProcessed = new Set();
  let acc = 0;
  let line = 0;
  while (!linesProcessed.has(line)) {
    linesProcessed.add(line);

    const content = input[line];
    const action = content.substring(0, 3);
    const number = parseInt(content.substring(4));
  
    switch (action) {
      case 'acc':
        acc += number;
        line++;
        break;
      case 'jmp':
        line += number;
        break;
      case 'nop':
        line++;
        break;
    }
  }

  return acc;
}

const input = fs.readFileSync('input.txt').toString().split("\n");
console.log(processInput(input));
