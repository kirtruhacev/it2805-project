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