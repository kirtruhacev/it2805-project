//Har en funksjon som først bygger headeren ved innlastning av siden, og så har vi en funksjon som endrer størrelse ved bevegelse av siden.

const header = document.getElementById('top'); //Henter id på header

/* ######### Bygging av header ######### */

function headerInsert(){ //Funksjonen bli kjørt ved innlastning av side

    //Lager logoen
    const a = document.createElement('a'); //Oppretter <a>
    const img = document.createElement('img'); //Oppretter <img>
    img.src = "./image/logotrans.png"; //Legger til src i <img>
    img.alt = "Fryd Cafe logo" //Legger til alt-tekst i <img>
    a.href = "homepage.html" //legger til link til hovedside i logo
    a.appendChild(img); //Legger til <img> i <a>
    header.appendChild(a); //Legger til <a> i <header>
    img.id = "logo"; //lager id på bilde i headeren

    //Lager liste
    const ul = document.createElement('ul'); //Oppretter <ul>
    ul.id = 'menu'; //Legger til meny-id
    header.appendChild(ul); //Legger til <ul> i <header>

    //Lager homepage-knapp
    const lihomepage = document.createElement('li'); //Oppretter <li>
    ul.appendChild(lihomepage); //Legger til <li> i <ul>
    const ahomepage = document.createElement('a'); //Oppretter <a> til homepage
    ahomepage.href = "homepage.html"; //Linker <a> til homepage
    ahomepage.innerText = 'Hjem'; //Legger til "Hjem"-tekst i <a>
    lihomepage.appendChild(ahomepage); //Legger til <a> i <li>
    lihomepage.className = 'knapp';

    //Lager meny-knapp
    const limeny = document.createElement('li'); //Oppretter <li>
    ul.appendChild(limeny); //Legger til <li> i <ul>
    const ameny = document.createElement('a'); //Oppretter <a> til meny
    ameny.href = "meny.html"; //Linker <a> til meny
    ameny.innerText = 'Meny'; //Legger til "Meny"-tekst i <a>
    limeny.appendChild(ameny); //Legger til <a> i <li>
    limeny.className = 'knapp';

    //Lager galleri-knapp
    const ligallery = document.createElement('li'); //Oppretter <li>
    ul.appendChild(ligallery); //Legger til <li> i <ul>
    const agallery = document.createElement('a'); //Oppretter <a> til gallery
    agallery.href = "gallery.html"; //Linker <a> til gallery
    agallery.innerText = 'Galleri'; //Legger til "Gallery"-tekst i <a>
    ligallery.appendChild(agallery); //Legger til <a> i <li>
    ligallery.className = 'knapp';

    //Lager om oss-knapp
    const liomoss = document.createElement('li'); //Oppretter <li>
    ul.appendChild(liomoss); //Legger til <li> i <ul>
    const aomoss = document.createElement('a'); //Oppretter <a> til about
    aomoss.href = "about.html"; //Linker <a> til about
    aomoss.innerText = 'Om oss'; //Legger til "Om oss"-tekst i <a>
    liomoss.appendChild(aomoss); //Legger til <a> i <li>
    liomoss.className = 'knapp';

    //Lager kontakt-knapp
    const likontakt = document.createElement('li'); //Oppretter <li>
    ul.appendChild(likontakt); //Legger til <li> i <ul>
    const akontakt = document.createElement('a'); //Oppretter <a> til contact
    akontakt.href = "contact.html"; //Linker <a> til contact
    akontakt.innerText = 'Kontakt'; //Legger til "Kontakt"-tekst i <a>
    likontakt.appendChild(akontakt); //Legger til <a> i <li>
    likontakt.className = 'knapp';

    //Bakgrunnsbilde
    const img2 = document.createElement('img'); //Oppretter <img>
    img2.id = "header-background-img";
    img2.src = "./image/header_img.jpg"; //Legger til src i <img>
    img2.alt = "Fryd Cafe logo" //Legger til alt-tekst i <img> //Legger til <ul>
    header.appendChild(img2);
    img2.style.zIndex = "-1";

    //Knapp for lys/mørk side
    const img3 = document.createElement('img');
    const a3 = document.createElement('a');
    const button = document.createElement('button');
    img3.src = "image/lightmode.png";
    img3.alt = "Light mode og dark mode knapp";
    a3.appendChild(img3);
    button.appendChild(a3);
    button.id = 'button';
    a3.onclick = darkmode;
    ul.appendChild(button);
}
