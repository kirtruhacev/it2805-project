
const imgs = document.querySelectorAll("#grid-container-menu img");
const page = document.querySelector('#fullpage');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    page.style.backgroundImage = 'url(' + img.src + ')';
    page.style.backgroundColor = "none";
    page.style.display = 'block';
    //document.GetElementById("grid-container-menu").style.display = "none";
  });
});

/* Lager en funksjon som fjerner menyen ved scroll */
window.addEventListener('scroll', removePic);
function removePic(){
  page.style.backgroundImage = 'none';
}