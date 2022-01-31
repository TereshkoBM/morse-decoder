const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here  
  let result = "";
  for (let i = 0, count = expr.length / 10; i < count; i++) {
    let codeBool = expr.slice(i * 10, (i + 1) * 10);
    if (codeBool === "**********") {
      result += " ";
    } else {
      let codeMorse = "";
      for (let j = 0; j < 5; j++) {
        if (codeBool[2 * j] + codeBool[2 * j + 1] === "10") {
          codeMorse += ".";
        } else if (codeBool[2 * j] + codeBool[2 * j + 1] === "11") {
          codeMorse += "-";
        }
      }
      result += MORSE_TABLE[codeMorse];
    }
  }
  return result;
}

module.exports = {
  decode,
};
