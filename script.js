function filterCarsByBrand(brand) {
  var cars = document.getElementsByClassName("column");
  for (var i = 0; i < cars.length; i++) {
    var car = cars[i];
    if (car.classList.contains(brand)) {
      car.style.display = "block";
    } else {
      car.style.display = "none";
    }
  }
}
