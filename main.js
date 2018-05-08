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
var answers = document.querySelectorAll(".answers");

let i = 0;
function printQuestion(){
    if(i < fullQuestionData.length) {
      document.querySelector(".question-title").innerHTML = fullQuestionData[i].question;

      for (let a = 0; a < fullQuestionData[i].answers.length; a++) {
        answers[a].innerHTML = fullQuestionData[i].answers[a].value;
        }
    }
};

buttonNextQuestion.addEventListener("click", printQuestion); 

function isCorrect(questionsList, answerUserList){
  //result.classList.remove("hidden");
  
  if(questionsList.questionId !== answerUserList.id){
    console.log("Mal!");
  }
  if(questionsList.correctAnswer.id !== answerUserList.answerId){
    console.log("Mal!");
  }else{
    console.log("Bien!");
  }
 
}

var answerUser = [];
var radios = document.querySelectorAll('.input-answers');
console.log(radios);
var sendButton = document.querySelector(".sendButton");
function getCheckedValue() {
  for( var x = 0; x < radios.length; x++ ) {  
    if( radios[x].checked) {
        answerUser.push({
          id : i,
          answerId: x 
        });
        console.log(answerUser[i].id);
        console.log(answerUser[i].answerId);
        isCorrect(fullQuestionData[i],answerUser[i]);
      }
    }
  i++;
  printQuestion();
}

sendButton.addEventListener("click", getCheckedValue);




