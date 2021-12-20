export function loop (triangle) {
  triangle = ''
  let arr = []
  for (let i = 0; i < 7; i++) {
    triangle += '#'
    arr.push(triangle)
  }
  return arr
}
// export function loop (triangle) {
//   triangle = ''
//   for (let i = 0; i < 7; i++) {
//     console.log(triangle += '#')
//   }
// }