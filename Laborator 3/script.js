function calculateSum(a, b) {
    return a + b;
}

console.log(calculateSum(5, 3));
console.log(calculateSum(10, 7));

const student = {
    name: "Virgiliu",
    age: 17,
    grade: 8,

    introduce: function () {
        console.log("Sunt " + this.name + " si am " + this.age + " ani.");
    }
};

student.introduce();

student.grade = 9;

console.log("Nota noua:", student.grade);

const gameScore = {
    player: 0,
    computer: 0,
    draws: 0,

    displayScore: function () {
        return "Tu: " + this.player +
            " | Calculator: " + this.computer +
            " | Egalitati: " + this.draws;
    }
};

function computerChoice() {

    const choices = ["piatra", "hartia", "foarfeca"];

    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

function playGame(playerChoice) {

    const computer = computerChoice();

    let result = "";

    if (playerChoice === computer) {

        result = "Egalitate!";
        gameScore.draws++;

    } else if (
        playerChoice === "piatra" && computer === "foarfeca" ||
        playerChoice === "foarfeca" && computer === "hartia" ||
        playerChoice === "hartia" && computer === "piatra"
    ) {

        result = "Ai castigat!";
        gameScore.player++;

    } else {

        result = "Calculatorul a castigat!";
        gameScore.computer++;
    }

    document.getElementById("alegereJucator").textContent =
        "Alegerea ta: " + playerChoice;

    document.getElementById("alegereCalculator").textContent =
        "Alegerea calculatorului: " + computer;

    document.getElementById("rezultat").textContent =
        "Rezultat: " + result;

    document.getElementById("scor").textContent =
        gameScore.displayScore();

    alert(gameScore.displayScore());
}

document.getElementById("piatra").addEventListener("click", function () {
    playGame("piatra");
});

document.getElementById("hartia").addEventListener("click", function () {
    playGame("hartia");
});

document.getElementById("foarfeca").addEventListener("click", function () {
    playGame("foarfeca");
});