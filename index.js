

var rnumber1 = Math.floor(Math.random()*6)+1;
var img1 = "images/dice"+rnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",img1);


var rnumber2 = Math.floor(Math.random()*6)+1;
var img2 = "images/dice"+rnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",img2);

var getPlayer1 = localStorage.getItem("splayer1");//fetching values from player.js.
var getPlayer2 = localStorage.getItem("splayer2");

var player1 =getPlayer1.slice(0,1).toUpperCase()+getPlayer1.slice(1,getPlayer1.length);
var player2 =getPlayer2.slice(0,1).toUpperCase()+getPlayer2.slice(1,getPlayer1.length);

document.querySelectorAll("p")[0].innerHTML=player1;
document.querySelectorAll("p")[1].innerHTML=player2;

if(rnumber1>rnumber2){
  document.querySelector("h1").innerHTML = "Hurrah!!! <br>"+player1+" Wins!🚩"
}
else if(rnumber1<rnumber2){
  document.querySelector("h1").innerHTML = "Hurrah!!! <br>"+player2+" Wins!🚩"
}
else{
  document.querySelector("h1").innerHTML = "Draw!"
}
