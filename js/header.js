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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) { /* effekten skjer når man scroller over 80 */
    document.getElementById("header").style.padding = "5px 200px"; /* padding rundt header etter man scroller */
    document.getElementById("header").style.fontSize = "15px"; /* størrelse på logo etter man scroller */
    document.getElementById("header").style.fontWeight = "normal"; /* endrer font type etter man scroller */
    document.getElementById("header").style.backgroundColor = "black"; /* farge på header etter man scroller */
    document.getElementById("logo").style.height = "50px"; /* størrelse på logo etter man scroller */

    /* Fjern dette? Ordnet med fontsize som gjelder alle */
    /*document.getElementById("header").style.height = "60px" /*endrer høyden på headeren ved scrolling */
    /*document.getElementById("knappHome").style.fontSize = "15px" /*endrer størrelsen på menyknappene i headeren */
    /*document.getElementById("knappMeny").style.fontSize = "15px" /*endrer størrelsen på menyknappene i headeren */
    /*document.getElementById("knappGallery").style.fontSize = "15px" /*endrer størrelsen på menyknappene i headeren */
    /*document.getElementById("knappOmoss").style.fontSize = "15px" /*endrer størrelsen på menyknappene i headeren */
    /*document.getElementById("knappKontakt").style.fontSize = "15px" /*endrer størrelsen på menyknappene i headeren */
    /*document.getElementById("header").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(119, 97, 25, 0.904)"*/
    
  } else {
    document.getElementById("header").style.padding = "50px 10px";
    document.getElementById("header").style.fontSize = "20px"; /*tilbakestiller størrelse på menyknappene når øverst på side */
    document.getElementById("header").style.fontWeight = "bold";
    document.getElementById("header").style.backgroundColor = "transparent";
    document.getElementById("logo").style.height = "150px" /*tilbakestiller logo når øverst på side */

    /* Fjern dette? Ordnet med fontsize som gjelder alle */
    /*document.getElementById("knappHome").style.fontSize = "20px" /*tilbakestiller størrelse på menyknappene når øverst på side */
    /*document.getElementById("knappMeny").style.fontSize = "20px" /*tilbakestiller størrelse på menyknappene når øverst på side */ 
    /*document.getElementById("knappGallery").style.fontSize = "20px" /*tilbakestiller størrelse på menyknappene når øverst på side */
    /*document.getElementById("knappOmoss").style.fontSize = "20px" /*tilbakestiller størrelse på menyknappene når øverst på side */
    /*document.getElementById("knappKontakt").style.fontSize = "20px" /*tilbakestiller størrelse på menyknappene når øverst på side */
    /*document.getElementById("header").style.boxShadow = "none" */
  }
}

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
    img.setAttribute("id", "logo") /*lager id på bilde i headeren */

    const ul = document.createElement('ul'); //Oppretter <ul>
    ul.id = 'menu'; //Legger til meny-id
    header.appendChild(ul); //Legger til <ul> i <header>

    const lihomepage = document.createElement('li'); //Oppretter <li>
    ul.appendChild(lihomepage); //Legger til <li> i <ul>
    const ahomepage = document.createElement('a'); //Oppretter <a> til homepage
    ahomepage.href = "homepage.html"; //Linker <a> til homepage
    ahomepage.innerText = 'Hjem'; //Legger til "Hjem"-tekst i <a>
    lihomepage.appendChild(ahomepage); //Legger til <a> i <li>
    lihomepage.setAttribute("id", "knappHome") /*lager id på knapp i header */

    const limeny = document.createElement('li'); //Oppretter <li>
    ul.appendChild(limeny); //Legger til <li> i <ul>
    const ameny = document.createElement('a'); //Oppretter <a> til meny
    ameny.href = "meny.html"; //Linker <a> til meny
    ameny.innerText = 'Meny'; //Legger til "Meny"-tekst i <a>
    limeny.appendChild(ameny); //Legger til <a> i <li>
    limeny.setAttribute("id", "knappMeny") /*lager id på knapp i header */

    const ligallery = document.createElement('li'); //Oppretter <li>
    ul.appendChild(ligallery); //Legger til <li> i <ul>
    const agallery = document.createElement('a'); //Oppretter <a> til gallery
    agallery.href = "gallery.html"; //Linker <a> til gallery
    agallery.innerText = 'Gallery'; //Legger til "Gallery"-tekst i <a>
    ligallery.appendChild(agallery); //Legger til <a> i <li>
    ligallery.setAttribute("id", "knappGallery") /*lager id på knapp i header */

    var liomoss = document.createElement('li'); //Oppretter <li>
    ul.appendChild(liomoss); //Legger til <li> i <ul>
    var aomoss = document.createElement('a'); //Oppretter <a> til about
    aomoss.href = "about.html"; //Linker <a> til about
    aomoss.innerText = 'Om oss'; //Legger til "Om oss"-tekst i <a>
    liomoss.appendChild(aomoss); //Legger til <a> i <li>
    liomoss.setAttribute("id", "knappOmoss") /*lager id på knapp i header */

    var likontakt = document.createElement('li'); //Oppretter <li>
    ul.appendChild(likontakt); //Legger til <li> i <ul>
    var akontakt = document.createElement('a'); //Oppretter <a> til contact
    akontakt.href = "contact.html"; //Linker <a> til contact
    akontakt.innerText = 'Kontakt'; //Legger til "Kontakt"-tekst i <a>
    likontakt.appendChild(akontakt); //Legger til <a> i <li>
    likontakt.setAttribute("id", "knappKontakt") /*lager id på knapp i header */

    header.appendChild(ul); //Legger til <ul>
}
