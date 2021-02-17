div = document.querySelector('.insertJavaScriptHere')
// console.log(div)


// If we want to type text into JS
// We need to use Backticks, left of number 1 key
// div.innerHTML = `<h1>I was inserted by main.js</h1>`


// List View

// fetch('http://127.0.0.1:8000/firstapp_api/book_list_view')
// .then(response => response.json())
// .then(data => {

// 	console.log(data)

// 	data.forEach(book => {


// 		div.innerHTML += `
// 			<div class="card my-3">		
// 				<div class="card-header">
// 					${book.title}
// 					Written By: ${book.author}
// 				</div>
// 				<div class="card-body">
// 					Published: ${book.published_date}
// 					Number of Copies: ${book.number_of_copies}

// 				</div>

// 			</div>
// 					`
// 	})

// 	})


// Async allows me to run functions in parallel

// Function to create web page elements
function cardMaker(data){

	// Create a card
	let cardDiv = document.createElement('div')
	cardDiv.setAttribute('class', 'card my-5')


	// create a card header
	let cardHeader = document.createElement('div')
	cardHeader.setAttribute('class', 'card-header')
	cardHeader.innerHTML = `${data.title}
							Written By: ${data.author}`


	// create a card body
	let cardBody = document.createElement('div')
	cardBody.setAttribute('class', 'card-body')
	cardBody.innerHTML = `Published: ${data.published_date}
						  Number of Copies: ${data.number_of_copies}`

	// append card header and card-body to the Card
	cardDiv.append(cardHeader)
	cardDiv.append(cardBody)


	return cardDiv
}

// Call information from the API
async function listBook(){
	let response = await fetch('http://127.0.0.1:8000/firstapp_api/book_list_view')
	let data = await response.json()
	return data
}

// Call the function to do something with the data
function bookListView(){
	listBook()
	.then(data => {
		console.log(data)
		data.forEach(book => {
			let card = cardMaker(book)
			div.append(card)
		})

		})
}

bookListView()




// Create Book Functionality


async function createBook(postData){
	let response = await fetch('http://127.0.0.1:8000/firstapp_api/book_create_view', {
		method: 'POST',
		headers: {
			"Content-type":"application/json",
		},
		body: JSON.stringify(postData),
	})

	let data = await response

	return data
}

// Capture activity or actions on page
document.querySelector('.book_create_save').addEventListener('click', (e) => {
	console.log(e)

	let book_title = document.querySelector('#book_title').value
	let book_author = document.querySelector('#book_author').value
	let book_published_date = document.querySelector('#book_published_date').value
	let book_number_of_copies = document.querySelector('#book_number_of_copies').value
	console.log(book_title, book_author, book_published_date, book_number_of_copies)

	book_data = {
		title: book_title,
		author: book_author,
		published_date: book_published_date,
		number_of_copies: book_number_of_copies
	}

	createBook(book_data)
	.then(data => {

		console.log(data)
		
		div.innerHTML = ``

		bookListView()

	})



})


























