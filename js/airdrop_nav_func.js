function airdrop_Tab(button_Name, event) 
{
    console.log("Testing 123!")
   console.log(event, '<<<<- EVENT!')
    const airdrop = document.getElementsByClassName("airdrop_sections");
        for (let i = 0; i < airdrop.length; i++) {
      airdrop[i].style.display = "none";
    }
    document.getElementById(button_Name).style.display = "block";

    let prevButton = null;
    const element = document.getElementById("airdrop-section_btns");
    element.addEventListener('click',(e) =>{
        const isButton = e.target.nodeName === 'BUTTON';
        if (!isButton){
            return;
        }
        e.target.classList.add('air_drop_tab_btn_active');
        if(prevButton !== null){
            prevButton.classList.remove('air_drop_tab_btn_active')
        }
        prevButton = e.target;
    })

      document.getElementById(button_Name).style.display = "block";

    console.log(element)
    console.log("Finished Testing 123!")





   
 }
 