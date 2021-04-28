console.log('hello world')

const user_id = JSON.parse(document.getElementById('user_id').textContent);
const course_id = JSON.parse(document.getElementById('course_id').textContent);

const certDiv = document.querySelector('.certDiv')


console.log('User ID',user_id)
console.log('Course ID', course_id)


// Check the current status of all the lessons

async function getLessons(user_id, course_id){
	let response = await fetch(`${window.location.origin}/lessons_api/lessons/${user_id}/${course_id}`)
	let data = await response.json()
	return data
}


function pageLoad(user_id, course_id){
	getLessons(user_id, course_id)
	.then(data => {
		// console.log(data)

		// If the all the lessons have been completed show claim certificate

		let completed = data.every(lesson => {return lesson.completed === true})
		if (completed){
			// console.log('Course Completed')
			certDiv.innerHTML = `<a href="${window.location.origin}/courses/certificate/${certDiv.getAttribute('data')}">Claim your certificate</a>`
		}		
		else{
			// console.log('Course Not Completed', completed)
			certDiv.innerHTML = `Course Not Completed`
		}

	})
	.catch(err => {
		console.log(err)
	})
}

pageLoad(user_id, course_id)



// If the lesson gets checked, update the status


async function apiUpdateLessons(user_id, course_id, lesson_id){
	let response = await fetch(`${window.location.origin}/lessons_api/lesson_update/${user_id}/${course_id}/${lesson_id}`)
	let data = await response.json()
	return data
}

function updateLesson(user_id, course_id, lesson_id){
	console.log(user_id, course_id, lesson_id)
	apiUpdateLessons(user_id, course_id, lesson_id)
	.then(data => {
		// console.log(data)
		pageLoad(user_id, course_id)
	})
	.catch(err => {
		console.log(err)
	})

}

// And then check if the lessons have all been completed










































