/* Gjøre siden lysere */

let darkMode = true;

function darkmode() {
    const wasDarkmode = darkMode; 
    darkMode = !darkMode; 
    const element = document.body;
    element.classList.toggle('light-mode', wasDarkmode);
  }

  function onload() {
    document.body.classList.toggle('light-mode', !darkMode); 
  }

/* Inspirasjon: https://codepen.io/mattmarquise/details/MWbrNWe */