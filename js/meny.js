//Definerer variabler

    //Meny-listene
    const matListe = document.getElementById('matListe');
    const kakeSøtsakerListe = document.getElementById('kakeSøtsakerListe');
    const bakeOffListe = document.getElementById('bakeOffListe');
    const kaffeDrikkeListe = document.getElementById('kaffeDrikkeListe');

    //Meny-bildene
    const matBilde = document.getElementById('matBilde');
    const kakeSøtsakerBilde = document.getElementById('kakerSøtsakerBilde');
    const bakeOffBilde = document.getElementById('bakeOffBilde');
    const kaffeDrikkeBilde = document.getElementById('kaffeDrikkeBilde');

    //Generelt
    const menyBilde = document.querySelectorAll('.menyBilde');
    const menyListe = document.querySelectorAll('.menyListe');
    const menyTekst = document.getElementById('menyTekst');
    let endret = false //Sjekker om man re-sizer "fra" liten til stor bredde

//Funksjon som tar inn object og om den skal vises
function showObject(object){
    const bredde = window.innerWidth;
    if (bredde >= 900){
        if (endret == true){ //Har hatt liten bredde. Resetter boksene
            matBilde.style.display = 'inline';
            matListe.style.display = 'none';
            kakeSøtsakerBilde.style.display = 'inline';
            kakeSøtsakerListe.style.display = 'none';
            bakeOffBilde.style.display = 'inline';
            bakeOffListe.style.display = 'none';
            kaffeDrikkeBilde.style.display = 'inline';
            kaffeDrikkeListe.style.display = 'none';
            endret = false;
        }
        if (object == "matListe"){
            matListe.style.display = 'none';
            matBilde.style.display = 'inline';
        }
        else if (object == "matBilde"){
            matBilde.style.display = 'none';
            matListe.style.display = 'inline';
        }
        else if (object == "kakeSøtsakerListe"){
            kakeSøtsakerListe.style.display = 'none';
            kakeSøtsakerBilde.style.display = 'inline';
        }
        else if (object == "kakerSøtsakerBilde"){
            kakeSøtsakerBilde.style.display = 'none';
            kakeSøtsakerListe.style.display = 'inline';
        }
        else if (object == "bakeOffListe"){
            bakeOffListe.style.display = 'none';
            bakeOffBilde.style.display = 'inline';
        }
        else if (object == "bakeOffBilde"){
            bakeOffBilde.style.display = 'none';
            bakeOffListe.style.display = 'inline';
        }
        else if (object == "kaffeDrikkeListe"){
            kaffeDrikkeListe.style.display = 'none';
            kaffeDrikkeBilde.style.display = 'inline';
        }
        else if (object == "kaffeDrikkeBilde"){
            kaffeDrikkeBilde.style.display = 'none';
            kaffeDrikkeListe.style.display = 'inline';
        }
        menyTekst.innerText = 'Velkommen til vår café, vi kan friste deg med god mat og drikke. Trykk på bildene under for å se hele menyene!';
    }
    else{
        matBilde.style.display = 'none';
        matListe.style.display = 'inline';
        kakeSøtsakerBilde.style.display = 'none';
        kakeSøtsakerListe.style.display = 'inline';
        bakeOffBilde.style.display = 'none';
        bakeOffListe.style.display = 'inline';
        kaffeDrikkeBilde.style.display = 'none';
        kaffeDrikkeListe.style.display = 'inline';
        endret = true //Liten bredde
        menyTekst.innerText = 'Velkommen til vår café, vi kan friste deg med god mat og drikke.';
    }
}

menyListe.forEach(object => {
    object.addEventListener('click', event => {
        showObject(object.id);
    })})

menyBilde.forEach(object => {
    object.addEventListener('click', event => {
        showObject(object.id);
    })})

window.addEventListener("resize", () => {
    (showObject('none'));
});

window.addEventListener("onload", (showObject('none')));


    

