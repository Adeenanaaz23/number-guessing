let number;
let attempts;
let highScore = null;

// ▶ START GAME
function startGame() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    newGame();
}

// 🔄 NEW GAME
function newGame() {
    number = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("guess").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("attemptInfo").innerHTML = "";
    document.getElementById("newGameBtn").style.display = "none";
}

// 🎮 CHECK GUESS
function checkGuess() {
    let guess = Number(document.getElementById("guess").value);
    let result = document.getElementById("result");

    if (!guess) {
        result.innerHTML = "⚠️ Please enter a number!";
        return;
    }

    attempts++;

    let diff = Math.abs(number - guess);

    // ✅ CORRECT
    if (guess === number) {

        let grade = "";

        if (attempts <= 10) grade = "🏆 Excellent!";
        else if (attempts <= 15) grade = "👍 Good!";
        else if (attempts <= 20) grade = "🙂 Fair";
        else grade = "😅 Try Again";

        result.innerHTML = `🎉 Correct! You won in ${attempts} attempts<br>${grade}`;

        // 🏅 HIGH SCORE
        if (highScore === null || attempts < highScore) {
            highScore = attempts;
            document.getElementById("highScore").innerHTML = `🏅 New High Score: ${highScore}`;
        } else {
            document.getElementById("highScore").innerHTML = `🏅 High Score: ${highScore}`;
        }

        document.getElementById("newGameBtn").style.display = "block";
    }

    // 🔥 TOO CLOSE
    else if (diff <= 5 && guess > number) {
        result.innerHTML = "🔥 Too Close! (📉 High)";
    }
    else if (diff <= 5 && guess < number) {
        result.innerHTML = "🔥 Too Close! (📈 Low)";
    }

    // 📉 NORMAL HIGH
    else if (guess > number) {
        result.innerHTML = "📉 Too High!";
    }

    // 📈 NORMAL LOW
    else {
        result.innerHTML = "📈 Too Low!";
    }

    document.getElementById("attemptInfo").innerHTML = `Attempts: ${attempts}`;
}