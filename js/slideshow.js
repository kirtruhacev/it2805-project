/* var imgList = ["./mage/bilde14.png","bilde15.png","bilde10.png","bilde13.png"]
var time = 1000; */
var index = 0;
slideshow();

function slideshow() {

  var x = document.getElementsByClassName("slideshow-img");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  index++;
  if (index > x.length) {index = 1}
  x[index-1].style.display = "block";
  setTimeout(slideshow, 2000); // Change image every 2 seconds
}
