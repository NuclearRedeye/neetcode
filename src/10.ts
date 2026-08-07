function isPalindrome(s: string): boolean {
  let retVal = true;
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      retVal = false;
      break;
    }
    left++;
    right--;
  }
  return retVal;
}

console.assert(isPalindrome("Was it a car or a cat I saw?") === true);
console.assert(isPalindrome("tab a cat") === false);
console.assert(isPalindrome("") === true);
console.assert(isPalindrome("a") === true);
console.assert(isPalindrome("racecar") === true);
console.assert(isPalindrome("ab") === false);