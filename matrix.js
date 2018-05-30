module.exports = {
  getMatrix,
  updateMatrix
}

function getMatrix (n) {
  var mainArr = []
  for (var i = 0; i < n; i++) {
    var tempArr = []
    for (var j = 0; j < n; j++) {
      tempArr.push(0)
    }
    mainArr.push(tempArr)
  }
  return mainArr
}

function updateMatrix (matrix, coords, value) {
  // const ret = array.slice(0)
  //   ret[coords] = value
  //   return ret
  // var sndArr = matrix[coords[0]]
  // sndArr[coords[1]] = value
  // matrix[coords[0]] = sndArr
  matrix[coords[0]][coords[1]] = 1
  return matrix
  // return initialMatrix[coords[0][coords[1]] = value
}
