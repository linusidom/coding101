






async function approvalStatus(slug){
	// Check via the API what the approval status is for the comment

	let response = await fetch(`http://127.0.0.1:8000/comments_api/approval_status/${slug}`)
	let data = await response.json()
	return data
}

function changeApprovalStatus(){
	// Update the approval status to true or false
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
		console.log(slug)
		approvalStatus(slug)
		.then(data => {
			console.log(data)
			if (data.approval_status === true){
				span.innerHTML = `<i id='approvalMark' class="fas fa-check fa-2x text-success"></i>`
			}
			else if (data.approval_status === false){
				span.innerHTML = `<i id='approvalMark' class="fas fa-times fa-2x text-danger"></i>`
			}
		})
	})

})

// I want to call the approval status
// and fill in the right symbol


// <i id='approvalMark' class="fas fa-check fa-2x text-success"></i>
// <i id='approvalMark' class="fas fa-times fa-2x text-danger"></i>




























