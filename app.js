/**
 * Example store structure
 */
var STORE = {
    // 5 or more questions are required
    questions: [
      {
        question: 'What country is Mt Fuji in?',
        answers: [
          'China',
          'Thailand',
          'Japan',
          'Vietnam',

        ],
        correctAnswer: 'Japan',
      },
      {
        question: 'Which sea has no coasts?',
        answers: [
          'The Norwegian Sea',
          'The Sargasso Sea',
          'The Irish Sea',
          'The Labrador Sea',
        ],
        correctAnswer: 'The Sargasso Sea',
      },
      {
        question: 'Which hemisphere is Lanai island in?',
        answers: [
          'Northern',
          'Western',
          'Southern',
          'Eastern',
        ],
        correctAnswer: 'Northern',
      },
      {
        question:'Which continent is Mt Vison on?',
        answers: [
          'Australia',
          'Antartica',
          'Africa',
          'Asia',
        ],
        correctAnswer: 'Antartica',
      },
      {
        question:'Where is the driest place on earth?',
        answers: [
          'The Sahara Desert',
          'Death Valley',
          'The Atacama Desert',
          'The McMurdo Dry Valleys',
        ],
        correctAnswer: 'The Atacama Desert',
      },
    ],
    quizStarted: false,
    currentQuestion: 0,
    score: 0
  };



  
  /*function to load the start screen*/
function generateStartScreen() {
  
  return `
    <div class="start-screen">
    <p> This quiz will test your geography knowledge </p>
    <button type = "button" id = "start"> Start Quiz </button>
    </div>
  `
}

/* Event listener for 'start quiz' button*/
function handleStartClick() {
  $('.start-screen').on('click', '#start', function(event) {
    event.preventDefault();
    STORE.quizStarted = true;
    render();
  });
}

/*Generates the current question + answer options*/

function generateAnswers() {
  const answersArray = STORE.questions[STORE.currentQuestion].answers;
  let answersHTML = ``;
  let i = 0;
  answersArray.forEach(answer => {
    answersHTML += `
    <div id = "answer-options">
        <input type ="radio" name ="options" id ="options{i+1}" value ="${answer}" required>
        <label for = "options${i + 1}"> ${answer} </label>
      </div>
    `
    i++;
  });
  return answersHTML;
}

 /*Generate HTML for current question*/
 function generateCurrentQuestionHTML() {
  let currentQuestion = STORE.questions[STORE.currentQuestion].question;
  console.log(currentQuestion);
   return `
    <form id = "question-form">
      <fieldset>
        <legend> ${currentQuestion} </legend>
      <div id = "answer-options"> 
        ${generateAnswers()}
      </div>
        <button type = "submit" id = "submit-btn">Submit Answer</button>
        <button type = "button" id = "next-q-btn" class = "hidden" >Next Question</button>
      </fieldset>
    </form>
        <li id="question-number">
          Question Number: ${STORE.currentQuestion + 1}/${STORE.questions.length}
        </li>
        <li id="score">
         Score: ${STORE.score}/${STORE.questions.length}
        </li>
      </ul>
    `;
    
 }

 /*ul class="question-and-score">

  /*Generate current question number and score*/

  /*Event listener for answer selection + submit button */
   /*conditional function to determine if answer was correct or incorrect*/

  function answerSubmit() {
    $('main').on('submit', '#question-form', function(event) {
      event.preventDefault();
      const selectedAnswer = $('input:checked').val();
      /*let optionBox = `answer-options-${currentQuestion.answers.findIndex(i => i === selectedOption)}`;*/
      let correctHTML  =
      `<div class = "correct"> Correct! </div>`
      let incorrectHTML = 
      `<div class = "incorrect"> Incorrect. The answer is ${STORE.questions[STORE.currentQuestion].correctAnswer} </div>`
      
      if(selectedAnswer === STORE.questions[STORE.currentQuestion].correctAnswer) {
        STORE.score += 1;
        $('#answer-options').append(correctHTML);
      }
      else {
        $('#answer-options').append(incorrectHTML);
      }
      STORE.currentQuestion ++
      $('#submit-btn').hide()
      $('#next-q-btn').show()

      
    });
    
  }

  /*condition function to display HTML for correct or incorrect answer*/ /* google 'disable elements'*/

  /*Event listener for next question*/

  function nextQuestionButton() {
    $('main').on('click', '#next-q-btn', function(event) {
      event.preventDefault();
      if(STORE.currentQuestion === STORE.questions.length - 1) {
        $('main').html(resultsPage);
      } else {
      $('main').html(generateCurrentQuestionHTML);
      }
    });
  }
  
  /*Generate HTML for results page*//*Event listener for completed quiz*/
 
  function resultsPage() {
  return `
  <div id = "results-page">
  <h2> Quiz Finished! Your score is ${STORE.score} </h2>
  <button type = "button" id = "restart-btn"> Restart Quiz </button>
  </div>
  `
  
}
  
  /*Reset values to restart quiz */
  function restartQuiz() {
    $('main').on('click','#restart-btn', function(event) {
      event.preventDefault();
      STORE.quizStarted = false;
      STORE.currentQuestion = 0;
      STORE.score = 0;
      $('main').html(generateCurrentQuestionHTML);


    });
  }
  /*Event listner for a 'restart quiz' button*/
  

  /* All-purpose render function */
   function render() {
    /*let HTML = '';*/
     if (STORE.quizStarted === false) {
     $('main').html(generateStartScreen);
     return;
    }
    else if (STORE.quizStarted = true) {
      /*HTML = generateCurrentQuestionHTML();*/
      $('main').html(generateCurrentQuestionHTML);
    }
  }


  
function handleQuiz() {
  render();
  handleStartClick();
  generateCurrentQuestionHTML();
  generateAnswers();
  answerSubmit();
  nextQuestionButton();
  restartQuiz();
}

$(handleQuiz);
  
  /**
   * 
   * Technical requirements:
   * 
   * Your app should include a render() function, that regenerates the view each time the store is updated. 
   * See your course material and access support for more details.
   *
   * NO additional HTML elements should be added to the index.html file.
   *
   * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
   *
   * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
   * 
   */
  
  /********** TEMPLATE GENERATION FUNCTIONS **********/
  
  // These functions return HTML templates
  /*
  function loadQuestion(){
    return `All the HTML will be here`;
  }
  $('.loadQuestion').on('submit', function(event){
     event.preventDefault();
     $('.container').html( loadQuestion ); // Here we target our element in the html and we call the function that generates the html
  });
  */
  
  /********** RENDER FUNCTION(S) **********/
  
  // This function conditionally replaces the contents of the <main> tag based on the state of the store
  
  /********** EVENT HANDLER FUNCTIONS **********/
  
  // These functions handle events (submit, click, etc)

