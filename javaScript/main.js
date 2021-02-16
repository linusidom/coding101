
// console.log('hello World')
// Python (print('hello World'))

// Variables

// var - Use normally outside of any function

// const - Use for variables that I won't change

// let - use inside of a function

// var integer = 5
// console.log('Var',integer)

// let let_integer = 5
// console.log('Let',let_integer)

// Immutability - Cannot Change after creation
// const const_integer = 5
// console.log('Const',const_integer)


// integer = 6
// console.log('Changed Var', integer)

// let_integer = 6
// console.log('Changed Let',let_integer)

// // Not allowed to change a const variable after creation
// const_integer = 6
// console.log('Changed Const',const_integer)



// // Arrays - Lists in Python
// var var_array = [1,2,3];
// // list1 = [1,2,3] - Python Syntax
// console.log('Var Array', var_array);

// let let_array = [1,2,3];
// console.log('Let Array', let_array);

// const const_array = [1,2,3];
// console.log('Const Array', const_array);

// var_array.push(4);
// console.log('Var Array', var_array);

// let_array.push(4);
// console.log('Let Array', let_array);

// // I can change the contents of a const (dictionary or array)
// // But I cannot change the integer or string value of a const
// const_array.push(4);
// console.log('Const Array', const_array);

// Rules of Thumb - if you don't know...

// Var's are the default, can be used anywhere and are like
// traditional variables - strings and integers

// Let's should be used inside functions

// Const's should be used when we are using arrays, or dictionaries


// Conditionals

// var a = 1;
// var b = 2;

// Curly Braces indicate the start and finish
// Indentation does not matter
// Conditional has to be inside parentheses
// if ( a > b ){
// console.log(a);
// }
// else if (b < a){
// 	console.log(b)
// }
// // In python this is "elif"
// else {
// 	console.log('final statement')
// }


// For Loops

// for (start; stop; step)
// for i in range(start, stop, step)

// for (i = 1; i<=100;i+=3){
// 	console.log(i)
// }

// for i in range(1,100, 3):
// 	print(i)

// forEach

// const const_array = [1,2,3,4,5,6]

// const_array.forEach((value, index) => {
// 	console.log(value, index)
// })

// const_array.forEach(function(value, index){
// 	console.log(value, index)
// })




// Dictionaries
// const dictionary = {
// 	'title': 'Book Title',
// 	'author': 'Book Author',

// }

// console.log(dictionary['author'])



// Python
// for i in const_array:
// 	print(i)

// for index, value in enumerate(const_array):
// 		print(index, value)

// How to make API Calls

// Since JavaScript doesn't wait for calls before executing the next command
// We need a way to slow it down

// Promise Function

// I don't want to wait for the response, but I have to
// fetch('https://jsonplaceholder.typicode.com/todos/1')
	
// 	// Forces the command to wait for the response
//   .then(response => response.json())
//   // .then(response => console.log(response.json()))

//   // Final processing of the API response
//   .then(json => console.log(json))




// DOM Document Object Model Manipulation
// How to interact with the Browser

// Get by ID
// var div = document.querySelector('#myID')
// console.dir(div)
// console.log(div.innerHTML)
// div.innerText = 'Changed the ID Text'



// div.style.display = 'none';

// Style Sheet
// #myID {
// 	display: none;
// }



// const div = document.querySelector('.myClass')
// console.log(div)
// console.dir(div)
// div.innerText = 'Changed the Class Text'























