var shrink = {
  "height": "40px",
  "width": "60%",
  "transition": "all 2s ease-in-out",
}
var i;
window.onscroll = function() {scrollFunction()};

function scrollFunction() {


  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    statContainer.style = "height: 5%; transition: all 1s ease-in-out;";
    console.log (statContainer)
    console.log (stat)
    console.log (statsText)

    for (var i = 0; i < stat.length; i++){
      stat[i].classList.add('shrink');
    }
    for (var i = 0; i < stat.length; i++){
      statsText[i].classList.add('invisible')
    }
  } 
  else {
    mybutton.style.display = "none";
    statContainer.style = "height: 15%; transition: all 1s ease-in-out;";
    for (var i = 0; i < stat.length; i++){
      stat[i].classList.remove('shrink');
    }
    for (var i = 0; i < stat.length; i++){
      statsText[i].classList.remove('invisible')
    }
  }
  
} 

function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }