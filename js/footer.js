/* ######### Footer ######### */

const footer = document.getElementById('footer');

function footerInsert(){
    const div1 = document.createElement('div'); //Oppretter <div>
    div1.id = "footer-item1"; //Legger til id på <div>
    footer.appendChild(div1); //Legger til <div> i <footer>

    const h1 = document.createElement('h1'); //Oppretter <h1>
    h1.innerText = 'Fryd Cafe'; //Legger til tekst i <h1>
    div1.appendChild(h1); //Legger til <h1> i <div>

    const p = document.createElement('p'); //Oppretter <p>
    p.innerText = 'Kaffe, mat og kos.'; //Legger til tekst i <p>
    div1.appendChild(p); //Legger til <p> i <div>

    const adresse = document.createElement('p'); //Oppretter <p>
    adresse.innerText = 'Nordre gate 15, 7011 Trondheim'; //Legger til tekst i <p>
    div1.appendChild(adresse); //Legger til <p> i <div>

    const estd = document.createElement('p'); //Oppretter <p>
    estd.innerText = 'ESTD 2021'; //Legger til tekst i <p>
    div1.appendChild(estd); //Legger til <p> i <div>

    const div2 = document.createElement('div'); //Oppretter <div>
    div2.id = "footer-item2"; //Legger til id på <div>
    footer.appendChild(div2); //Legger til <div> i <footer>

    //Fryd Cafe logo
    const img1 = document.createElement('img'); //Oppretter <img>
    img1.src = './image/beans_nb.png' //Legger til src i <img>  BEANS ISTEDEFOR LOGO?
    img1.alt = 'Fryd Cafe logo' //Legger til alt i <img>
    div2.appendChild(img1); //Legger til <img> i <footer>

    //Sosiale medier div-box
    const div4 = document.createElement('div'); //Oppretter <div>
    div4.id = "footer-item4"; //Legger til id på <div>
    footer.appendChild(div4); //Legger til <div> i <footer>

    //Åpningstid
    let openStatus = document.createElement('p'); //Oppretter <p>
    openStatus.id = 'openstatus';
    div2.appendChild(openStatus);
    openingHours(); //Legger til tekst om åpningstid

    const h6 = document.createElement('h6'); //Oppretter <h2>
    h6.innerText = 'Sosiale medier'; //Legger til tekst på <h2>
    div4.appendChild(h6); //Legger til <h2> i <div>

    //Facebook-logo
    const a2 = document.createElement('a'); //Oppretter <a>
    const img2 = document.createElement('img'); //Oppretter <img>
    img2.src = './image/facebook.png'; //Legger til src i <img>
    img2.alt = 'Facebook-logo'; //Legger til alt i <img>
    img2.class = 'sosialeMedier' //Lager class på bildet
    a2.href = 'https://www.facebook.com/FrydCafe/'; //Legger til link
    a2.target = '_blank'; //Åpner link i ny fane
    a2.appendChild(img2);
    div4.appendChild(a2); //Legger til <a> i <div>

    //Instagram-logo
    const a3 = document.createElement('a'); //Oppretter <a>
    const img3 = document.createElement('img'); //Oppretter <img>
    img3.src = './image/instagram.png'; //Legger til src i <img>
    img3.alt = 'Instagram-logo'; //Legger til alt i <img>
    img3.class = 'sosialeMedier' //Lager class på bildet
    a3.href = 'https://www.instagram.com/frydcafenordre'; //Legger til link
    a3.target = '_blank'; //Åpner link i ny fane
    a3.appendChild(img3);
    div4.appendChild(a3); //Legger til <a> i <div>

    //Whatsapp-logo
    const a4 = document.createElement('a'); //Oppretter <a>
    const img4 = document.createElement('img'); //Oppretter <img>
    img4.src = './image/whatsapp.png'; //Legger til src i <img>
    img4.alt = 'Whatsapp-logo'; //Legger til alt i <img>
    img4.class = 'sosialeMedier' //Lager class på bildet
    a4.href = 'https://api.whatsapp.com/send?phone=4740046686&app=facebook&entry_point=page_cta&fbclid=IwAR2_EGwUbAeHzp8_ae96VF1Ubx34u_mW5IPYi-dsfc-nvadY78j1cUG2_Sk'; //Legger til link
    a4.target = '_blank'; //Åpner link i ny fane
    a4.appendChild(img4);
    div4.appendChild(a4); //Legger til <a> i <div>
}

/* ######### Åpningstider ######### */

function openingHours(){ //Endrer
    let date = new Date();
    let day = date.getDay(); //Definerer dag-verdi (0-6 (Søndag=0))
    let hour = date.getHours(); //Definerer time-verdi (1-24)

    let åpent = new Boolean(false); //Standardverdi = false (stengt)
    let åpentSnart = new Boolean(false); //Cafeen åpner innen 1 time
    let stengerSnart = new Boolean(false); //Cafeen stenger innen 1 time
    let åpningsTid = '';

    åpent = openNow(åpent,åpningsTid,åpentSnart,stengerSnart,day,hour)[0]; //True hvis cafeen er åpen nå
    åpentSnart = openNow(åpent,åpningsTid,åpentSnart,stengerSnart,day,hour)[2]; //True hvis cafeen åpner innen 1 time
    stengerSnart = openNow(åpent,åpningsTid,åpentSnart,stengerSnart,day,hour)[3]; //True hvis cafeen stenger innen 1 time

    let openStatus = document.getElementById('openstatus'); //Definerer <p>-variabel

    if (stengerSnart == true){
        openStatus.innerText = 'Åpent, men stenger snart:';
        openStatus.innerHTML += ('</br>' + åpningstid);
    }

    else if (åpent == true){
        openStatus.innerText = 'Åpent i dag:';
        openStatus.innerHTML += ('</br>' + åpningstid);
    }

    else if (åpentSnart == true){
        openStatus.innerText = 'Åpner snart:';
        openStatus.innerHTML += ('</br>' + åpningstid);
    }
    else{
        openStatus.innerText = 'Stengt';
    }
}

function openNow(åpent,åpningsTid,åpentSnart,stengerSnart,day,hour){ //Er cafeen åpen nå?

    if (day == 1 || day == 0){ //Mandag eller søndag (lik åpningstid)
        åpningstid = '10.00 - 19.00'; //Åpningstid
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
        åpningstid = '07.00 - 19.00';//Åpningstid
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
        åpningstid = '08.00 - 19.00';//Åpningstid
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
    return([åpent, åpningsTid, åpentSnart, stengerSnart]); //Returnerer true/false
}
