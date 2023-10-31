// write a function that takes an array of
// numbers and returns the largest number.
exempleArray = [4, 8, 3, 10];
function findLargest(arr){
    let largestSofar = arr[0] // we need to remember what the largest number we've seen is
    for(let i=0; i < arr.length; i++){ // loop to let us look at each number
        if(arr[i] > largestSofar){ // if the number we're looking at is larger
            largestSofar = arr[i] // start keeping track of that number instead
        }
    }
}