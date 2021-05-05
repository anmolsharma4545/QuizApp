const quizData = [
    {
        question:"Q.1 What is the full form of js ?",
        a: "JavaScript",
        b: "Javastate",
        c: "Juniorscript",
        d: "Javasetup",
        ans: "opt1"
    },
    {
        question:"Q.2 Which is the correct syntax to declare a variable in javascript?",
        a: "var",
        b: "var a = ",
        c: "variable a",
        d: "variable a = ",
        ans: "opt2"
    },
    {
        question:"Q.3 Which Company developed JavaScript  ?",
        a: "Microsoft",
        b: "Oracle",
        c: "Netscape",
        d: "Google",
        ans: "opt3"
    },
    {
        question:"Q.4  which is the Error that come due to misuse of the command inside the HTML language  ?",
        a: "Load-Time",
        b: "Run-Time",
        c: "Logical",
        d: "Exception",
        ans: "opt2"
    },
    {
        question:"Q.5  Which of the following is not JavaScript Data Types?",
        a: "Undefined",
        b: "Number",
        c: "Boolean",
        d: "Float",
        ans: "opt4"
    },
    {
        question:"Q.6 Which one is the correct syntax to insert an element into an array??",
        a: "Array.pop()",
        b: "Array.map()",
        c: "Array.push()",
        d: "Array.reduce()",
        ans: "opt3"
    },
    {
        question:"Q.7 Which of the following is correct about features of JavaScript ?",
        a: "It can not Handle dates and time",
        b: "JavaScript is a object-based scripting language",
        c: "JavaScript is not interpreter based scripting language",
        d: "All of the Above",
        ans: "opt2"
    },
    {
        question:"Q.8  Which of the following is the correct syntax to display Letsfindcourse  in an alert box using JavaScript ?",
        a: "alert-box(Letsfindcourse)",
        b: "confirm(Letsfindcourse)", 
        c: "msg-box(Letsfindcourse)" ,
        d: "alert(Letsfindcourse)" ,
        ans: "opt4"
    },
    {
        question:"Q.9 Which of the following is not Javascript frameworks or libraries ?",
        a: "Polymer",
        b: "Meteor",
        c: "Cassandra",
        d: "jQuery",
        ans: "opt3"
    },
    {
        question:"Q.10 Why so JavaScript and Java have similar name ?",
        a: "JavaScript is a stripped-down version of Java",
        b: "JavaScript's syntax is loosely based on Java's",
        c: "They both originated on the island of Java",
        d: "None of the above",
        ans: "opt2"
    },
    {
        question:"Q.11 What is the original name of JavaScript ?",
        a: "LiveScript",
        b: "Escript",
        c: "Mocha",
        d: "JavaScript",
        ans: "opt3"
    },
    {
        question:"Q.12 Among the following, which one is a ternary operator in JavaScript ?",
        a: "#",
        b: "::",
        c: "&:",
        d: "?:",
        ans: "opt4"
    },
    {
        question:"Q.13 What are the three important manipulations done in a for loop on a loop variable in javascript ?",
        a: "the initialization, the Incrementation, and update",
        b: "the initialization, the test, and the update",
        c: "the initialization, the test, and Incrementation",
        d: "All of the Above",
        ans: "opt2"
    },
    {
        question:"Q.14 Among the keywords below, which one is not a statement ?",
        a: "if",
        b: "with",
        c: "debugging",
        d: "use strict",
        ans: "opt4"
    },
    {
        question:"Q.15 Which of the following function of Array object applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value ?",
        a: "pop()",
        b: "reduce()",
        c: "push()",
        d: "reduceRight()",
        ans: "opt4"
    },
    
];

const question = document.querySelector('.question');
const opt1 = document.querySelector('#opt1');
const opt2 = document.querySelector('#opt2');
const opt3 = document.querySelector('#opt3');
const opt4 = document.querySelector('#opt4');
const answers = document.querySelectorAll('.option');
const startBtn = document.querySelector('.start');
const hiddenClass = document.querySelector('.hide');
submitBtn = document.querySelector('.submit');
 let scoreCount = document.querySelector('.score');
 const googleBtn = document.querySelector('.google');
 const fiftyFifty = document.querySelector('.fifty-fifty');
 let img = document.querySelector('img');

    let questionCount = 0;
    let score = 0;
    
let list = quizData[questionCount];
startBtn.addEventListener('click', loadQuestion = () =>{

    hiddenClass.classList.remove('hide');
    startBtn.classList.add('hide');
    startBtn.classList.remove('show');
    scoreCount.classList.remove('hide');
    question.innerText = list.question;
    opt1.innerText = list.a;
    opt2.innerText = list.b;
    opt3.innerText = list.c;
    opt4.innerText = list.d;
    
});
    answer = answers[0].id;
    getCheckAnswer = () => {
        answer = answers[0].id;
    }
    getCheckAnswer1 = () => {
        answer = answers[1].id;
    }
    getCheckAnswer2 = () => {
         answer = answers[2].id;
    }
    getCheckAnswer3 = () => {
        answer = answers[3].id;
    }


submitBtn.addEventListener('click', () => {
    if(answer === list.ans){
        score++;
    }else{
        alert("wrong Answer");
    }
    questionCount++;
    if(questionCount < quizData.length){
        list = quizData[questionCount];
        loadQuestion();  
        scoreCount.innerHTML = "You have scored " +"  " + score +"  " + "out of" + "  " + quizData.length;
    }
   if(questionCount >quizData.length){
       score = score-1;
        scoreCount.innerHTML = "Final Score :" + "  " + score;
        score = 0;
        questionCount = 0;
       list = quizData[questionCount];
        loadQuestion();
    }
     
});
 
googleBtn.addEventListener('click', () =>{
    alert('you have 20 seconds to search it on Google');
    for (let i=20; i>0; i--) {
    task(i);
 }
   
 function task(i) {
   setTimeout(function() {
       googleBtn.innerHTML = i; 
     console.log(i);
     
        if(i ===20){
       img.src ='./images/google-icon.svg' ;
       console.log("Finished Looping");
   }
   }, 1000 *  i);
 
}
});




fiftyFifty.addEventListener('click', () =>{
    

});
