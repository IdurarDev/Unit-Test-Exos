function chess (size) {
  let result = '' 
  for (let i = 0; i <= size; i++) {
    for (let j = 0; j <= size; j++) {
      if ((i+j) % 2 == 0) {
        result += '#';
      } else {
        result += ' ';
      }
    }
    result += '\n'
  }
  return result
}
