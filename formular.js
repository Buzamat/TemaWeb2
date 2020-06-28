function home(){

    window.location.replace("home.html");
}
  
  function showadress(){

    if(document.getElementById('acasa').selected==true)
    document.getElementById('adresa').style.display='inline';
    else{document.getElementById('adresa').style.display='none';}

  }
  
  function showb(){
    if(document.getElementById('age').checked==1)
document.getElementById('buybtn').style.display='inline';
else{document.getElementById('buybtn').style.display='none';}

  }
  
  
  function domn(){
    document.getElementById('sex').textContent="Sunteti domnul:"
}
  
function doamna(){
    document.getElementById('sex').textContent="Sunteti doamna:"
}
  
  
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



