function application() {
  "use strict";

  function getQuestionsData(callback) {
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
    callback(fullQuestionData); 
  }

  var fullQuestionData = [];
  var totalTime = 20;
  var timerId;
  var timer;
  var startButton;
  var playContainer;
  let currentQuestionIndex = 0;
  var buttonNextQuestion;
  var questionContainer;
  var questionText;
  var questionId;
  var answersList;
  var answerContainer;
  var sendButton;
  

  function start() {
    startButton = document.querySelector(".play-game");
    startButton.addEventListener('click', playGame);
    playContainer      = document.querySelector(".play-container");
    buttonNextQuestion = document.querySelector(".buttonNextQuestion");
    questionContainer  = document.querySelector(".question-container");
    questionText       = document.querySelector(".question-text");
    questionId         = document.getElementById("question-id");
    answersList        = document.querySelector(".answers-list");
    answerContainer    = document.querySelector(".answer-container");
    sendButton         = document.querySelector(".sendButton");
    buttonNextQuestion.addEventListener("click", printQuestion); 
    sendButton.addEventListener("click", getCheckedAnswer);

    getQuestionsData(function (data) {
      fullQuestionData = data;
      timerId = setInterval(countdown, 1000);
      timer = document.querySelector('.timer');      
    });
  }

    //CONTADOR DE TIEMPO
    
    function countdown() {
      if (totalTime == 0) {
        clearTimeout(timerId);
      } else {
        timer.innerHTML = totalTime + ' seconds remaining';
        totalTime--;
      }
    }

  
  //Botón de inicio del juego
  
  function playGame() {
    playContainer.classList.toggle('hidden');
    startButton.classList.toggle('hidden'); 
    printQuestion();
  }

  //Botón siguiente pregunta

  function printQuestion(){
      if(currentQuestionIndex < fullQuestionData.length) {
        questionText = fullQuestionData[currentQuestionIndex].question;
        questionId = fullQuestionData[currentQuestionIndex].questionId;
        var correctAnswerId = fullQuestionData[currentQuestionIndex].correctAnswer.id;
        
    
        questionContainer.innerHTML =
        `<div class="questions-class" id="${questionId}">${questionText}</div>`
  
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
  
  //Comprobar la respuesta

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

  return {
    start: start
  };
}









