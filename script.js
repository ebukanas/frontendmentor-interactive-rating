//variable declarations
const submitBtn = document.getElementById('submit');
const rating = document.getElementsByClassName('rating');
var userRating;
var ratingSubmitted = false;

//run this function when you click on one of the rating buttons
for (let i=0;i<rating.length;i++) {
rating[i].addEventListener("click", function() {
userRating = i+1;
ratingSubmitted = true;

//remove the styling from previous buttons
for (let j=0; j<rating.length; j++) {
	rating[j].style.backgroundColor = 'hsl(213, 19%, 21%)';
  rating[j].style.color = 'hsl(216, 12%, 54%)';
}
//change the rating button styling on click
rating[i].style.backgroundColor = 'hsl(25, 97%, 53%)';
rating[i].style.color = 'white';
});
}

//clicking on the submit button
submitBtn.addEventListener("click", function() {
//check if the user has submitted a rating
	if (ratingSubmitted === true) {
console.log('user rating is ' + userRating);
//open the thankyou.html window
window.open("thankyou.html","_self")
//if the user hasn't selected a rating - alert them to do it.
} else if (ratingSubmitted === false) {
alert('Please select a rating');
}

})





