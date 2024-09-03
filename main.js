import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "ENTER YOUR SENTENCE TO COUNT A WORDS",
    },
]);
const words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`YOUR SENTENCE HAS A ${words.length} WORDS`);
