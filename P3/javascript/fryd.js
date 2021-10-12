const myMenu = document.getElementById('menu');

myMenu.onclick=e=>  // JS event delegation
  {
  if (e.target.tagName.toLowerCase() != 'a' ) return; // only
  e.preventDefault;
  let LI = e.target.parentElement;

  if (!LI.classList.contains('active'))
    {
    myMenu.querySelector('li.active').classList.remove('active');
    }
  LI.classList.add('active');
  }