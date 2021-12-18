// ```
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// ```

function chess (size) {
  let r = '' 
  for (let i = 0; i <= size; i++) {
    for (let j = 0; j <= size; j++) {
      if ((i+j) % 2 == 0) {
        r += '#';
      } else {
        r += ' ';
      }
    }
    r += '\n'
  }
  return r
}

chess(8)
