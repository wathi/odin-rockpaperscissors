function getComputerChoice(){
    let radNum = Math.floor(Math.random() * 3);
    console.log(radNum);
    if (radNum == 0) {
        return "Rock";
    } else if (radNum == 1){
        return "Paper";
    } else if (radNum == 2){
        return "Scissors";
    }
}

console.log(getComputerChoice());