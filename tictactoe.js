

const gameboard = (() => {

    userTurn = "Naughts";
    userText = "o";
    let gamescore = ["", "", "", "", "", "", "", "", ""];

    // let gamestatus = "";

    // Module for the gameboard object
    // displayGame(gamescore);

    const switchUser = () => {
        if (userTurn === "Naughts") {
            userTurn = "Crosses";
            userText = "x";
        } else if (userTurn === "Crosses") {
            userTurn = "Naughts";
            userText = "o";
        }
    } 

    const winnerCheck = () => {

        gamescore = gameboard.gamescore;

        const winner = document.querySelector(".winner");
        // horizontal win
        if ((gamescore[0] === "x" && gamescore[1] === "x" && gamescore[2] === "x") || (gamescore[0] === "o" && gamescore[1] === "o" && gamescore[2] === "o")) {
            let displayWinner = userTurn + " is the Winner!";
            winner.textContent = displayWinner;
            // user1.wins += user1.wins;
        } else if ((gamescore[3] === "x" && gamescore[4] === "x" && gamescore[5] === "x") || (gamescore[3] === "o" && gamescore[4] === "o" && gamescore[5] === "o")) {
            let displayWinner = userTurn + " is the Winner!";
            winner.textContent = displayWinner;
        } else if ((gamescore[6] === "x" && gamescore[7] === "x" && gamescore[8] === "x") || (gamescore[6] === "o" && gamescore[7] === "o" && gamescore[8] === "o")) {
            let displayWinner = userTurn + " is the Winner!";
            winner.textContent = displayWinner;
        } else if ((gamescore[0] === "x" & gamescore[3] === "x" && gamescore[6] === "x") || (gamescore[0] === "o" && gamescore[3] === "o" && gamescore[6] === "o")) {
            let displayWinner = userTurn + " is the Winner!";
            winner.textContent = displayWinner;
        } else if ((gamescore[1] === "x" && gamescore[4] === "x" && gamescore[7] === "x") || (gamescore[1] === "o" && gamescore[4] === "o" && gamescore[7] === "o")) {
            let displayWinner = userTurn + " is the Winner!";
            winner.textContent = displayWinner;
        } else if ((gamescore[2] === "x" && gamescore[5] === "x" && gamescore[8] === "x") || (gamescore[2] === "o" && gamescore[5] === "o" && gamescore[8] === "o")) {
            let displayWinner = userTurn + " is the Winner!";
            winner.textContent = displayWinner;
        } else if ((gamescore[0] === "x" && gamescore[4] === "x" && gamescore[8] === "x") || (gamescore[0] === "o" && gamescore[4] === "o" && gamescore[8] === "o")) {
            let displayWinner = userTurn + " is the Winner!";
            winner.textContent = displayWinner;
        } else if ((gamescore[2] === "x" && gamescore[4] === "x" && gamescore[6] === "x") || (gamescore[2] === "o" && gamescore[4] === "o" && gamescore[6] === "o")) {
            let displayWinner = userTurn + " is the Winner!";
            winner.textContent = displayWinner;
        } else if ((gamescore[0] !== "" && gamescore[1] !== "" && gamescore[2] !== "" && gamescore[3] !== "" && gamescore[4] !== "" && gamescore[5] !== "" && gamescore[6] !== "" && gamescore[7] !== "" && gamescore[8] !== "")) {
            let displayWinner = "The game is a draw!";
            winner.textContent = displayWinner;
        }
    }

    return {gamescore, switchUser, winnerCheck};

})();

// const Player = () => {
//     let wins = 0;
// return {name, wins}
// }

const addtile = document.querySelectorAll(".tile");
addtile.forEach((tile) => {
    tile.addEventListener("click", (e) => {

            gameboard.gamescore.splice(tile.id, 1, userText);
            tile.textContent = gameboard.gamescore[tile.id];
            tile.disabled = true;
            gameboard.winnerCheck();

            const winner = document.querySelector(".winner");
            if (winner.textContent !== "") {
                addtile.forEach((tile) => {
                    tile.disabled = true;
                })
            } else {
                gameboard.switchUser(); 
            }
        })
})

function resetBoard() {
    gameboard.gamescore = ["", "", "", "", "", "", "", "", ""];
    userTurn = "Naughts";
    userText = "o";
    addtile.forEach((tile) => {
        tile.textContent = "";
        tile.disabled = false;
    })
    const winner = document.querySelector(".winner");
    winner.textContent = "";
}

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", resetBoard);


// need a user system, allowing for the game to recognise who's winning and which user has how many wins. 
// create inputs to determine 2 users and translate those to objects using a factory function.
// somehow incoorporate these user objects into my code, perhaps have some code saying who's turn it is: "it's user1's turn!" "user2 wins!" and also keep track of how many wins each player has.
