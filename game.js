const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById("loader");
const game = document.getElementById("game");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    "question": "Inside which HTML element do we put the JavaScript??",
    "choice1": "<script>",
    "choice2": "<javascript>",
    "choice3": "<js>",
    "choice4": "<scripting>",
    "answer": 1
  },
  {
    "question": "What's The Full Meaning Of NCDC?",
    "choice1": "Notorious Control Diorder Center",
    "choice2": "Nipro Century Deliver Ceb",
    "choice3": "National Center For Disease Control",
    "choice4": "None Of The Above",
    "answer": 3
  },
  {
    "question": " How do you write 'Hello World' in an alert box?",
    "choice1": "msgBox('Hello World');",
    "choice2": "alertBox('Hello World');",
    "choice3": "msg('Hello World');",
    "choice4": "alert('Hello World');",
    "answer": 4
  },
  {
    "question": "What does R stands for in ROYGBIV?",
    "choice1": "Rind",
    "choice2": "Roy",
    "choice3": "Rindulf",
    "choice4": "Red",
    "answer": 4
  },
  {
    "question": " What's the name of the current pandemic?",
    "choice1": "Colondia Virus",
    "choice2": "Coronandia Virus",
    "choice3": "Covid 2020",
    "choice4": "Corona Virus",
    "answer": 4
  }
];
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 5;

