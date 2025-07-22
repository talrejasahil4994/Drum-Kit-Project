
// document.querySelectorAll("button")[0].addEventListener("click",function () {
//     alert("i got clicked");
// });
// document.querySelectorAll("button")[1].addEventListener("click",function () {
//     alert("i got clicked");
// });
// document.querySelectorAll("button")[2].addEventListener("click",function () {
//     alert("i got clicked");
// });
// document.querySelectorAll("button")[3].addEventListener("click",function () {
//     alert("i got clicked");
// });
// document.querySelectorAll("button")[4].addEventListener("click",function () {
//     alert("i got clicked");
// });
// document.querySelectorAll("button")[5].addEventListener("click",function () {
//     alert("i got clicked");
// });
// document.querySelectorAll("button")[6].addEventListener("click",function () {
//     alert("i got clicked");
// });
var size=document.querySelectorAll(".drum").length;

for( var i=0;i<size;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    var buttoninnerHTML=this.innerHTML;
    makesound(buttoninnerHTML);
    buttonAnimation(buttoninnerHTML);
});
}

document.addEventListener("keydown",function (eve) {
    var keq=eve.key;
    makesound(keq);
    buttonAnimation(keq);
});
function makesound(keq){
    switch (keq) {
    case "w":
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

        case "a":
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "s":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "d":
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
        case "j":
        var crash=new Audio("sounds/crash.mp3");
       crash.play();
        break;
        case "k":
        var k=new Audio("sounds/kick-bass.mp3");
        k.play();
        break;
        case "l":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
 
    default:
        console.log(keq);
        break;
 }
}
function buttonAnimation(currkey){
    var activebutton=document.querySelector("."+currkey);
    activebutton.classList.toggle(".pressed");
}