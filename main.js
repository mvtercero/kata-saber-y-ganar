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

var correctAnswer = fullQuestionData[0].correctAnswer.id;
var questionId = fullQuestionData[0].questionId;
 
function isCorrect(questionId, correctAnswer, userAnswer){
  if (correctAnswer === userAnswer){
    return true;
  } else return false;
}

var buttonNextQuestion = document.querySelector(".buttonNextQuestion");
var answers = document.querySelectorAll(".answers");

let i = 0;
function printQuestion(){
    if(i < fullQuestionData.length) {
      document.querySelector(".question-title").innerHTML = fullQuestionData[i].question;

      for (let a = 0; a < fullQuestionData[i].answers.length; a++) {
        answers[a].innerHTML = fullQuestionData[i].answers[a].value;
        console.log(answers);
        }
      i++;
    }
};


buttonNextQuestion.addEventListener("click", printQuestion);



