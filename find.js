module.exports = find

function find (arr, searchDetails) {
  var endobj = arr.find((x) => {
    var checkKey = Object.keys(searchDetails)
    return x[checkKey] === checkKey
  })
  return endobj
}
