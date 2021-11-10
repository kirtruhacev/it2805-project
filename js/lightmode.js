let lightMode = localStorage.getItem('lightMode');
const body = document.querySelector('body');

function enableLightMode (){
  body.className = 'light-mode';
  localStorage.setItem('lightMode','on');
}

function diableLightMode (){
  body.className = 'off' ;
  localStorage.setItem('lightMode', 'off' );
}



/* Gjøre siden lysere */

function darkmode() {
  lightMode = localStorage.getItem('lightMode');
  if (lightMode !== 'on'){
    enableLightMode();
  }
  else {
    diableLightMode();
  }
}

function onload() {
  lightMode = localStorage.getItem('lightMode');
  if (lightMode == 'on'){
    enableLightMode();
    console.log('loading');
  }
  else if ( lightMode === 'off') {
    diableLightMode();
  }
}
