/* Scroller ned headeren når bruker scroller ned */

function scrollFunction() {
    header.id = "top";
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) { /* effekten skjer når man scroller over 90 */
      header.id = 'scroll';
    } else {
      header.id = 'top';
    }
  }
  
  /*Lyter på scroll, og kjører funskjonen som velger headeren*/
  window.onscroll = function() {scrollFunction()}; //Kjøres hver gang man scroller