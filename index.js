#! /usr/bin/env node
import inquirer from "inquirer";
//1 computer will generate a number
//2 user input guessed number
//3 user and computer generated number comparing
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    { name: "userGuessedNumb",
        type: "number",
        message: "please guess a number"
    },
]);
if (answers.userGuessedNumb === randomNumber) {
    console.log("Congratulation you guess a right number!");
}
else {
    console.log("moye moye you guessed wrong number");
}
