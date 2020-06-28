
    var bgaudio = new Audio("rick.mp3");
    bgaudio.setAttribute("id", "m3");
    bgaudio.play();
    bgaudio.volume="0";

var marime = localStorage.getItem("marimetext");
var marimei= localStorage.getItem("marimeindex");
var texte = document.getElementsByClassName("footer-text");
//setez marimea fiecarui element de text sa fie ca in local storage
for(var i = 0; i < texte.length; i++)
  texte[i].style.fontSize = marime+"px";
document.getElementById("txtsize").selectedIndex=marimei;

window.onload = hideimg;
clicked=0;
var imagini = document.getElementsByClassName("store-item");
//hide images
function hideimg() {
    if(clicked==0){
    document.getElementById("hideimages").textContent="Show";
clicked=1;


for(var i = 0; i < imagini.length; i++)
    imagini[i].style.visibility = "hidden";
    bgaudio.volume="0";
}

else {
    document.getElementById("hideimages").textContent="Hide";
clicked=0;

for(var i = 0; i < imagini.length; i++)
    imagini[i].style.visibility = "visible";
    bgaudio.volume="0.3";

}

  }




  //background color changer

function backgroundc(){
var bcol = document.getElementById("bcolor").value;
if(isColor(bcol))document.body.style.background = bcol;
else{alert("That is a naughty color!");}

}

  //verific daca culoarea aleasa exista
function isColor(strColor){
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
  }


//drop down menu on click dreapta
  if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
    posx = e.pageX;
    posy = e.pageY;
    e.preventDefault();
    var d = document.getElementById('drop');
    d.style.position = "absolute";
    d.style.left = posx+'px';
    d.style.top = posy-49+'px';
    d.style.visibility='visible';
    d.style.display='block';


  }, false);
}
//functie sa scap de meniu cand nu mai am hover
function deletethis(){
    var d = document.getElementById('drop');
    d.style.display='none';

}


//functie care ia date de intrare din select si le salveaza in local storage, apoi trece prin fiecare text si il schimba
function test(){
  var marime = document.getElementById("txtsize").value;
  var marimei= document.getElementById("txtsize").selectedIndex;
  localStorage.setItem("marimetext", marime);
  localStorage.setItem("marimeindex", marimei);
  var texte = document.getElementsByClassName("footer-text");
  for(var i = 0; i < texte.length; i++)
    texte[i].style.fontSize = marime+"px";
}

        //functie care reseteaza marimea textului si sterge datele din local storage
function txtsizereset(){
  localStorage.removeItem("marimetext");
  localStorage.removeItem("marimeindex");
  location.reload();}

  function formular(){

    window.location.replace("formular.html");
  }