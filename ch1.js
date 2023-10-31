// write a fucntion that takes an array of numbers and
// returns an array containing only the even numbers
exampleArray = [4, 3, 7, 10]
function findEvents(array) {
    evenNumbers = [] // create an empty array
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) { // if array[i] is even
            evenNumbers.push(array[i])
        }
    }
    return evenNumbers
}
console.log(findEvents(exampleArray))