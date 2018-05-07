"use strict";

const fullQuestionData = [
  {
    questionId: 1,
    question: '¿Cuál es la capital de Zambia?',
    answers: [
      {id: 1, value: 'Lusaka'},
      {id: 2, value: 'Madrid'},
      {id: 1, value: 'Harare'}
    ],
    correctAnswer: {id: 1}
  },

  {
    questionId: 2,
    question: '¿Cuántos años tiene Celio?',
    answers: [
      {id: 1, value: 18},
      {id: 2, value: 'No lo sabe ni ella'},
      {id: 1, value: 103}
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
      {id: 1, value: 'Sigmund'}
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
var answersList = document.querySelector(".answers-list");

let i = 0;
let answers = "";
function getQuestion(){
    if(i < fullQuestionData.length) {
      document.querySelector(".question-title").innerHTML = fullQuestionData[i].question;
      i++;

      for (let i = 0; i < fullQuestionData.length; i++) {
        answers = fullQuestionData[i].answers;
        console.log(answers);
        answersList +=  
        `<li>
          <input type="radio" class="input-check" id="-${i}"}>
          <span>${answers}</span>
        </li>`
      }
    }
};


buttonNextQuestion.addEventListener("click", getQuestion);



// function saveCurrentTasks() {
//   var currentTasks = "";

//   for (var i = 0; i < currentTasksList.length; i++) {
//     console.log(i);
//     currentTasks = currentTasksList[i];

//   list.innerHTML += (
//   `<li class="task">
//     <label for="current-task-${i}" class="label-text">
//       <input type="checkbox" class="input-check" id="current-task-${i}" name="check" value="1" ${currentTasks.checked ? 'checked':''}>
//       <span class="strike-text">${currentTasks.text}</span>
//     </label>
//   </li>`
//     );
//   }
// }