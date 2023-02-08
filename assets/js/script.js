window.addEventListener("load", function () {
   let buttons = document.getElementsByTagName('button');
   for (let button of buttons) {
      button.addEventListener("click", function (event) {
         let gameType = this.getAttribute("data-type");
         if(gameType === 'submit') {
            checkAnswer();
         }
         else {
            runGame(gameType);
         }
      });
   }
   document.getElementById('answer-box').addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
         checkAnswer();
      }
   })
});

function runGame (gameType) {
   let num1 = Math.floor(Math.random() * 25)  + 1;
   let num2 = Math.floor(Math.random() * 25)  + 1;
   let answerBox = document.getElementById('answer-box');
   answerBox.value = ''
   answerBox.focus();
   switch(gameType) {
      case 'addition': 
         displayAdditionQuestion(num1, num2);
         break;
      
      case 'subtraction':
         displaySubtractQuestion(num1, num2);
         break;
      
      case 'multiplication':
         displayMultiplyQuestion(num1, num2);
         break;
      
      case 'division':
         displayDivisionQuestion(num1, num2);
         break; 
   }
}

function checkAnswer() {
   let answer = parseInt(document.getElementById('answer-box').value);
   let correctAnswer = calculateCorrectAnswer()
   let isCorrect = answer === correctAnswer[0];
   
   if(isCorrect) {
      incrementScore();
   } else {
      incrementWrongAnswer()
   }
   runGame(correctAnswer[1])
}
/**
 * gets operands (numbers) and operator (plus, minus, etc)) 
 * directly from the DOM and returnsthe correct answer. 
 */
function calculateCorrectAnswer () {
   let operand1 = parseInt(document.getElementById('operand1').innerText);
   let operand2 = parseInt(document.getElementById('operand2').innerText);
   let operator = document.getElementById('operator').innerText;

   switch(operator) {
      case '+': 
         return [operand1 + operand2, 'addition'];
      case '-': 
         return [operand1 - operand2, 'subtraction'];
      case 'x': 
         return [operand1 * operand2, 'multiplication'];
      case '/': 
         return [operand1 / operand2, 'division'];
      default:
         alert(`Unimplemented operator ${operator}`);
         throw `Unimplemented operator ${operator}. Aborting!`;      
   }
}

/**
 * Gets score from the DOm and increments it by 1.
 */
function incrementScore () {
   let score = document.getElementById('score');
   score.textContent = parseInt(score.textContent) + 1;
}

/**
 * Gets incorrect answer tally from the DOm and increments it by 1.
 */
function incrementWrongAnswer () {
   let incorrect = document.getElementById('incorrect');
   incorrect.textContent = parseInt(incorrect.textContent) + 1;
}

/**
 * Populates the spans with the random numbers and the appropriate operation symbol. 
 * @param {String} operation 
 * @param {Number} num1 
 * @param {Number} num2 
 */
function populateSpans(operation, operand1, operand2) {
   document.getElementById('operand1').textContent = operand1;
   document.getElementById('operand2').textContent = operand2;
   document.getElementById('operator').textContent = operation;
}

function displayAdditionQuestion (operand1, operand2) {
   populateSpans("+", operand1, operand2);
}

function displaySubtractQuestion (operand1, operand2) {
   if(operand1 < 2) {
      populateSpans("-", operand2, operand1);   
   } else {
      populateSpans("-", operand1, operand2);
   }
}

function displayMultiplyQuestion (operand1, operand2) {
   populateSpans("x", operand1, operand2);
}

function displayDivisionQuestion (operand1, operand2) {
   populateSpans("/", operand1, operand2);
}
