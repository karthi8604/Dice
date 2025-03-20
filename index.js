var pl1 = Math.floor(Math.random()*6)+1;
var pl2 = Math.floor(Math.random()*6)+1;
console.log(pl1 + " " + pl2);

document.querySelector(".img1").setAttribute("src",`./images/dice${pl1}.png`);
document.querySelector(".img2").setAttribute("src",`./images/dice${pl2}.png`);

if(pl1 > pl2){
    document.querySelector(".container h1").textContent = "Player 1 Wins!";
} else if(pl1 < pl2){
    document.querySelector(".container h1").textContent = "Player 2 Wins!";
} else {
    document.querySelector(".container h1").textContent = "Draw!";
}
