window.onload = basicFunc;

var cars = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot'),
    counter = 0;

function show(x) {
  basicFunc(counter += x);
}

function showDot(x) {
	basicFunc(counter = x);
}

function basicFunc() {

  if (counter == cars.length) {
    counter = 0;
  }

  if (counter < 0) {
    counter = cars.length - 1;
  }

  for (var i = 0; i < cars.length; i++) {
    cars[i].style.display = "none";
    cars[counter].style.display = "block";
  }

  for (var j = 0; j < dots.length; j++) {
    dots[j].className = "dot";
  }

  dots[counter].className += " act";

}
