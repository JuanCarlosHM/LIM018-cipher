const uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// see:
// https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
function module(n, m) {
  return ((n % m) + m) % m;
}

const cipher = {
  encode: (offset, message) => {
    offset = parseInt(offset);
    let result = "";
    message = message.trim();

    for(let i = 0; i < message.length; i++)
    {
      let messageChar = message[i];

      if(uppercaseAlphabet.includes(messageChar))
      {
        result += uppercaseAlphabet[module( uppercaseAlphabet.indexOf(messageChar) + offset, 27)];
      }
      else if(lowercaseAlphabet.includes(messageChar))
      {
        result += lowercaseAlphabet[ module(lowercaseAlphabet.indexOf(messageChar) + offset, 27)]
      }
      else
      {
        result += messageChar;
      }
    }

    return result;

  },
  decode: (offset, string) => {
    return cipher.encode(offset * -1, string)
  }
};


export default cipher;
