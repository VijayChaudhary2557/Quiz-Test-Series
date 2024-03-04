let quizeData = [
    {
        question: "Javascript is an _______ language?",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Procedural",
        d: "None Of the Above",
        correct: "a",
    },
    {
        question: "Which one of the following also known as Conditional Expression:",
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
        correct: "d",
    },
    {
        question: "In JavaScript, what is a block of statement?",
        a: "Conditional block",
        b: "block that combines a number of statements into a single compound statement",
        c: "both conditional block and a single statement",
        d: "block that contains a single statement",
        correct: "b",
    },
    {
        question: "When interpreter encounters an empty statements, what it will do:",
        a: "Shows a warning",
        b: "Prompts to complete the statement",
        c: "Throws an error",
        d: "Ignores the statements",
        correct: "d",
    },
    {
        question: "The 'function' and 'var' are known as:",
        a: "Keywords",
        b: "DataTypes",
        c: "Declaration statements",
        d: "Prototypes",
        correct: "c",
    },
    {
        question: "Which one of the following is the correct way for calling the JavaScript code?",
        a: "Preprocessor",
        b: "Triggering Event",
        c: "RMI",
        d: "Function/Method",
        correct: "d",
    },
    {
        question: "Which of the following type of a variable is volatile?",
        a: "Mutable variable",
        b: "Dynamic variable",
        c: "Volatile variable",
        d: "Immutable variable",
        correct: "a",
    },
    {
        question: "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
        a: "Prints an exception error",
        b: "Prints an overflow error",
        c: "Displays 'Infinity'",
        d: "Prints the value as such",
        correct: "c",
    },
    {
        question: "In the JavaScript, which one of the following is not considered as an error:",
        a: "Syntax error",
        b: "Missing of semicolons",
        c: "Division by zero",
        d: "Missing of Bracket",
        correct: "c",
    },
    {
        question: "Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?",
        a: "toExponential()",
        b: "toFixed()",
        c: "toPrecision()",
        d: "toLocaleString()",
        correct: "b",
    },
    {
        question: " Javascript is a _____ language.",
        a: "Programming",
        b: "Application",
        c: "Scripting",
        d: "None",
        correct: "c",
    },
    {
        question: "JavaScript is a _____ Side Scripting Language.",
        a: "Server",
        b: "Browser",
        c: "ISP",
        d: "None",
        correct: "b",
    },
    {
        question: "Which of the following purpose, JavaScript is designed for ?",
        a: "To Execute Query Related to DB on Server",
        b: "To Style HTML Pages",
        c: " To Perform Server Side Scripting Opertion",
        d: "To add interactivity to HTML Pages.",
        correct: "d",
    },
    {
        question: "JavaScript can be written",
        a: "directly on the Server Script",
        b: "directly into HTML pages",
        c: "All of the above",
        d: "None",
        correct: "b",
    },
    {
        question: "JavaScript code is written inside file having extension",
        a: ".jvs",
        b: ".js",
        c: ".jsc",
        d: ".javascript",
        correct: "b",
    },
    {
        question: "Why JavaScript is called as Lightweight Programming Language ?",
        a: "because JS is client side scripting",
        b: "because JS is available free of cost.",
        c: " because we can add programming functionality inside JS",
        d: "because JS can provide programming functionality inside but up to certain extend.",
        correct: "d",
    },
    {
        question: "JavaScript is also called as",
        a: "Server Side Scripting Language",
        b: "Client Side Scripting Language",
        c: "All of the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: " Local Browser used for validations on the Web Pages uses",
        a: "JS",
        b: "Java",
        c: "HTML",
        d: "CSS",
        correct: "a",
    },
    {
        question: "JavaScript code can be called by using",
        a: "RMI",
        b: "Preprocessor",
        c: "Function / Method",
        d: "None of the above",
        correct: "c",
    },
    {
        question: " Which of the following is not javascript data types?",
        a: "Null type",
        b: "Undefined type",
        c: "Number type",
        d: " All of the above",
        correct: "d",
    }
]

