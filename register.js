//incarc dinamic audio pe background
var bgaudio = new Audio("sound.mp3");
bgaudio.setAttribute("id", "m3");
bgaudio.play();
bgaudio.volume="0";


var myname = document.getElementById("user");
myname.addEventListener('keypress', checkName, false);

function checkName(evt) {
    var charCode = evt.charCode;
    if (charCode != 0) {
      if (charCode<65 || charCode>122 || (charCode>90&&charCode<97)) {
        evt.preventDefault();
        displayWarning("Please don't use numbers or symbols. <br> Sorry Elon :(");
    }
}

  }


  var warningTimeout;
  var warningBox = document.createElement("warning");
  warningBox.className = "warning";
  
  function displayWarning(msg) {
    warningBox.innerHTML = msg;
  
    if (document.body.contains(warningBox)) {
      window.clearTimeout(warningTimeout);
    } else {
 
      myname.parentNode.insertBefore(warningBox, myname.nextSibling);
    }
  
    warningTimeout = window.setTimeout(function() {
        warningBox.parentNode.removeChild(warningBox);
        warningTimeout = -1;
      }, 2000);
  }




window.onload = start;
//functie pe care o pot apela cand porneste pagina, folosesc valoarea salvata in
// local storage sa vad daca sunt logat si sa redirectionez la alta pagina
function start(){
var on = localStorage.getItem("logged");
if(on==1){
location.replace("home.html");
}
}


//functie pentru a adauga dinamic un video cand apas un buton
  function trailer(asta) {
    var mov = document.createElement("VIDEO");
      mov.setAttribute("src","trailer.mp4");
      mov.setAttribute("width", "320");
      mov.setAttribute("height", "240");
      mov.setAttribute("controls", "controls");
    document.querySelector('footer').appendChild(mov);
    document.getElementById("trailerplay").remove();
  }


//modific proprietatea volume la muzica de fundal cu ajutorul unui slider
function changevolume(){
var vol = document.getElementById("volum").value;
  bgaudio.volume=vol;}
  


  //salvez in local storage datele
  function reg(){
    var pass=true;
    var parola = document.getElementById("pass").value;
    var mail = document.getElementById("email").value;
    var tara = document.getElementById("region").value;
    var over18 = document.getElementById("age").checked;
    var m = document.getElementById("male").checked;
    var f = document.getElementById("female").checked;
    var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    var checkpass=regex.test(parola);
    var verifica = mail.includes("@");

    //remember to add check for name

    if(checkpass==true){}else{
        Swal.fire({
            icon: 'error',
            title: 'Your password is weak bro',
            text: 'Does it even lift?',
            footer: 'Needs capital,numbers and over 6 characters.'
          });
        pass=false;}

    if(verifica==false){
        Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'it must contain the @ symbol',
        footer: 'Promise i will not send spam.'
      });pass=false;}


    if(m==false&&f==false){
        Swal.fire({
            icon: 'error',
            title: 'Choose a gender',
            text: 'it is 2020 everyone is doing it',
            footer: 'You have to check one.'
          });
          pass=false;}

    if(over18==false){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Come back when you are legal',
            footer: 'You are not over 18.'
          });
        pass=false;}


    if(pass==true){
    localStorage.setItem("logged", 1);
    localStorage.setItem("username", myname);
    location.replace("home.html");
    }

}


//ascult pentru "escape" key (cod 27) pentru a da back la log in page
document.onkeyup = function(evt) {
    if(evt.keyCode==27){location.replace("index.html");}

}


