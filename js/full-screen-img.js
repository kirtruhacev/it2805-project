
const imgs = document.querySelectorAll("#grid-container-menu img");
const page = document.querySelector('#fullpage');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    page.style.backgroundImage = 'url(' + img.src + ')';
    page.style.backgroundColor = "none";
    page.style.display = 'block';
    document.GetElementById("grid-container-menu").style.display = "none";
  });
});
