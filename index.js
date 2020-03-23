// define a function doToElementsInArray() that accepts two arguments:
//  an array and a callback function to pass to .forEach()
// doToElementsInArray() invokes the passed-in callback function on every element
//  of the passed-in array using Array.prototype.forEach():

function doToElementsInArray(array, changeCompletely) {
  array.forEach(changeCompletely)
}

// changeCompletely() is defined
// changeCompletely() alters every element in an array when used in conjunction with
// Array.prototype.forEach()
function changeCompletely(element, index, array) {
  array[index] = `Mmmm, ${element}!!!`
}
