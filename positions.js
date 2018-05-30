module.exports = {
  getFirst,
  getLast
}
function getFirst (arr) {
  return arr[0]
}

function getLast (arr) {
  let last = arr.pop()
  return last
}
