
var bg=localStorage.getItem("backg");
//if(bg=="dark"){document.getElementById('ldmode').textContent="Light Mode";}
//if(bg=="light"){document.getElementById('ldmode').textContent="Dark Mode";}


//la start up apelez aceasta functie
window.onload = start;
function start(){


    if(localStorage.getItem("backg")){} else {localStorage.setItem("backg", "dark");}
    //if(bg=="dark"){document.body.style.backgroundImage = "url('../images/bgdark.jpg')";}
    if(bg=="dark"){document.body.style.backgroundImage = "url('https://i.imgur.com/Sc0fvSu.jpg')";}
    if(bg=="light"){document.body.style.backgroundImage = "url('https://i.imgur.com/okdVpQ2.jpg')";}

}

//schimb in light/dark mode
function lightdark(){
    if(bg=="dark"){localStorage.setItem("backg", "light");}
    if(bg=="light"){localStorage.setItem("backg", "dark");}
    location.reload();}

    //sterg toate datele din local storage
function restart(){
    localStorage.clear();
    location.reload();}
        //sterg datele de login din local storage
    function logoff(){
    localStorage.removeItem("username");
    localStorage.setItem("logged", 0);
    location.reload();}
