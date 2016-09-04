// function callback(element, index, array) {
//   return console.log(`${index}: ${element}`)
// }

function iterativeLog(array) {
  array.forEach(function callback(element,index) {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var array = ["dog","cat","bear"]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
