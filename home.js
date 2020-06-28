

var bgaudio = new Audio("sound.mp3");
bgaudio.setAttribute("id", "m3");
bgaudio.play();
bgaudio.volume="0";


var myVar = setInterval(timer, 1000);

//start up...
window.onload = start;
function start(){

    if(localStorage.getItem("logged")==1){
    document.getElementById('thome').textContent="Salut, " + localStorage.getItem("username");}


}


    


//functie pentru a sterge toate datele din local storage (doar pentru a folosi .clear, nu as da clear normal...)
function restart(){
    localStorage.clear();
    location.reload();}
      
//functie pentru a da log off
    function logoff(){
    localStorage.removeItem("username");
    localStorage.setItem("logged", 0);
    location.reload();}




//functie pentru ceasul din footer...trebuia sa folosesc interval cumva :(
    function timer() {
        var data = new Date();
        var timpul = data.toLocaleTimeString();
        document.getElementById("timp").innerHTML = timpul;
      }
      
      function stoptimer() {
        clearInterval(myVar);

      }
