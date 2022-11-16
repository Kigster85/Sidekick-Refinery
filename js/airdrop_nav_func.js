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
 