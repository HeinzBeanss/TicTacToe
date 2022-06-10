const Player = (name, userTurn) => {
    let wins = 0;
        return {name, userTurn, wins}
}

const gameboard = (() => {

    userTurn = "p1turn";
    userText = "o";
    let gamescore = ["", "", "", "", "", "", "", "", ""];

    const winnerCheck = () => {

        let tempWinner = "";

        gamescore = gameboard.gamescore;

        const winner = document.querySelector(".winner");
        // horizontal win
        if ((gamescore[0] === "x" && gamescore[1] === "x" && gamescore[2] === "x") || (gamescore[0] === "o" && gamescore[1] === "o" && gamescore[2] === "o")) {
            if (userTurn === "p1turn") {
                tempWinner = game.player1.name;
                game.player1.wins += 1;
            } else if (userTurn === "p2turn") {
                tempWinner = game.player2.name;
                game.player2.wins += 1;
            }
            let displayWinner = tempWinner + " is the Winner!";
            winner.textContent = displayWinner;
            displayScoreboard();
            // user1.wins += user1.wins;
        } else if ((gamescore[3] === "x" && gamescore[4] === "x" && gamescore[5] === "x") || (gamescore[3] === "o" && gamescore[4] === "o" && gamescore[5] === "o")) {
            if (userTurn === "p1turn") {
                tempWinner = game.player1.name;
                game.player1.wins += 1;
            } else if (userTurn === "p2turn") {
                tempWinner = game.player2.name;
                game.player2.wins += 1;
            }
            let displayWinner = tempWinner + " is the Winner!";
            winner.textContent = displayWinner;
            displayScoreboard();
        } else if ((gamescore[6] === "x" && gamescore[7] === "x" && gamescore[8] === "x") || (gamescore[6] === "o" && gamescore[7] === "o" && gamescore[8] === "o")) {
            if (userTurn === "p1turn") {
                tempWinner = game.player1.name;
                game.player1.wins += 1;
            } else if (userTurn === "p2turn") {
                tempWinner = game.player2.name;
                game.player2.wins += 1;
            }
            let displayWinner = tempWinner + " is the Winner!";
            winner.textContent = displayWinner;
            displayScoreboard();
        } else if ((gamescore[0] === "x" & gamescore[3] === "x" && gamescore[6] === "x") || (gamescore[0] === "o" && gamescore[3] === "o" && gamescore[6] === "o")) {
            if (userTurn === "p1turn") {
                tempWinner = game.player1.name;
                game.player1.wins += 1;
            } else if (userTurn === "p2turn") {
                tempWinner = game.player2.name;
                game.player2.wins += 1;
            }
            let displayWinner = tempWinner + " is the Winner!";
            winner.textContent = displayWinner;
            displayScoreboard();
        } else if ((gamescore[1] === "x" && gamescore[4] === "x" && gamescore[7] === "x") || (gamescore[1] === "o" && gamescore[4] === "o" && gamescore[7] === "o")) {
            if (userTurn === "p1turn") {
                tempWinner = game.player1.name;
                game.player1.wins += 1;
            } else if (userTurn === "p2turn") {
                tempWinner = game.player2.name;
                game.player2.wins += 1;
            }
            let displayWinner = tempWinner + " is the Winner!";
            winner.textContent = displayWinner;
            displayScoreboard();
        } else if ((gamescore[2] === "x" && gamescore[5] === "x" && gamescore[8] === "x") || (gamescore[2] === "o" && gamescore[5] === "o" && gamescore[8] === "o")) {
            if (userTurn === "p1turn") {
                tempWinner = game.player1.name;
                game.player1.wins += 1;
            } else if (userTurn === "p2turn") {
                tempWinner = game.player2.name;
                game.player2.wins += 1;
            }
            let displayWinner = tempWinner + " is the Winner!";
            winner.textContent = displayWinner;
            displayScoreboard();
        } else if ((gamescore[0] === "x" && gamescore[4] === "x" && gamescore[8] === "x") || (gamescore[0] === "o" && gamescore[4] === "o" && gamescore[8] === "o")) {
            if (userTurn === "p1turn") {
                tempWinner = game.player1.name;
                game.player1.wins += 1;
            } else if (userTurn === "p2turn") {
                tempWinner = game.player2.name;
                game.player2.wins += 1;
            }
            let displayWinner = tempWinner + " is the Winner!";
            winner.textContent = displayWinner;
            displayScoreboard();
        } else if ((gamescore[2] === "x" && gamescore[4] === "x" && gamescore[6] === "x") || (gamescore[2] === "o" && gamescore[4] === "o" && gamescore[6] === "o")) {
            if (userTurn === "p1turn") {
                tempWinner = game.player1.name;
                game.player1.wins += 1;
            } else if (userTurn === "p2turn") {
                tempWinner = game.player2.name;
                game.player2.wins += 1;
            }
            let displayWinner = tempWinner + " is the Winner!";
            winner.textContent = displayWinner;
            displayScoreboard();
        } else if ((gamescore[0] !== "" && gamescore[1] !== "" && gamescore[2] !== "" && gamescore[3] !== "" && gamescore[4] !== "" && gamescore[5] !== "" && gamescore[6] !== "" && gamescore[7] !== "" && gamescore[8] !== "")) {
            let displayWinner = "The game is a draw!";
            winner.textContent = displayWinner;
        }
    }

    const p1wins = document.querySelector("#p1wins");
    const p2wins = document.querySelector("#p2wins");

    function displayScoreboard() {

        p1wins.textContent = game.player1.name + " has " + game.player1.wins + " wins!";
        p2wins.textContent = game.player2.name + " has " + game.player2.wins + " wins!";
    }

    function displayTurn() {
        const playerturn = document.querySelector(".playerturn");
        if (userTurn === "p1turn") {
            playerturn.textContent = "It's " + game.player1.name + "'s turn!"
        } else if (userTurn === "p2turn") {
            playerturn.textContent = "It's " + game.player2.name + "'s turn!"
        }
    }

    return {gamescore, winnerCheck, displayScoreboard, displayTurn};

})();

