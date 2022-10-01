import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import ReadLine from "readline-sync";


// Welcome
function Welcome() {
    // figlet("WELCOME", {
    //     horizontalLayout: 'full',
    //     width: 80,
    //     whitespaceBreak: true
    // },function (err, data) {
    //   if (err) {
    //     console.log("kaboom");
    //     return;
    //   }
    // chalkAnimation.rainbow(data);

      // setTimeout(() => {
        let username = ReadLine.question('Tell me your name bro')
        console.log(chalk.blue.bgGray("Hello")+" "+username)
    // }, 1000);
    
    // });    

// Play

let QnA = [
    { 
        'question':"John Wick is known by a monstrous nickname. What is it?",
        'ans':"Baba Yaga"
    },
    { 
        'question':"The death of John Wick's dog sets off the events of the movie. What was his dog's name?",
        'ans':"Daisy"
    },
    { 
        'question':'Part 3 is subtitled "Parabellum" What does the Latin phrase that word comes from mean?',
        'ans':"If you want peace, prepare for war"
    },
    { 
        'question':"What kind of car do they steal from John in the first movie?",
        'ans':"1969 Mustang"
    },
    { 
        'question':'John Wick has a tattoo that reads "Fortis Fortuna Adiuvat." Where on his body is the tattoo?',
        'ans':"His Back"
    }
]
let score =0
    const spinner = createSpinner('Checking Answer')
    QnA.forEach((val)=>{
        var ans = ReadLine.question(val.question)
        if (ans.toUpperCase() == val.ans.toUpperCase()){
            score+=1

            setTimeout(() => {
                spinner.success()
              }, 1000)
        }
        else{
            setTimeout(() => {
                spinner.error()
              }, 1000)
        }
    })

}

Welcome()
