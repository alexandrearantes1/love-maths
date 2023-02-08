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
});

function runGame (gameType) {
   let num1 = Math.floor(Math.random() * 25)  + 1;
   let num2 = Math.floor(Math.random() * 25)  + 1;

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
   let isCorrect = answer === calculateCorrectAnswer()[0];
   console.log(isCorrect);
   if(isCorrect) {
      incrementScore();
   } else {
      incrementWrongAnswer()
   }

}
/**
 * gets operands (numbers) and operator (plus, minus, etc)) 
 * directly from the DOM and returnsthe correct answer. 
 */
function calculateCorrectAnswer () {
   let operand1 = parseInt(document.getElementById('operand1').innerText);
   let operand2 = parseInt(document.getElementById('operand2').innerText);
   let operator = document.getElementById('operator').innerText;

   if(operator === '+') {
      return [operand1 + operand2, 'addition'];
   } else {
      alert(`Unimplemented operator ${operator}`);
      throw `Unimplemented operator ${operator}. Aborting!`;
   }
}

function incrementScore () {
   let score = document.getElementById('score');
   score.textContent = parseInt(score.textContent) + 1;
}

function incrementWrongAnswer () {
   let incorrect = document.getElementById('incorrect');
   incorrect.textContent = parseInt(incorrect.textContent) + 1;
}

function displayQuestion(operation) {
  
}

function displayAdditionQuestion (num1, num2) {
   let operand1 = document.getElementById('operand1').textContent = num1;
   let operand2 = document.getElementById('operand2').textContent = num2;
   let operator = document.getElementById('operator').textContent = "+";

   
}

function displaySubtractQuestion (num1, num2) {
   
}

function displayMultiplyQuestion (num1, num2) {
   
}

function displayDivisionQuestion (num1, num2) {
   
}
