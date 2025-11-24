import { equals } from "./utils/array.utils.ts";

function encode(strs: string[]) : string {
  let retVal: string = "";
  for (const str of strs) {
    retVal += str.length + '#' + str;
  }
  return retVal;
}

function decode(str: string) : string[] {
  let retVal = [];
  let i = 0;
  while (i < str.length) {
    let digits = '';
    let ii = i;
    while (str[ii] !== '#') {
        digits += str[ii];
        ii++
    };
    const start = ii + 1;
    const end = start + parseInt(digits);
    retVal.push(str.substring(start, end));
    i = end;
  }
  return retVal;
}

const test1 = ["neet","code","love","you"];
const test2 = ["we","say",":","yes"];

console.assert(equals(decode(encode(test1)), test1));
console.assert(equals(decode(encode(test2)), test2));