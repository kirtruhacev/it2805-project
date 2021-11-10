let lightMode = localStorage.getItem('lightMode');
const body = document.querySelector('body');

/* Funksjon for å skru på lys modus */
function enableLightMode (){
  body.className = 'light-mode';
  localStorage.setItem('lightMode','on');
}

/* Funksjon for å skru av lys modus */
function diableLightMode (){
  body.className = 'off' ;
  localStorage.setItem('lightMode', 'off' );
}

/* Funksjon for å endre modus */
function darkmode() {
  lightMode = localStorage.getItem('lightMode');
  if (lightMode !== 'on'){
    enableLightMode();
  }
  else {
    diableLightMode();
  }
}

/* Setter rett modus ved innlastning */
function onload() {
  lightMode = localStorage.getItem('lightMode');
  if (lightMode == 'on'){
    enableLightMode();
  }
  else if ( lightMode === 'off') {
    diableLightMode();
  }
}
