const root = document.querySelector('#root')
root.setAttribute('class', 'container my-5 p-5')
root.setAttribute('style', 'border:2px solid blue')

// console.log(root)




function toggleForm(){
	// console.log('form clicked')

	const form = document.querySelector('#form')
	const button = document.querySelector('#toggleButton')
	// console.log(form.style.display)
	// console.log(button)

	if (form.style.display === 'none'){
		form.style.display = ''
		button.setAttribute('class', 'btn btn-danger')
		button.innerText = 'Close'
	}
	else{
		form.style.display = 'none'	
		button.setAttribute('class', 'btn btn-info')
		button.innerText = 'Add'
	}



}





function createElement(tag, className, attr){
	const ele = document.createElement(tag)

	if(className){

		// Check if className is an Array
		if(Array.isArray(className)){
			
			// For each element in className append class and attr
			for(let i = 0; i < className.length ; i++){
				ele.setAttribute(className[i], attr[i])
			}
		}
		else{
			ele.setAttribute(className, attr)		
		}

	}
	// console.log(ele)
	return ele
}



// root.append(createElement('div', ['class', 'style'], ['row', 'border 2px red']))

// console.log(root)


/*

// <div class="row">
// 	<div class="col">
// 		<h1>Task Tracker</h1>
// 	</div>
// 	<div class="col text-end">
// 		<button class='btn btn-info'>Add / Close</button>
// 	</div>
// </div>


*/

const divHeaderRow = createElement('div', 'class', 'row mt-5')
const divHeaderColOne = createElement('div', 'class', 'col')
const divHeaderColTwo = createElement('div', 'class', 'col text-end')

// Title
const h1Header = createElement('h1')
const h1HeaderText = document.createTextNode('Task Tracker')
h1Header.append(h1HeaderText)

divHeaderColOne.append(h1Header)


// Button
const buttonHeader = createElement('button', ['id','class', 'onClick'], ['toggleButton', 'btn btn-info', 'toggleForm()'])
const buttonHeaderText = document.createTextNode('Add')
buttonHeader.append(buttonHeaderText)
divHeaderColTwo.append(buttonHeader)

divHeaderRow.append(divHeaderColOne, divHeaderColTwo)

root.append(divHeaderRow)




/*

// <form class='input-group my-5'>
// 	<input type="text" placeholder="Enter a ToDo item" class='form-control'>
// 	<button class='btn btn-info'>Submit</button>
// </form>



*/


const form = createElement('form', ['id','class','style', 'onSubmit'], ['form', 'input-group my-5','display:none', 'onSubmit(event)'])
const formInput = createElement('input', ['id','placeholder', 'class'], ['formInput','Enter a toDo item', 'form-control'])

const formButton = createElement('button', 'class', 'btn btn-info')
const formButtonText = document.createTextNode('Submit')
formButton.append(formButtonText)

form.append(formInput, formButton)

root.append(form)


// console.dir(form)

// form.onsubmit = (event) => {
// 	// console.log('form Submitted')
// 	event.preventDefault()

// 	const formInput = document.querySelector('#formInput').value
// 	document.querySelector('#formInput').value = ''

// 	divDisplayCol.append(createItem(formInput))

// }


function onSubmit(event){

	// console.log('form Submitted')
	event.preventDefault()

	const formInput = document.querySelector('#formInput').value
	document.querySelector('#formInput').value = ''

	if (formInput !== ''){

		divDisplayCol.append(createItem(formInput))
	}
}







/*

// <div class="row">
	// <div class="col">
	// 	<!-- Item 1 -->
		// 	<div class="row  my-3">
		// 		<div class="col">
		// 			<h3>Item 1</h3>
		// 		</div>
		// 		<div class="col text-end">
		// 			<button class='btn btn-danger'>Delete</button>
		// 		</div>	
		// 	</div>

		// 	<!-- Item 2 -->
		// 	<div class="row  my-3">
		// 		<div class="col">
		// 			<h3>Item 2</h3>
		// 		</div>
		// 		<div class="col text-end">
		// 			<button class='btn btn-danger'>Delete</button>
		// 		</div>	
		// 	</div>

		// 	<!-- Item 3 -->
		// 	<div class="row my-3">
		// 		<div class="col">
		// 			<h3>Item 3</h3>
		// 		</div>
		// 		<div class="col text-end">
		// 			<button class='btn btn-danger'>Delete</button>
		// 		</div>	
		// 	</div>
    // 		<!-- End Col Div -->
	// 	</div>
	// 	<!-- End Row Div -->
// </div>
		


*/


function deleteItem(event){
	console.log(event.target.parentNode.parentNode)
	event.target.parentNode.parentNode.remove()
}




function createItem(text){

	const divRow = createElement('div', 'class', 'row my-3')
	const divColOne = createElement('div', 'class', 'col')
	const divColTwo = createElement('div','class', 'col text-end')



	const h4Item = createElement('h4')
	const h4ItemText = document.createTextNode(text)
	h4Item.append(h4ItemText)

	divColOne.append(h4Item)


	// Button
	const buttonItem = createElement('button', ['class', 'onClick'], ['btn btn-danger', 'deleteItem(event)'])
	const buttonItemText = document.createTextNode('Delete')
	buttonItem.append(buttonItemText)
	divColTwo.append(buttonItem)



	divRow.append(divColOne, divColTwo)
	return divRow

}



const divDisplayRow = createElement('div', 'class', 'row')
const divDisplayCol = createElement('div', 'class', 'col')

const item1 = createItem('Item 1')
const item2 = createItem('Item 2')
const item3 = createItem('Item 3')
divDisplayCol.append(item1, item2, item3)


divDisplayRow.append(divDisplayCol)



root.append(divDisplayRow)



























































