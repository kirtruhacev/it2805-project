/* ######### Understreking i navbar ######### */
/* const myMenu = document.getElementById('menu');

myMenu.onclick=e=>  // JS event delegation
  {
  if (e.target.tagName.toLowerCase() != 'a' ) return; // only
  e.preventDefault;
  let LI = e.target.parentElement;

  if (!LI.classList.contains('active'))
    {
    myMenu.querySelector('li.active').classList.remove('active');
    }
  LI.classList.add('active');
  }

var da = new Date();
document.getElementById("display").innerHTML = da.toDateString();
 */
/* Navigasjon slutt  Credit: https://stackoverflow.com/questions/59448836/how-to-underline-navbar-item-when-it-is-clicked */

/* ######### navbar endrer størrelse når scroller ######### */
/* window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.padding = "5px";
  } else {
    document.getElementById("header").style.padding = "80px";
  }
} */

/* window.addEventListener('scroll', stickyNavbar);

const navBar = document.querySelector('header');
const navBarHeigth = navBar.offsetHeight;
var body = document.querySelector('body');

function stickyNavbar(){
  if (window.scrollY >= navBarHeigth){
    body.style.paddingTop = navBar.offsetHeight + 'px';
    body.classList = 'fixedNav';
  }
  else{
    body.style.paddingTop = 0;
    body.classList.remove('fixedNav');
  }
} */

/* ######### navigasjon menyene ######### */
const header = document.getElementById('header');

function headerInsert(){
    const a = document.createElement('a'); //Oppretter <a>
    const img = document.createElement('img'); //Oppretter <img>
    img.src = "./image/logotrans.png"; //Legger til src i <img>
    img.alt = "Fryd Cafe logo" //Legger til alt-tekst i <img>
    a.href = "homepage.html" //legger til link til hovedside i logo
    a.appendChild(img); //Legger til <img> i <a>
    header.appendChild(a); //Legger til <a> i <header>

    const ul = document.createElement('ul'); //Oppretter <ul>
    ul.id = 'menu'; //Legger til meny-id
    header.appendChild(ul); //Legger til <ul> i <header>

    const lihomepage = document.createElement('li'); //Oppretter <li>
    ul.appendChild(lihomepage); //Legger til <li> i <ul>
    const ahomepage = document.createElement('a'); //Oppretter <a> til homepage
    ahomepage.href = "homepage.html"; //Linker <a> til homepage
    ahomepage.innerText = 'Hjem'; //Legger til "Hjem"-tekst i <a>
    lihomepage.appendChild(ahomepage); //Legger til <a> i <li>

    const limeny = document.createElement('li'); //Oppretter <li>
    ul.appendChild(limeny); //Legger til <li> i <ul>
    const ameny = document.createElement('a'); //Oppretter <a> til meny
    ameny.href = "meny.html"; //Linker <a> til meny
    ameny.innerText = 'Meny'; //Legger til "Meny"-tekst i <a>
    limeny.appendChild(ameny); //Legger til <a> i <li>
    
    const ligallery = document.createElement('li'); //Oppretter <li>
    ul.appendChild(ligallery); //Legger til <li> i <ul>
    const agallery = document.createElement('a'); //Oppretter <a> til gallery
    agallery.href = "gallery.html"; //Linker <a> til gallery
    agallery.innerText = 'Gallery'; //Legger til "Gallery"-tekst i <a>
    ligallery.appendChild(agallery); //Legger til <a> i <li>

    var liomoss = document.createElement('li'); //Oppretter <li>
    ul.appendChild(liomoss); //Legger til <li> i <ul>
    var aomoss = document.createElement('a'); //Oppretter <a> til about
    aomoss.href = "about.html"; //Linker <a> til about
    aomoss.innerText = 'Om oss'; //Legger til "Om oss"-tekst i <a>
    liomoss.appendChild(aomoss); //Legger til <a> i <li>

    var likontakt = document.createElement('li'); //Oppretter <li>
    ul.appendChild(likontakt); //Legger til <li> i <ul>
    var akontakt = document.createElement('a'); //Oppretter <a> til contact
    akontakt.href = "contact.html"; //Linker <a> til contact
    akontakt.innerText = 'Kontakt'; //Legger til "Kontakt"-tekst i <a>
    likontakt.appendChild(akontakt); //Legger til <a> i <li>

    header.appendChild(ul); //Legger til <ul>
}