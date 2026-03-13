

let btnPlayer = document.querySelector(".outCome");

let btnPlay = document.querySelector(".play");


btnPlay.addEventListener("click" , playGame);

function playGame(){

let dice1;
let dice2; 
let imagePath1 = " "
let imagePath2 = " ";
let ranNum1 = Math.floor(Math.random() * 6 + 1);

let ranNum2 = Math.floor(Math.random() * 6 + 1);

imagePath1 = `./Utill/Images/dice${ranNum1}.png`;
imagePath2 = `./Utill/Images/dice${ranNum2}.png`;

SetDiceImage(imagePath1 , imagePath2);
getWinner(ranNum1,ranNum2);
}

function SetDiceImage(a , b){

document.querySelector(".diceImage1").setAttribute("src",a)
document.querySelector(".diceImage2").setAttribute("src",b)

}

function getWinner(a,b){
 if (a > b){ 
 btnPlayer.innerHTML = "🚩 Player 1 Wins!"
 }
 else if (a < b ){
 btnPlayer.innerHTML = "🚩 Player 2 Wins!"
 }
 else if (a == b)
 {
 btnPlayer.innerHTML = "Draw!"
 }
}