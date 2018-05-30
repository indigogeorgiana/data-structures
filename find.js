module.exports = find

function find (arr, searchDetails) {
  for (let item in arr) {
    const x = Object.keys(searchDetails)
    if (arr[item][x] === searchDetails[x]) {
      return arr[item]
    }
  }
}
