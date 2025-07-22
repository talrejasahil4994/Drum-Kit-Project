var random=Math.random();
var random2=Math.random();
random=random*6;
random2=random2*6;
random=Math.floor(random)+1;
random2=Math.floor(random2)+1;
document.querySelector(".img1").setAttribute("src","./images/dice"+random+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+random2+".png");
if(random===random2)
document.querySelector("h1").innerHTML="Draw!";
else if(random>random2)
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
else if(random<random2)
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
