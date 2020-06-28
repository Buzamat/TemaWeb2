var bgaudio = new Audio("sound.mp3");
bgaudio.setAttribute("id", "m3");
bgaudio.play();
bgaudio.volume="0.05";
window.onload = start;

//daca sunt logat, ma da direct pe homepage
function start(){
var on = localStorage.getItem("logged");
if(on==1){
location.replace("home.html");

document.getElementById('tindex')= localStorage.getItem("username");}

}




//functie pentru a adauga trailerul
  function trailer(asta) {
    var mov = document.createElement("VIDEO");
  

      mov.setAttribute("src","trailer.mp4");
      mov.setAttribute("width", "320");
      mov.setAttribute("height", "240");
      mov.setAttribute("controls", "controls");
    document.querySelector('footer').appendChild(mov);

  }

  
//functie pentru a lua input de la slider si a modifica volumul
function changevolume(){
var vol = document.getElementById("happy").value;
  bgaudio.volume=vol;
	}
	



//restart, sterge toate datele
function restart(){
localStorage.clear();
location.reload();}
	//log off, sterge datele de log in actuale
function logoff(){
localStorage.removeItem("username");
localStorage.setItem("logged", 0);
location.reload();}
	
//nu sunt sigur daca mai are vre-un rost acest cod, dar imi este frica sa il sterg...
function pickname(){
var name= 'salut';
document.getElementById("user").value=name;
}

//functie care salveaza user-ul
function greet(){
    var user = document.getElementById("user").value;
	localStorage.setItem("logged", 1);
	localStorage.setItem("username", user);
}


//functie de a a da greet la user, ar trebui sa schimbe titlul tabului cu "salut ___". Am oprit-o.
function saveuser(){

  localStorage.setItem("logged", 1);
  localStorage.setItem("username", user);
  document.getElementById('titlu').textContent = document.getElementById('titlu').textContent + 'Hello, ' + localStorage.getItem("username");
}