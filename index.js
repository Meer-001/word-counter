#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        name: "Sentences",
        type: "input",
        message: "To count the words, enter any sentence.",
    },
]);
let words = answers.Sentences.trim().split(" ");
console.log(words);
console.log(`Your sentense words count is ${words.length}`, "\n");
console.log(chalk.red("\n", "Developed by: Ahmer Shaikh", "\n"));
