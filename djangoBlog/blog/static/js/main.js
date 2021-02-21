
async function approval_check_api_call(comment_slug){
	let response = await fetch(`http://127.0.0.1:8000/comments_api/approval_check/${comment_slug}`)
	let data = await response.json()
	return data
}


function approval_check(){
	comment_slug = [...document.querySelectorAll(".approval_status")]
	// console.log(comment_slug)
	comment_slug.forEach((comment, index) => {
		// console.log(comment.classList[1])
		slug = comment.classList[1].split('-').pop()
	
		approval_check_api_call(slug)
		.then(data => {
			// console.log(data)
			if(data.approved){
				comment_slug[index].innerHTML = `Approved`;
			}
			else {
				comment_slug[index].innerHTML = `Not Approved`;	
			}
		})
	})
}

approval_check()


async function approval_update_api_call(comment_slug){
	let response = await fetch(`http://127.0.0.1:8000/comments_api/approval_update/${comment_slug}`)
	let data = await response.json()
	return data
}


function userLoggedIn(redirectTo){
	const user_id = JSON.parse(document.getElementById('user_id').textContent);
	if (user_id === null){
		window.location.href = `http://127.0.0.1:8000/login?next=${redirectTo}`;

	}
}

function postOwner() {
	const user_id = JSON.parse(document.getElementById('user_id').textContent);
	const post_user_id = JSON.parse(document.getElementById('post_user_id').textContent);

	if (user_id != post_user_id){
		window.location.href = `http://127.0.0.1:8000/error403`;
	}
	return true
}

document.addEventListener('click', (e) => {
	console.dir(e.target)



	if(e.target.classList.contains('approval_status')){

		userLoggedIn(e.target.baseURI)
		
		if(postOwner()){

			slug = e.target.classList[1].split('-').pop()
			approval_update_api_call(slug)
			.then(data => {
				// console.log(data)
				if (data.approved === false){
					e.target.innerHTML = 'Not Approved';
				}
				else{
					e.target.innerHTML = 'Approved';	
				}
			})
		}

	}
})




	
















