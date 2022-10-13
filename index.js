import chalk from "chalk";
import { createSpinner } from "nanospinner";
import ReadLine from "readline-sync";


// Welcome
function Welcome() {

  let username = ReadLine.question('Tell me your name bro')
  console.log(chalk.blue.bgGray("Hello") + " " + username)

  let QnA = [
    {
      'question': "John Wick is known by a monstrous nickname. What is it?",
      'ans': "Baba Yaga"
    },
    {
      'question': "The death of John Wick's dog sets off the events of the movie. What was his dog's name?",
      'ans': "Daisy"
    },
    {
      'question': 'Part 3 is subtitled "Parabellum" What does the Latin phrase that word comes from mean?',
      'ans': "If you want peace, prepare for war"
    },
    {
      'question': "What kind of car do they steal from John in the first movie?",
      'ans': "1969 Mustang"
    },
    {
      'question': 'John Wick has a tattoo that reads "Fortis Fortuna Adiuvat." Where on his body is the tattoo?',
      'ans': "His Back"
    }
  ]
  let score = 0
  const spinner = createSpinner('Checking Answer')
  QnA.forEach((val) => {
    var ans = ReadLine.question(val.question)
    if (ans.toUpperCase() == val.ans.toUpperCase()) {
      score += 1

      setTimeout(() => {
        spinner.success()
      }, 500)
    }
    else {
      setTimeout(() => {
        spinner.error()
      }, 500)
    }
  })
  setTimeout(() => {
    console.log(`${username} your Score is ${score}/5`)
  }, 1000)


}

Welcome()
