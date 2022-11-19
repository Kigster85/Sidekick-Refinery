function airdrop_Tab(button_Name) 
{
    console.log("Testing 123!")
   
    const airdrop = document.getElementsByClassName("airdrop_sections");
        for (let i = 0; i < airdrop.length; i++) {
      airdrop[i].style.display = "none";
    }
    document.getElementById(button_Name).style.display = "block";

    console.log(button_Name)


// Get the container element
var btnContainer = document.getElementById("airdropBTNS");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("air_drop_tab_btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}  

    console.log("Finished Testing 123!")
}

function ReqBD_Tab(Reqbutton_Name)  
{
    console.log("Testing 123!")
   
    const ReqBD_Tab = document.getElementsByClassName("reqbd_sections");
        for (let i = 0; i < ReqBD_Tab.length; i++) {
          ReqBD_Tab[i].style.display = "none";
    }
    document.getElementById(Reqbutton_Name).style.display = "block";

    console.log(Reqbutton_Name)


// Get the container element
var rdbbtnContainer = document.getElementById("ReqBDBTNS");

// Get all buttons with class="btn" inside the container
var rbdbtns = rdbbtnContainer.getElementsByClassName("ReqBD_tab_btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var r = 0; r < rbdbtns.length; r++) {
  rbdbtns[r].addEventListener("click", function() {
    var current = document.getElementsByClassName("rbdactive");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" rbdactive", "");
    }

    // Add the active class to the current/clicked button
    this.className += " rbdactive";
  });
}  

    console.log("Finished Testing 123!")





   
 }
 $(document).ready(function(){
  document.getElementById("defaultOpen").click();  

});
$(document).ready(function(){
  document.getElementById("ReqBDdefault").click();
  document.getElementById("ReqBDdefault").click();

  

});
