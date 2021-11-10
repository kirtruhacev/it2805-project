
var index = 0;
slideshow();

function slideshow() {
  /*Funksjonen som aksesserer bilder som hører til slideshowen, og så itererer gjennom
  listen og endrer display fra none til default verdien, som gir slideshow effekten.*/
  var x = document.getElementsByClassName("slideshow-img");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  index++;
  if (index > x.length) {index = 1}
  x[index-1].style.display = "block";
  setTimeout(slideshow, 2000); // Rullerer bilde hver annen sekund
}
