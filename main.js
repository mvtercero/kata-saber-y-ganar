"use strict";

const fullQuestionData = [
  {
    questionId: 1,
    question: '¿Cuál es la capital de Zambia?',
    answers: [
      {id: 1, value: 'Lusaka'},
      {id: 2, value: 'Madrid'},
      {id: 3, value: 'Harare'}
    ],
    correctAnswer: {id: 1}
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



var buttonNextQuestion = document.querySelector(".buttonNextQuestion");
var questionContainer = document.querySelector(".question-container");
var questionText = document.querySelector(".question-text");
var questionId = document.getElementById("question-id");
var answersList = document.querySelector(".answers-list");
var answerContainer = document.querySelector(".answer-container");



let currentQuestionIndex = 0;
function printQuestion(){

    if(currentQuestionIndex < fullQuestionData.length) {
      questionText = fullQuestionData[currentQuestionIndex].question;
      questionId = fullQuestionData[currentQuestionIndex].questionId;

      questionContainer.innerHTML =
      `<div id="${questionId}">${questionText}</div>`

      for (let answerIndex = 0; answerIndex < fullQuestionData[currentQuestionIndex].answers.length; answerIndex++) {
        var answersText = fullQuestionData[currentQuestionIndex].answers[answerIndex].value;
        var answerId = fullQuestionData[currentQuestionIndex].answers[answerIndex].id;

        answersList.innerHTML +=          
        `<li class= "answer-container">
        <input type="radio" name="answer" data-id=${answerId} class="input-answer">
        <label>${answersText}</label>
        </li>`
      }

    // var removeQuestion = document.querySelector(".answers-list");
    // removeQuestion.parentNode.removeChild(removeQuestion);  

    currentQuestionIndex++;

  }
};

//window.addEventListener('load',printQuestion);
buttonNextQuestion.addEventListener("click", printQuestion); 

var userAnswer = [];
function getCheckedAnswer() {
  var radios = document.querySelectorAll(".input-answer");
  for( var currentRadioIndex = 0; currentRadioIndex < radios.length; currentRadioIndex++ ) {  
    if( radios[currentRadioIndex].checked) {
        var answerId= radios[currentRadioIndex].dataset.id;
        userAnswer.push({
          answerId: answerId 
        });
    }
  }
  console.log(userAnswer);
}


function isCorrect(fullQuestionData, userAnswer){
  //result.classList.remove("hidden");
  
  if(fullQuestionData.questionId !== userAnswer.answerId){
    console.log("Mal!");
  }
  if(fullQuestionData.correctAnswer.id !== userAnswer.answerId){
    console.log("Mal!");
  }else{
    console.log("Bien!");
  }
 
}


var sendButton = document.querySelector(".sendButton");
sendButton.addEventListener("click", getCheckedAnswer);
sendButton.addEventListener("click", isCorrect);







