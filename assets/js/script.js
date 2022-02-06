let leftIcon = document.getElementById("left-icons");
let rightIcon = document.getElementById("right-icons");
let carousel = document.getElementById("but-card");
let just = carousel.getElementsByClassName("card-item");
let active = document.getElementsByClassName("active")

let right = () => {
  let endRight = document.getElementById("10");

  if (just[0] != endRight) {
    carousel.append(just[0]);

  } else {
    rightIcon.style.color = "blue";
  }

}
let left = () => {
  let endLeft = document.getElementById("1")
  if (just[just.length - 1] != endLeft) {
    carousel.prepend(just[just.length - 1]);
  } else {
    leftIcon.style.color = "cyan"
  }

}
