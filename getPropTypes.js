module.exports = getPropTypes

function getPropTypes (obj) {
  let newArr = []
  for (key in obj) {
    newArr.push(typeof obj[key])
  }
  return newArr
}
