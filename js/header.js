console.log('Hello World');
const header = document.getElementById('header');

function headerInsert(){
    var img = document.createElement('img'); //Oppretter <img>
    img.src = "./image/logotrans.png"; //Legger til src i <img>
    img.alt = "Fryd Cafe logo" //Legger til alt-tekst i <img>
    header.appendChild(img); //Legger til <img> i <header>

    var ul = document.createElement('ul'); //Oppretter <ul>
    header.appendChild(ul); //Legger til <ul> i <header>

    var lihomepage = document.createElement('li'); //Oppretter <li>
    ul.appendChild(lihomepage); //Legger til <li> i <ul>
    var ahomepage = document.createElement('a'); //Oppretter <a> til homepage
    ahomepage.href = "homepage.html"; //Linker <a> til homepage
    ahomepage.innerText = 'Hjem'; //Legger til "Hjem"-tekst i <a>
    lihomepage.appendChild(ahomepage); //Legger til <a> i <li>

    var limeny = document.createElement('li'); //Oppretter <li>
    ul.appendChild(limeny); //Legger til <li> i <ul>
    var ameny = document.createElement('a'); //Oppretter <a> til meny
    ameny.href = "meny.html"; //Linker <a> til meny
    ameny.innerText = 'Meny'; //Legger til "Meny"-tekst i <a>
    limeny.appendChild(ameny); //Legger til <a> i <li>
    
    var ligallery = document.createElement('li'); //Oppretter <li>
    ul.appendChild(ligallery); //Legger til <li> i <ul>
    var agallery = document.createElement('a'); //Oppretter <a> til gallery
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