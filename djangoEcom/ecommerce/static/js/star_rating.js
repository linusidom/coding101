const course_rating = document.querySelector('#course_rating').value

const rating_div_class = document.querySelectorAll('.rating')

// <i class="fa fa-star"></i>
// <i class="fa fa-star"></i>
// <i class="fa fa-star"></i>
// <i class="fa fa-star"></i>
// <i class="fa fa-star is-fade"></i>

const faded_stars = 5 - course_rating
// console.log(faded_stars)
rating_div_class.forEach(rating_div => {
	for (var i = 0; i < course_rating; i ++){
		rating_div.innerHTML += '<i class="fa fa-star"></i>'
	}
	for (var i = 0; i < faded_stars; i ++){
		rating_div.innerHTML += '<i class="fa fa-star is-fade"></i>'	
	}
})
// console.log(course_rating, faded_stars)