// ------------------------------------------------------Shuffle function----------------------------------------------------

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          // Swap array[i] and array[j]
          [array[i], array[j]] = [array[j], array[i]];
        }
      }

      // Call the shuffle function
      shuffleArray(quizeData);

      // Display the shuffled array
      console.log(quizeData);

// ----------------------------------------------------Shuffle function---------------------------------------------------------

let quize = document.querySelector(".quize-container");
let question = document.querySelector(".question");
let myOptions = document.querySelectorAll(".btn");
let queCount = document.querySelector(".queCount");
let timer = document.querySelector(".timer");
let currentQuiz = 0;
let score = 0;
let currectAns = 0;
let wrongAns = 0;
let intervalId;
let q = 1;
let Attempt = 0;
function loadQuiz() {

    queCount.textContent= q + "-" + "10";
    question.textContent = q + ". " + quizeData[currentQuiz].question;
    myOptions[0].textContent = "a."+quizeData[currentQuiz].a;
    myOptions[1].textContent = "b."+quizeData[currentQuiz].b;
    myOptions[2].textContent = "c."+quizeData[currentQuiz].c;
    myOptions[3].textContent = "d."+quizeData[currentQuiz].d;
    console.log(quizeData[currentQuiz].correct);

    intervalId = setInterval(function () {
        currentQuiz++;
        q++;
        queCount.textContent= q + "-" + "10";
        if (currentQuiz < 10) {
            console.log("question: ",+currentQuiz)
            question.textContent = q + ". " + quizeData[currentQuiz].question;
            myOptions[0].textContent = "a."+quizeData[currentQuiz].a;
            myOptions[1].textContent = "b."+quizeData[currentQuiz].b;
            myOptions[2].textContent = "c."+quizeData[currentQuiz].c;
            myOptions[3].textContent = "d."+quizeData[currentQuiz].d;
            console.log(quizeData[currentQuiz].correct);
            
        } 
        else 
            clearInterval(intervalId);
        if ( currentQuiz==10)
            scoreCard();
        
    }, 30000);
}

function checkAns(ele) {
    clearInterval(myTimer);
    timeStop();
    Attempt++;
    if (ele.value == quizeData[currentQuiz].correct) {
        score++;
        currectAns++;
    }
    else
    {
        score = --score;
        wrongAns++;
    }

    clearInterval(intervalId);
    currentQuiz++;
    q++;
    queCount.textContent= q + "-" + "10";
    if (currentQuiz < 10) {
        loadQuiz();
    }

    if (currentQuiz==10)
    {
        scoreCard();
    }
}

function scoreCard()
{
    for (let i of myOptions)
    {
        i.remove()
    }
    timer.remove();
    queCount.previousElementSibling.remove();
    queCount.remove();
    question.textContent="";
    let myAttempt = document.createElement("h1");
    myAttempt.textContent = "Attempt:-" + Attempt;
    let myUnAttempt = document.createElement("h1");
    myUnAttempt.textContent="Unattempt:-" + (10-Attempt);
    let myScore = document.createElement("h1");
    myScore.textContent="Score:-" + score;
    let myCorrectAns = document.createElement("h1");
    myCorrectAns.textContent="Correcct Answer:- " + currectAns;
    let myWrongAns = document.createElement("h1");
    myWrongAns.textContent="Wrong Answer:- " + wrongAns;
    question.appendChild(myAttempt);
    question.appendChild(myUnAttempt);
    question.appendChild(myScore);
    question.appendChild(myCorrectAns);
    question.appendChild(myWrongAns);
    console.log("Score: ",score);
    console.log("Currect: ",currectAns);
    console.log("Wrong: ",wrongAns);
}

let myTimer;
function timeStop()
{
    let t=20;
    myTimer = setInterval(function(){
        timer.textContent=t;
        if(t==1)
        {
            clearInterval(myTimer);
            timeStop();
        }
        else
        {
            t--;
        }
    },1000)
}

loadQuiz();
timeStop();