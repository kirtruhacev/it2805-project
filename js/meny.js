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


//Funksjon som tar inn object og om den skal vises (true/false)
function showObject(object){
    const bredde = window.innerWidth;
    if (bredde >= 900){
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


    