startGame = () => {
    game.classList.remove('hidden');
    loader.classList.add('hidden');
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
  };

  getNewQuestion = () => {
    document.getElementById("p1").style = "background-color:white";
    document.getElementById("p1").style = "color:black";
    document.getElementById("p2").style = "background-color:white";
    document.getElementById("p2").style = "color:black";
    document.getElementById("p3").style = "background-color:white";
    document.getElementById("p3").style = "color:black";
    document.getElementById("p4").style = "background-color:white";
    document.getElementById("p4").style = "color:black";
    document.getElementById("nextbtn").style.display = "none";
    questionCounter++;
    progressText.innerText ="Question " + questionCounter + "/" +  MAX_QUESTIONS // `${questionCounter}/${MAX_QUESTIONS}`;

    progressBarFull.style.width = Number((questionCounter / MAX_QUESTIONS) * 100) + "%";

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex]
    question.innerHTML = currentQuestion.question;
    // console.log(currentQuestion)
    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    }
        );
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
  
};
  function choiceAuthA() {
    if (currentQuestion.answer == 1) {
      document.getElementById("p1").style = "background-color:#28a745";
      document.getElementById("p1").classList.add("dclass");
    } else if (currentQuestion.answer == 2) {
      document.getElementById("p2").style = "background-color:#28a745";
      document.getElementById("p2").classList.add("dclass");
    } else if (currentQuestion.answer == 3) {
      document.getElementById("p3").style = "background-color:#28a745";
      document.getElementById("p3").classList.add("dclass");
    } else  {
      document.getElementById("p4").style = "background-color:#28a745";
      document.getElementById("p4").classList.add("dclass");
    };
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = choices[0];
    const selectedAnswer = selectedChoice.dataset['number'];
    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply == "correct") {
      incrementScore(CORRECT_BONUS);
      document.getElementById("p1").style = "background-color: #28a745";
      document.getElementById("p1").classList.add("dclass")
    } else {
      document.getElementById("p1").style = "background-color: red";
      document.getElementById("p1").classList.add("dclass")
    }
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
      // if (!acceptingAnswers) return;
      acceptingAnswers = false;

      //go to the end page
      setTimeout(() => {
        document.getElementById("game").style.display = "none"
        document.getElementById("ResultDisplay").style.display = "flex"
        document.getElementById("ResultDisplay").innerHTML = "You Scored <br>" + score
        
      }, 1000);
      
    } else {
    // if (!acceptingAnswers) return;
    // acceptingAnswers = false;

    document.getElementById("nextbtn").style.display = "block"
    
  }
  };
  function choiceAuthB() {
    if (currentQuestion.answer == 1) {
      document.getElementById("p1").style = "background-color:#28a745";
      document.getElementById("p1").classList.add("dclass");
    } else if (currentQuestion.answer == 2) {
      document.getElementById("p2").style = "background-color:#28a745";
      document.getElementById("p2").classList.add("dclass");
    } else if (currentQuestion.answer == 3) {
      document.getElementById("p3").style = "background-color:#28a745";
      document.getElementById("p3").classList.add("dclass");
    } else  {
      document.getElementById("p4").style = "background-color:#28a745";
      document.getElementById("p4").classList.add("dclass");
    };


    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = choices[1]
    const selectedAnswer = selectedChoice.dataset['number']
    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply == "correct") {
      incrementScore(CORRECT_BONUS);
      // document.getElementById("p2").style = "background-color: #28a745";
      // document.getElementById("p2").classList.add("dclass")
    } else {
      document.getElementById("p2").style = "background-color: red";
      document.getElementById("p2").classList.add("dclass")
    }
    if (availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS) {
      //go to the end page
      setTimeout(() => {
        document.getElementById("game").style.display = "none";
      document.getElementById("ResultDisplay").style.display = "flex";
      document.getElementById("ResultDisplay").innerHTML = "You Scored <br>" + score;
      }, 1000);
    } else {
      document.getElementById("nextbtn").style.display = "block";
  }
  };
  function choiceAuthC() {
    if (currentQuestion.answer == 1) {
      document.getElementById("p1").style = "background-color:#28a745";
      document.getElementById("p1").classList.add("dclass");
    } else if (currentQuestion.answer == 2) {
      document.getElementById("p2").style = "background-color:#28a745";
      document.getElementById("p2").classList.add("dclass");
    } else if (currentQuestion.answer == 3) {
      document.getElementById("p3").style = "background-color:#28a745";
      document.getElementById("p3").classList.add("dclass");
    } else  {
      document.getElementById("p4").style = "background-color:#28a745";
      document.getElementById("p4").classList.add("dclass");
    };
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = choices[2];
    const selectedAnswer = selectedChoice.dataset['number'];
    const classToApply =
    selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

  if (classToApply == "correct") {
    incrementScore(CORRECT_BONUS);
    // document.getElementById("p1").style = "background-color: #28a745";
    // document.getElementById("p1").classList.add("dclass")
  } else {
    document.getElementById("p3").style = "background-color: red";
    document.getElementById("p3").classList.add("dclass")
  }
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
      //go to the end page
      setTimeout(() => {
        document.getElementById("game").style.display = "none";
        document.getElementById("ResultDisplay").style.display = "flex";
        document.getElementById("ResultDisplay").innerHTML = "You Scored <br>" + score;
      }, 1000);
    } else {
    document.getElementById("nextbtn").style.display = "block";
    
}
  };
  function choiceAuthD() {
    if (currentQuestion.answer == 1) {
      document.getElementById("p1").style = "background-color:#28a745";
      document.getElementById("p1").classList.add("dclass");
    } else if (currentQuestion.answer == 2) {
      document.getElementById("p2").style = "background-color:#28a745";
      document.getElementById("p2").classList.add("dclass");
    } else if (currentQuestion.answer == 3) {
      document.getElementById("p3").style = "background-color:#28a745";
      document.getElementById("p3").classList.add("dclass");
    } else  {
      document.getElementById("p4").style = "background-color:#28a745";
      document.getElementById("p4").classList.add("dclass");
    };
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = choices[3];
    const selectedAnswer = selectedChoice.dataset['number'];
    const classToApply =
    selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    if (classToApply == "correct") {
      incrementScore(CORRECT_BONUS);
      // document.getElementById("p1").style = "background-color: #28a745";
      // document.getElementById("p1").classList.add("dclass")
    } else {
      document.getElementById("p4").style = "background-color: red";
      document.getElementById("p4").classList.add("dclass")
    }
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
     
      //go to the end page
      setTimeout(() => {
        document.getElementById("game").style.display = "none";
        document.getElementById("ResultDisplay").style.display = "flex";
        document.getElementById("ResultDisplay").innerHTML = "You Scored <br>" + score;
      }, 1000);
    } else {
    document.getElementById("nextbtn").style.display = "block";
    
  }
  };
incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};
startGame();