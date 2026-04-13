let number, attempts = 0;
let min = 1, max = 100;

// Screen Switch
function show(screen) {
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("scores").style.display = "none";
    document.getElementById("options").style.display = "none";

    document.getElementById(screen).style.display = "block";
}

// New Game
function newGame() {
    number = Math.floor(Math.random() * (max - min + 1)) + min;
    attempts = 0;

    localStorage.setItem("savedNumber", number);
    localStorage.setItem("savedAttempts", attempts);

    show("game");
}

// Resume Game
function resumeGame() {
    let saved = localStorage.getItem("savedNumber");

    if (!saved) {
        alert("No saved game!");
        return;
    }

    number = Number(saved);
    attempts = Number(localStorage.getItem("savedAttempts"));

    show("game");
}

// Guess Logic
function checkGuess() {
    let guess = Number(document.getElementById("guess").value);
    attempts++;

    localStorage.setItem("savedAttempts", attempts);

    if (guess > number) {
        result.innerText = "Too High";
    } 
    else if (guess < number) {
        result.innerText = "Too Low";
    } 
    else {
        result.innerText = "🎉 Correct! Attempts: " + attempts;

        saveScore(attempts);

        localStorage.removeItem("savedNumber");
        localStorage.removeItem("savedAttempts");
    }
}

// Save Score
function saveScore(score) {
    let scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.push(score);
    scores.sort((a,b)=>a-b);
    localStorage.setItem("scores", JSON.stringify(scores));
}

// Show High Scores
function showHighScores() {
    let scores = JSON.parse(localStorage.getItem("scores")) || [];
    let list = document.getElementById("scoreList");
    list.innerHTML = "";

    scores.forEach(s => {
        let li = document.createElement("li");
        li.innerText = "Attempts: " + s;
        list.appendChild(li);
    });

    show("scores");
}

// Options
function showOptions() {
    show("options");
}

// Theme
function setTheme(mode) {
    if (mode === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}

// Clear Scores
function clearScores() {
    localStorage.removeItem("scores");
    alert("Scores Cleared!");
}

// Change Range
function changeRange() {
    min = Number(prompt("Enter Min Number:", 1));
    max = Number(prompt("Enter Max Number:", 100));
}

// Back to Menu
function goMenu() {
    show("menu");
}