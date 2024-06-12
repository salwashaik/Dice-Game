var randomNumber1=Math.random();
randomNumber1=Math.floor(Math.random()*6)+1;

var randomImage1="dice" +randomNumber1 +".png";
var imageSource="images/" +randomImage1;
var image=document.querySelectorAll("img")[0];
image.setAttribute("src",imageSource);
var randomNumber2=Math.random();
randomNumber2=Math.floor(Math.random()*6)+1;

var randomImage2="dice"+randomNumber2+".png";
var imageSource2="images/"+randomImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imageSource2);

if(randomImage1 > randomImage2){
  document.querySelector("h1").innerHTML="🏁Player1 wins!!!";
}
else if (randomImage2 > randomImage1) {
  document.querySelector("h1").innerHTML="🏁Player2 wins!!!";
}
else {
  document.querySelector("h1").innerHTML="Draw";
}