const game = (() => {

    const player1textbox = document.querySelector("#user1");
    const player2textbox = document.querySelector("#user2");

    const player1 = Player("Player 1", "Naughts");
    const player2 = Player("Player 2", "Crosses");

    const submitusers = document.querySelector(".submitusers");
    submitusers.addEventListener("click", submitUsers);

    function updateUsers() {

        const p1guidetext = document.querySelector("#player1text");
        const p2guidetext = document.querySelector("#player2text");

        p1guidetext.textContent = player1.name + " is Naughts!";
        p2guidetext.textContent = player2.name + " is Crosses!";

        gameboard.displayScoreboard();

    }

    function submitUsers() {
        player1.name = player1textbox.value;
        player2.name = player2textbox.value;
        player1textbox.setAttribute("disabled", "");
        player2textbox.setAttribute("disabled", "");
        submitusers.disabled = true;
        updateUsers();
        gameboard.displayTurn();

    }

    function switchUser() {
        if (userTurn === "p1turn") {
            userTurn = "p2turn";
            userText = "x"
        } else if (userTurn === "p2turn") {
            userTurn = "p1turn";
            userText = "o"
        }
    }

    return {switchUser, updateUsers, player1, player2, submitusers}

})();

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
                game.switchUser(); 
                gameboard.displayTurn();
            }
        })
})

function resetBoard() {
    gameboard.gamescore = ["", "", "", "", "", "", "", "", ""];

    if (userTurn === "p2turn") {
        userTurn = "p1turn"
        userText = "o"
    } else if (userTurn === "p1turn") {
        userTurn = "p2turn"
        userText = "x"
    };
    gameboard.displayTurn();
    addtile.forEach((tile) => {
        tile.textContent = "";
        tile.disabled = false;
    })
    const winner = document.querySelector(".winner");
    winner.textContent = "";
}

function resetGame() {

    game.submitusers.disabled = false;
    const player1textbox = document.querySelector("#user1");
    const player2textbox = document.querySelector("#user2");
    player1textbox.removeAttribute("disabled");
    player2textbox.removeAttribute("disabled");
    gameboard.gamescore = ["", "", "", "", "", "", "", "", ""];
    userTurn = "p1turn";
    userText = "o";
    addtile.forEach((tile) => {
        tile.textContent = "";
        tile.disabled = false;
    })
    const winner = document.querySelector(".winner");
    winner.textContent = "";
    game.player1.name = "Player 1";
    game.player2.name = "Player 2";
    game.player1.wins = 0;
    game.player2.wins = 0;
    game.updateUsers();
    gameboard.displayScoreboard();
    gameboard.displayTurn();
    
}

const resetboard = document.querySelector(".resetboard");
resetboard.addEventListener("click", resetBoard);

const resetgame = document.querySelector(".resetgame")
resetgame.addEventListener("click", resetGame);

// Maybe make mobile friendly.
// Maybe make some AI to be user 2.