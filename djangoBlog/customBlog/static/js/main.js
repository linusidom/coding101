



// console.log(window.location.origin)


async function approvalStatus(slug){
	// Check via the API what the approval status is for the comment
	let response = await fetch(`${window.location.origin}/comments_api/approval_status/${slug}`)
	let data = await response.json()
	return data
}

async function udpateApprovalStatus(slug){
	// Update the approval status to true or false
	const csrftoken = Cookies.get('csrftoken');

	let response = await fetch(`${window.location.origin}/comments_api/update_approval_status/${slug}`,{
		method: 'POST',
		headers: {
			"Content-type":"application/json",
			'X-CSRFToken': csrftoken,
		}
		})
	let data = await response.json()
	return data
}




// Click the check and change it to the X
// or change it back to the check
// document.querySelector('#approvalMark').addEventListener('click', (e) => {
// 	// console.log(e.target)

// 	target = e.target

// 	console.log(target.classList)
// 	if(target.classList.contains('fa-check')){

// 		// Check what the original state is and then populate the span

// 		target.classList.replace('fa-check', 'fa-times')
// 		target.classList.replace('text-success', 'text-danger')
// 	}
// 	else if(target.classList.contains('fa-times')){
// 		target.classList.replace('fa-times', 'fa-check')
// 		target.classList.replace('text-danger', 'text-success')	
// 	}

// })


// When the page Loads
document.addEventListener('DOMContentLoaded', (e) => {

	let approvalSpan = document.querySelectorAll('.approvalSpan')
	// console.log(approvalSpan)

	approvalSpan.forEach(span => {
		// console.log(span.getAttribute('data'))
		let slug = span.getAttribute('data')
		// console.log(slug)

		// I want to call the approval status
		approvalStatus(slug)
		.then(data => {
			// console.log(data)
			
			// and fill in the right symbol			
			if (data.approval_status === true){
				span.innerHTML = `<i id='approvalMark' class="fas fa-check fa-2x text-success" data="${data.slug}"></i>`
			}
			else if (data.approval_status === false){
				span.innerHTML = `<i id='approvalMark' class="fas fa-times fa-2x text-danger" data="${data.slug}"></i>`
			}
		})
	})

})


document.addEventListener('click', (e) => {
	// console.log(e.target.id)
	target = e.target



	if (target.id === 'approvalMark'){
		// console.log(target.getAttribute('data'))
		let slug = target.getAttribute('data')

		udpateApprovalStatus(slug)
		.then(data => {
			// console.log(data)
			// console.log(target)
			if (data.approval_status === true){
				target.classList.replace('fa-times', 'fa-check')
				target.classList.replace('text-danger', 'text-success')
			}
			else if (data.approval_status === false){
				target.classList.replace('fa-check', 'fa-times')
				target.classList.replace('text-success', 'text-danger')
			}

		})	



	}

})





















// <i id='approvalMark' class="fas fa-check fa-2x text-success"></i>
// <i id='approvalMark' class="fas fa-times fa-2x text-danger"></i>




























