div = document.querySelector('.insertJavaScriptHere')
// console.log(div)


// If we want to type text into JS
// We need to use Backticks, left of number 1 key
// div.innerHTML = `<h1>I was inserted by main.js</h1>`


// List View

fetch('http://127.0.0.1:8000/firstapp_api/book_list_view')
.then(response => response.json())
.then(data => {

	console.log(data)

	data.forEach(book => {


		div.innerHTML += `
			<div class="card my-3">		
				<div class="card-header">
					${book.title}
					Written By: ${book.author}
				</div>
				<div class="card-body">
					Published: ${book.published_date}
					Number of Copies: ${book.number_of_copies}

				</div>

			</div>
					`
	})

	})



