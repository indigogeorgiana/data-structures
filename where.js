module.exports = where

function where (arr, searchDetails){
  let newArr = []
  const searchKeys = Object.keys(searchDetails)
  for (let i = 0; i < arr.length; i++){
    let matched = false
    const arrItem = arr[i]
    for (let j = 0; j < searchKeys.length; j++){
      const searchKey = searchKeys[j]
      const searchValue = searchDetails[searchKey]
      const itemValue = arrItem[searchKey]
      //console.log(arr[i][searchKeys[j]], searchDetails[searchKeys[j]])
      if (itemValue === searchValue) {
        //console.log("matched")
        matched = true
      }
      else {
        //console.log ("did not match")
        matched = false
        break
      }
    }
    if (matched){
      newArr.push(arrItem)
    }
  }
  return newArr
}






function whereold (arr, searchDetails) {
  let newArr = []
  let findItem
  for (let index in arr) {
    findItem = true
    const item = arr[index]
    const searchDetailsKeys = Object.keys(searchDetails)
    //console.log(index)
    if (searchDetailsKeys.length < 2) {
      if (item[searchDetailsKeys] === searchDetails[searchDetailsKeys]) {
        newArr.push(item)
      }
    } else {
      // y = keys in each object of the array
      const objectKeys = Object.keys(item)
      for (let v = 0; v < searchDetailsKeys.length; v++) {
        //console.log(objectKeys[v])      
        if (objectKeys[v] !== searchDetailsKeys[v]) {
          findItem = false;
        }
      }
      if (findItem === true) {
        newArr.push(item)
      }
    }
  }
  return newArr
}
