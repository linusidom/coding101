
const arr = [1,2,3,4,5,6,7,8,9,10]

// Filter
// Filter is used to return only what is true or what matches our condition
// get the even number
const evens = arr.filter((number) => number % 2 == 0)
// console.log('Filter even numbers', evens)

const odd = arr.filter((number) => number % 2 == 1)
// console.log('Filter odd numbers',odd)


// Map
// Map is used to apply something to every element
const newArr = arr.map((number) => number * 2)
// console.log('For every number multiply by 2', newArr)



// Ternary Operator
// Ternary Operator is used for returning case when true or case when false

function ternary(number){

    // if (number % 2 == 0){
    //     return 'Even'
    // }
    // else{
    //     return 'Odd'
    // }

    return number % 2 == 0 ? 'Even and True' : 'Odd and False'
}

console.log(ternary(6))