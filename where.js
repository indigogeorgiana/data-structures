module.exports = where

function where (arr, searchDetails) {
  let newArr = []
  for (let item in arr) {
    const x = Object.keys(searchDetails)
    console.log(x)
    for (var i = 0; i < x.length; i++) {
      //console.log(x[i])
      if (arr[item][x][thing] === searchDetails[thing]) {
        newArr.push(arr[item])
      }
    }
  }
  return newArr
}
