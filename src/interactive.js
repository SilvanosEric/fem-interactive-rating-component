// get required elements
// rating card
// thank you card
// buttons 1..5 . They should have a data attribute
// rating element

const rCard = document.getElementById("rCard");
const tCard = document.getElementById("tCard");
const options = document.querySelectorAll(".circle");
const rating = document.getElementById("rating");
const buttton = document.getElementById("button");

// function to toggle a class to an element
function toggleClass(element, className) {
  element.classList.toggle(className);
}

// function to remove selected state
function removeSelected(exception) {
  const array = Array.from(options);
  array.forEach((circle) => {
    if (array.indexOf(exception) == array.indexOf(circle)) {
      return; // do nothing
    }
    circle.classList.remove("selected");
  });
}

// function to get the data-rate attribute from a cirlce
// and pass it to the rating element
function setRating(circle) {
  rating.innerHTML = circle.getAttribute("data-rate");
}

// function to add rating to the rating element
function addRating(element) {
  rating.innerText = getRating(circle);
}

// function to check if user selected a rating
function checkRating() {
  return Array.from(options).some((circle) =>
    circle.classList.contains("selected")
  );
}

// add a click event listener to all the circles in the array
// that toggles the selected class when a button is clicked
options.forEach((circle) => {
  circle.addEventListener("click", () => {
    // remove selected state from any prevously selected circle if any.
    // if clicking on the same circle, the function should not remove its selected state.
    // That is for the user to remove by clicking again
    removeSelected(circle);
    // toggle the state of circle
    toggleClass(circle, "selected");
    // update the innerText of the rating html element
    setRating(circle);
  });
});

buttton.addEventListener("click", () => {
  // check if rating is provided
  if (checkRating()) {
    // hide rating card
    toggleClass(rCard, "hidden");

    // show thank you card
    toggleClass(tCard, "hidden");
  }
});
