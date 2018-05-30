module.exports = where

function where (arr, searchDetails) {
  let newArr = []
  let findItem
  for (let item in arr) {
    findItem = true
    // x = searchDetails keys
    const x = Object.keys(searchDetails)
    // console.log(x)
    if (x.length < 2) {
      if (arr[item][x] === searchDetails[x]) {
        newArr.push(arr[item])
      }
    } else {
      // y = keys in each object of the array
      const y = Object.keys(arr[item])
      for (let v = 0; v < x.length; v++) {
        console.log(y[v])      
        if (y[v] !== x[v]) {
          findItem = false;
        }
      }
      if (findItem === true) {
        newArr.push(arr[item])
      }
    }
  }
  return newArr
}
