const footer = document.getElementById('footer');

function footerInsert(){
    const div1 = document.createElement('div'); //Oppretter <div>
    div1.class = "footer-item1"; //Legger til class på <div>
    footer.appendChild(div1); //Legger til <div> i <footer>

    const h1 = document.createElement('h1'); //Oppretter <h1>
    h1.innerText = 'Fryd Cafe'; //Legger til tekst i <h1>
    div1.appendChild(h1); //Legger til <h1> i <div>

    const p = document.createElement('p'); //Oppretter <p>
    p.innerText = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."'; //Legger til tekst i <p>
    div1.appendChild(p); //Legger til <p> i <div>

    const div2 = document.createElement('div'); //Oppretter <div>
    div2.class = "footer-item2"; //Legger til class på <div>
    footer.appendChild(div2); //Legger til <div> i <footer>

    //Åpningstider skal få egen js-funksjon. Bli implementert senere. Derfor står div2 tom nå.

    
    let openStatus = document.createElement('p'); //Oppretter <p>
    openStatus.id = 'openstatus';
    div2.appendChild(openStatus);
    openingHours(); //Legger til tekst om åpningstid
    //Legger til åpningstid idag

    const img1 = document.createElement('img'); //Oppretter <img>
    img1.src = './image/logotrans.png' //Legger til src i <img>
    img1.alt = 'Fryd Cafe logo' //Legger til alt i <img>
    footer.appendChild(img1); //Legger til <img> i <footer>

    const div4 = document.createElement('div'); //Oppretter <div>
    div4.class = "footer-item4"; //Legger til class på <div>
    footer.appendChild(div4); //Legger til <div> i <footer>

    const h2 = document.createElement('h2'); //Oppretter <h2>
    h2.innerText = 'Sosiale medier:'; //Legger til tekst på <h2>
    div4.appendChild(h2); //Legger til <h2> i <div>

    const img2 = document.createElement('img'); //Oppretter <img>
    img2.src = './image/facebook.png' //Legger til src i <img>
    img2.alt = 'Facebook-logo' //Legger til alt i <img>
    div4.appendChild(img2); //Legger til <img> i <div>

    const img3 = document.createElement('img'); //Oppretter <img>
    img3.src = './image/instagram.png' //Legger til src i <img>
    img3.alt = 'Instagram-logo' //Legger til alt i <img>
    div4.appendChild(img3); //Legger til <img> i <div>

}

function openingHours(){ //Endrer 
    let date = new Date(); 
    let day = date.getDay(); //Definerer dag-verdi (1-7)
    let hour = date.getHours(); //Definerer time-verdi (1-24)

    let åpent = new Boolean(false); //Standardverdi = false (stengt)
    let åpentSnart = new Boolean(false); //Cafeen åpner innen 1 time
    let stengerSnart = new Boolean(false); //Cafeen stenger innen 1 time

    åpent = openNow(åpent,åpentSnart,stengerSnart,day,hour)[0]; //True hvis cafeen er åpen nå
    åpentSnart = openNow(åpent,åpentSnart,stengerSnart,day,hour)[1]; //True hvis cafeen åpner innen 1 time
    stengerSnart = openNow(åpent,åpentSnart,stengerSnart,day,hour)[2]; //True hvis cafeen stenger innen 1 time

    let openStatus = document.getElementById('openstatus'); //Definerer <p>-variabel

    if (stengerSnart == true){
        openStatus.innerText = 'Åpent, men stenger snart';
    }

    else if (åpent == true){ 
        openStatus.innerText = 'Åpent';
    }

    else if (åpentSnart == true){
        openStatus.innerText = 'Åpner snart';
    }
    else{
        openStatus.innerText = 'Stengt';
    }
    //Skal endre på presentasjon av åpningstider. Men js-funker nå :)
}

function openNow(åpent,åpentSnart,stengerSnart,day,hour){ //Er cafeen åpen nå?

    if (day == 1 || day == 7){ //Mandag eller søndag (lik åpningstid)
        if (hour >= 10 && hour <= 18){ //Mellom 10-19
            åpent = true;
        }
        if (hour == 18){
            stengerSnart = true;
        }
        if (hour == 9){
            åpentSnart = true;
        }
    }
    if (day >= 2 && day <= 5){ //Tirsdag-fredag (lik åpningstid)
        if (hour >= 7 && hour <= 18){ //Mellom 7-19
            åpent = true;
        } 
        if (hour == 18){
            stengerSnart = true;
        }
        if (hour == 6){
            åpentSnart = true;
        }
    }

    if (day == 6){ //Fredag
        if (hour >= 8 && hour <= 18){ //Mellom 8-19
            åpent = true;
        }
        if (hour == 18){
            stengerSnart = true;
        }
        if (hour == 7){
            åpentSnart = true;
        }
    }
    return([åpent, åpentSnart, stengerSnart]); //Returnerer true/false
}