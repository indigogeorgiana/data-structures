module.exports = {
  getMatrix,
  updateMatrix
}

function getMatrix (n) {
  let newArr = []
  for (var i = 0; i < n; i++) {
    let newArr1 = []
    for (var j = 0; j < n; j++) {
      newArr1.push(0)
    }
    newArr.push(newArr1)
  }
  return newArr
}

function updateMatrix (matrix, coords, value) {
  matrix[coords[0]][coords[1]] = value
  return matrix
}
