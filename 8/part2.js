const fs = require('fs');

function processInput(input) {
  for (i = 0; i < input.length; i++) {
    const linesProcessed = new Set();
    let acc = 0;
    let line = 0;
    while (!linesProcessed.has(line)) {
      linesProcessed.add(line);

      const content = input[line];

      let action = content.substring(0, 3);
      const number = parseInt(content.substring(4));

      if (line === i) {
        action = action === 'jmp' ? 'nop' : action === 'nop' ? 'jmp' : action;
      }

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

      if (line >= input.length) {
        return acc;
      }
    }

  }
  return null;
}

const input = fs.readFileSync('input.txt').toString().split("\n");
console.log(processInput(input));
