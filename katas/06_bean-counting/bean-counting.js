function countBs (string) {
  // return string.length - 1;
  // return string.split(string).length;
  return countChar(string, 'B');
}

  
function countChar (string, characterToCount) {
  return string.split(characterToCount).length - 1;
}

console.log(countBs("BBC"))
console.log(countChar("kakkerlak", "k"))