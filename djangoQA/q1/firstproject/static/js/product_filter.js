const divFilteredProducts = document.querySelector('#filteredProducts')


function createElement(name, className, attr){
	const ele = document.createElement(name)
	if (className){
		if (Array.isArray.className){
			for(let i = 0; i< className.length; i++){
				ele.setAttribute(className[i], attr[i])
			}
		}
		else{
			ele.setAttribute(className, attr)
		}
	}
	return ele
}




function createCard(product, category){
	const divCol = createElement('div', 'class', 'col-4')
	const divCard = createElement('div', 'class', 'card')
	const divCardHeader = createElement('div', 'class', 'card-header')
	const divCardBody = createElement('div', 'class', 'card-body')

	const pHeader = createElement('p')
	const pHeaderText = document.createTextNode(product)
	const pBody = createElement('p')
	const pBodyText = document.createTextNode(category)

	pHeader.append(pHeaderText)
	pBody.append(pBodyText)

	divCardHeader.append(pHeader)
	divCardBody.append(pBody)

	divCard.append(divCardHeader, divCardBody)
	divCol.append(divCard)
	return divCol
}






function prodFilter(){
	// console.log(text)
	const checkBoxes = document.querySelectorAll('.prodCheckBox')
	// console.log(checkBoxes)

	const checks = []

	checkBoxes.forEach(check => {
		// console.log(check.checked, check.name)
		if (check.checked){
			checks.push(check.name)
		}
		// console.log(checks)
	})
	fetch(`${window.location.origin}/products_api/`,{
			method: 'POST',
			headers: {
				'Content-type':'application/json'
			},
			body: JSON.stringify(checks)
		})
		.then(res => res.json())
		.then(data => {
			// console.log(data)
			divFilteredProducts.innerHTML = ''
			data.forEach(product => {
				divFilteredProducts.append(createCard(product.name, product.category))
			})
				

		})
		.catch(err => console.log(err))

	// fetch(``)
}