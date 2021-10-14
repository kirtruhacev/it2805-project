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