div = document.querySelector('.insertJavaScriptHere')
// console.log(div)
bookListViewButton = document.querySelector('.bookListViewButton')

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
	cardHeader.innerHTML = `<a href="#" onClick="bookDetailView(${data.id})">${data.title}
							Written By: ${data.author}`


	// create a card body
	let cardBody = document.createElement('div')
	cardBody.setAttribute('class', 'card-body')
	cardBody.innerHTML = `Published: ${data.published_date}
						  Number of Copies: ${data.number_of_copies}<br>`


	// Buttons - Update
	let updateButton = document.createElement('button')
	updateButton.innerText = 'Update'
	updateButton.setAttribute('class', 'btn btn-info mt-4 updateBookButton')
	updateButton.setAttribute('id', `updateBookID-${data.id}`)
	updateButton.setAttribute('data-bs-toggle', 'modal')
	updateButton.setAttribute('data-bs-target', '#updateBookModal')

	cardBody.append(updateButton)

	// append card header and card-body to the Card
	cardDiv.append(cardHeader)
	cardDiv.append(cardBody)


	return cardDiv
}


function pageReset(){
	div.innerHTML = ``
	bookListViewButton.style.display = 'none'
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
		pageReset()
		data.forEach(book => {
			let card = cardMaker(book)
			div.append(card)
		})

		})
}

document.addEventListener('DOMContentLoaded', (e)=>{
	bookListView()
})
	




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

		// console.log(data)
		
		pageReset()
		bookListView()

	})

})



// Detail View
async function detailBook(int){
	let response = await fetch(`http://127.0.0.1:8000/firstapp_api/book_detail_view/${int}`)
	let data = await response.json()
	// console.log(data)
	return data

}

function bookDetailView(int){
	// console.log(int)

	detailBook(int)
	.then(data => {
		// console.log(data)
		
		pageReset()
		
		bookListViewButton.style.display = '';

		let card = cardMaker(data)
		div.append(card)
		
	})
}




// Update View

async function updateBook(postData, int){
	let response = await fetch(`http://127.0.0.1:8000/firstapp_api/book_update_view/${int}`, {
		method: 'POST',
		headers: {
			"Content-type":"application/json",
		},
		body: JSON.stringify(postData),
	})
}

// Isolate the Button being clicked
document.addEventListener('click', (e) => {
	console.log(e.target.classList.contains('updateBookButton'))
	if (e.target.classList.contains('updateBookButton')){
		bookID = e.target.id.split('-').pop()
		
		console.log(bookID)

		// First we have to use the DetailView to pull the existing data

		detailBook(bookID)
		.then(data => {

			// Populate the fields in the modal

			document.querySelector('#update_book_title').value = data.title
			document.querySelector('#update_book_author').value = data.author
			document.querySelector('#update_book_published_date').value = data.published_date
			document.querySelector('#update_book_number_of_copies').value = data.number_of_copies

			document.querySelector('.book_update_save').addEventListener('click', (e) => {
				console.log(e)

				// Get the updated Fields from the Modal

				let book_title = document.querySelector('#update_book_title').value
				let book_author = document.querySelector('#update_book_author').value
				let book_published_date = document.querySelector('#update_book_published_date').value
				let book_number_of_copies = document.querySelector('#update_book_number_of_copies').value
				console.log(book_title, book_author, book_published_date, book_number_of_copies)

				book_data = {
					title: book_title,
					author: book_author,
					published_date: book_published_date,
					number_of_copies: book_number_of_copies
				}

				// Update the backend via the API

				updateBook(book_data, bookID)
				.then(data => {

					pageReset()
					bookListView()

				})
			})

		})

	}
})




















