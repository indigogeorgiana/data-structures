module.exports = getPropTypes

function getPropTypes (obj) {
  var newarr = []
  for ( i in obj) {
    newarr.push(typeof obj[i])
  }
  return newarr
}
