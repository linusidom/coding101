const divFlteredProducts = document.querySelector('#filteredProducts')



function createElement(tag, className, attr){
	const ele = document.createElement(tag)

	if (className){
		if(Array.isArray(className)){
			for(let i = 0 ; i < className.length; i++){
				ele.setAttribute(className[i], attr[i])
			}
		}
		else{
			ele.setAttribute(className, attr)
		}
	}
	return ele
}


function displayCard(name, category){

	// const divRow = createElement('div', 'class', 'row')
	const divCol = createElement('div', 'class', 'col-4')
	const divCard = createElement('div', 'class', 'card')
	const divCardHeader = createElement('div', 'class', 'card-header')
	const divCardBody = createElement('div', 'class', 'card-body')

	const pHeader = createElement('p')
	const pHeaderText = document.createTextNode(name)

	const pBody = createElement('p')
	const pBodyText = document.createTextNode(category)

	pHeader.append(pHeaderText)
	pBody.append(pBodyText)

	divCardHeader.append(pHeader)
	divCardBody.append(pBody)

	divCard.append(divCardHeader, divCardBody)

	divCol.append(divCard)

	// divRow.append(divCol)


	return divCol


	// div.row
	// 	div.col-4
	// 	div.card
	// 	div.card-header
	// 		p.name
	// 	div.card-body
	// 		p.category




}



function checkFilter(){
	const checkBoxes = document.querySelectorAll('.prodCheck')
	// console.log(checkBoxes)

	const checked = []

	checkBoxes.forEach(checkbox => {
		// console.log(checkbox.checked, checkbox.name)
		if(checkbox.checked){
			checked.push(checkbox.name) 
		}
	})
	// console.log(checked)

	// remember to use the tilde sign
	fetch(`${window.location.origin}/products_api/`, {
		method: 'POST',
		headers: {
			'Content-type':'application/json'
		},
		body: JSON.stringify(checked)
	})
	.then(res => res.json())
	.then(data => {
		// console.log(data)
		divFlteredProducts.innerHTML = ''
		data.forEach(product => {
			divFlteredProducts.append(displayCard(product.name, product.category))
		})
	})
}






















