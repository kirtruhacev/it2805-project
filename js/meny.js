//Definerer variabler

    //Meny-listene
    const matListe = document.getElementById('matListe');
    const kakeSøtsakerListe = document.getElementById('kakerSøtsakerListe');
    const bakeOffListe = document.getElementById('bakeOffListe');
    const kaffeDrikkeListe = document.getElementById('kaffeDrikkeListe');

    //Meny-bildene
    const matBilde = document.getElementById('matBilde');
    const kakeSøtsakerBilde = document.getElementById('kakerSøtsakerBilde');
    const bakeOffBilde = document.getElementById('bakeOffBilde');
    const kaffeDrikkeBilde = document.getElementById('kaffeDrikkeBilde');

    //Generelt
    const menySide = document.querySelectorAll('.menyside');
console.log(menySide)

//Funksjon som tar inn object og om den skal vises (true/false)
function showObject(object){
    if (object == "matListe"){
        matListe.style.display = 'none';
        matBilde.style.display = 'inline';
    }
    else if (object == "matBilde"){
        matBilde.style.display = 'none';
        matListe.style.display = 'inline';
    }
    else if (object == "kakerSøtsakerListe"){
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



menySide.forEach(object => {
    object.addEventListener('click', event => {
        console.log(object.id);
        console.log(object);
        showObject(object.id);
    })})






