let darkMode = true;

function darkmode() {
    const wasDarkmode = darkMode; // localStorage.getItem('darkmode') === 'true';
    darkMode = !darkMode; // localStorage.setItem('darkmode', !wasDarkmode);
    const element = document.body;
    element.classList.toggle('light-mode', wasDarkmode);
  }

  function onload() {
    document.body.classList.toggle('light-mode', !darkMode); // localStorage.getItem('darkmode') === 'true');
  }


  /* Inspirasjon: https://codepen.io/mattmarquise/details/MWbrNWe */

/* 
const button = document.getElementById("button");

button.addEventListener("click", ()=>{

    if(button.innerText === "Klikk for lys modus"){
        button.innerText = "Klikk for mørk modus";
    }else{
        button.innerText= "Klikk for lys modus";
    }
)}

*/