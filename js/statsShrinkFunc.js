var i;
window.onscroll = function() {scrollFunction()};

function scrollFunction() {


  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.opacity = '1'
    document.getElementById("myBtn").style.pointerEvents = 'all'
    statContainer.style = "height: 5%; transition: all .5s cubic-bezier(.685,.0473,.346,1);";
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
    document.getElementById("myBtn").style.opacity = '0'
    document.getElementById("myBtn").style.pointerEvents = 'none'
    statContainer.style = "height: 15%; transition: all .5s cubic-bezier(.685,.0473,.346,1);";
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