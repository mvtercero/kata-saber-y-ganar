"use strict";

const fullQuestionData = [
  {
    questionId: 1,
    question: '¿Cuál es la capital de Zambia?',
    answers: [
      {id: 1, value: 'Madrid'},
      {id: 2, value: 'Lusaka'},
      {id: 3, value: 'Harare'}
    ],
    correctAnswer: {id: 2}
  },

  {
    questionId: 2,
    question: '¿Cuántos años tiene Celio?',
    answers: [
      {id: 1, value: 18},
      {id: 2, value: 'No lo sabe ni ella'},
      {id: 3, value: 103}
    ],
    correctAnswer: { 
      id: 2
    }
  },
  {
    questionId: 3,
    question: '¿Cuál es el nombre de Freud?',
    answers: [
      {id: 1, value: 'Adolf'},
      {id: 2, value: 'Sefarad'},
      {id: 3, value: 'Sigmund'}
    ],
    correctAnswer: {id: 3}
  }
];


var startButton        = document.querySelector(".play-game");
var buttonNextQuestion = document.querySelector(".buttonNextQuestion");
var questionContainer  = document.querySelector(".question-container");
var questionText       = document.querySelector(".question-text");
var questionId         = document.getElementById("question-id");
var answersList        = document.querySelector(".answers-list");
var answerContainer    = document.querySelector(".answer-container");
var playContainer      = document.querySelector(".play-container");

function playGame() {
  playContainer.classList.toggle('hidden');
  startButton.classList.toggle('hidden'); 
  printQuestion();
}

startButton.addEventListener('click', playGame);

let currentQuestionIndex = 0;
function printQuestion(){
    if(currentQuestionIndex < fullQuestionData.length) {
      questionText = fullQuestionData[currentQuestionIndex].question;
      questionId = fullQuestionData[currentQuestionIndex].questionId;
      var correctAnswerId = fullQuestionData[currentQuestionIndex].correctAnswer.id;
      
  
      questionContainer.innerHTML =
      `<div class="questions-class" id="${questionId}">${questionText}</div>`
      // console.log(questionContainer.getAttribute("id"));
      // console.log(questionId);

      for (let answerIndex = 0; answerIndex < fullQuestionData[currentQuestionIndex].answers.length; answerIndex++) {
        var answersText = fullQuestionData[currentQuestionIndex].answers[answerIndex].value;
        var answerId = fullQuestionData[currentQuestionIndex].answers[answerIndex].id;

        questionContainer.innerHTML +=          
         `<div class="answer-container">
          <input type="radio" name="answer" data-id=${answerId} class="input-answer">
          <label>${answersText}</label>
          </div>
          `
      }
  
    currentQuestionIndex++;
  }
};

//window.addEventListener('load',printQuestion);
buttonNextQuestion.addEventListener("click", printQuestion); 


function getCheckedAnswer() {
  var radios = document.querySelectorAll(".input-answer");
  let questionsClassId =  document.querySelector('.questions-class').id;

  var found = fullQuestionData.find(function(question) {
    if (question.questionId == questionsClassId) {
       return question;
    }
  });
 
  
  for( var currentRadioIndex = 0; currentRadioIndex < radios.length; currentRadioIndex++ ) {  
    if( radios[currentRadioIndex].checked) {
      var userAnswerId = radios[currentRadioIndex].dataset.id;
      var resultText = document.querySelector(".result-text");
      if (found.correctAnswer.id == userAnswerId) {
        resultText.innerHTML = "Bien!";
      } else {
        resultText.innerHTML = "Mal!";
      }
    }
  }
}


var sendButton = document.querySelector(".sendButton");
sendButton.addEventListener("click", getCheckedAnswer);


var timeLeft = 20;
var timer = document.querySelector('.timer');
var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    printQuestion();
  } else {
    timer.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}


// var timeleft = 20;
// var downloadTimer = setInterval(function(){
//   document.getElementById("progressBar").value = 20 - --timeleft;
//   if(timeleft <= 0)
//     clearInterval(downloadTimer);
// },2000);








