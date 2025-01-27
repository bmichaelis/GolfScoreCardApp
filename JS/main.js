// create function to randomize ids for players and courses
function getNextId(prefix) {
  return prefix + Math.random().toString(36).substr(2, 10);
}

getAvailableCourses();

//create function to choose from available courses
function chooseCourse(courses) {
let courseOptionsHtml = '';
courses.forEach((course) => {
 courseOptionsHtml += `<option value="${course.id}">${course.name}</option>`;
});
document.getElementById('course-select').innerHTML = courseOptionsHtml;
}

// create function to choose tee box
function chooseTee(teeBoxes) {
let teeBoxSelectHtml = '';
teeBoxes.forEach(function (teeBox, index) {
   teeBoxSelectHtml += `<option value="${index}">${teeBox.teeType.toUpperCase()}, ${
     teeBox.totalYards
   } yards</option>`
});
document.getElementById('tee-box-select').innerHTML = teeBoxSelectHtml;
}

// create function to create message after last hole is played
function playerMessage() {
toastr.success(`${playerName}, you're practically at pro-level. Great work! Go on sabbatical. You deserve it!`);

toastr.warning(`${playerName}, keep trying to improve.  Hours at a practice facility will dramatically improve your golfing acumen.`);
}

function getAvailableCourses() {
  return fetch('https://golf-courses-api.herokuapp.com/courses/')
  .then(function (response) {
      chooseCourse(response.json().courses);
    }
  );
 }

 // create function to update Score
 function updateScore() {

 }

 // create function to allow up to four players
 function addUpToFourPlayers(){

 }

 // create function to enter players names?
 function enterPlayersNames() {

 }

 // Be aware that when a player gets to the last score before totaling, they could have started at any hole.
 // create function that totals last score before totaling regardless of what hole they started on. Be aware that when a player gets to the last score before totaling, they could have started at any hole.

 function holeTotal() {

 }