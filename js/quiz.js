var secs =0;
(function() {
   const myQuestions = [
     {
       question: "What color is the sky?",
       answers: {
         a: "Green",
         b: "Red",
         c: "Yellow ",
         d: "blue"
       },
       correctAnswer: "d"
     },
     {
       question: "What is 2+2",
       answers: {
         a: "1",
         b: "3",
         c: "4 ",
         d: "7"
       },
       correctAnswer: "c"
     },
     {
       question: "What year is it?",
       answers: {
         a: "2018",
         b: "2017",
         c: "2019",
         d: "201B"
       },
       correctAnswer: "a"
     },
     {
       question: "A tiger is a..",
       answers: {
         a: "Fish",
         b: "Bird",
         c: "Mammal",
         d: "Reptile"
       },
       correctAnswer: "c"
     },
     {
       question: "The Chicago Bulls belong to what sport?",
       answers: {
         a: "Soccer",
         b: "Football",
         c: "Baseball",
         d: "Basketball"
       },
       correctAnswer: "d"
     },
     {
       question: "What is the only team to come back from 3-1 in the NBA Finals?",
       answers: {
         a: "Clevland Cavaliers",
         b: "Golden State Warriors",
         c: "Chicago Bulls",
         d: "LA Lakers"
       },
       correctAnswer: "a"
     },
     {
       question: "What is 2+3*7+5",
       answers: {
         a: "40",
         b: "36",
         c: "70",
         d: "28"
       },
       correctAnswer: "d"
     },
     {
       question: "Who is the 37th President?",
       answers: {
         a: "Richard Nixon",
         b: "John F. Kennedy",
         c: "Bob Saget",
         d: "Lyndon B. Johnson"
       },
       correctAnswer: "a"
     },
     {
       question: "How many championships does Michael Jordan have?",
       answers: {
         a: "4",
         b: "6",
         c: "5",
         d: "7"
       },
       correctAnswer: "b"
     },
     {
       question: "What conference is Millennium High School?",
       answers: {
         a: "3A",
         b: "4A",
         c: "5A",
         d: "6A"
       },
       correctAnswer: "d"
     },
     {
       question: "How many Championships do the Phoenix Suns have?",
       answers: {
         a: "3",
         b: "2",
         c: "0",
         d: "6"
       },
       correctAnswer: "c"
     },
     {
       question: "Who has scored the most points in a single game in the NBA?",
       answers: {
         a: "Michael Jordan",
         b: "Lebron James",
         c: "Magic Johnson",
         d: "Wilt Chamberlin"
       },
       correctAnswer: "d"
     },
     {
       question: "What company owns Twitch",
       answers: {
         a: "Walmart",
         b: "eBay",
         c: "Bashas",
         d: "Amazon"
       },
       correctAnswer: "d"
     },
     {
       question: "Who has a double platinum album with no features?",
       answers: {
         a: "Drake",
         b: "J Cole",
         c: "Bob Saget",
         d: "Ice JJ Fish"
       },
       correctAnswer: "b"
     },
     {
       question: "Bears. Beats. ___.",
       answers: {
         a: "Bass",
         b: "Battlestar Galactica ",
         c: "Basbeball",
         d: "Bob Saget"
       },
       correctAnswer: "b"
     }
   ];
    function buildQuiz() {
    
     const output = [];
    
     myQuestions.forEach((currentQuestion, questionNumber) => {
      
       const answers = [];
       
       for (letter in currentQuestion.answers) {
       
         answers.push(
           `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
               ${letter} :
               ${currentQuestion.answers[letter]}
            </label>`
         );
       }
      
       output.push(
         `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
       );
     });
    
     quizContainer.innerHTML = output.join("");
   }
    function showResults() {
   
     const answerContainers = quizContainer.querySelectorAll(".answers");
     
     let numCorrect = 0;
     
     myQuestions.forEach((currentQuestion, questionNumber) => {
     
       const answerContainer = answerContainers[questionNumber];
       const selector = `input[name=question${questionNumber}]:checked`;
       const userAnswer = (answerContainer.querySelector(selector) || {}).value;
       
       if (userAnswer === currentQuestion.correctAnswer) {
        
         numCorrect++;
         //var audio = new Audio('.mp3');
          // audio.play();

        
         answerContainers[questionNumber].style.color = "green";
       } else {
        
         answerContainers[questionNumber].style.color = "darkred";
       }
     });
    
     resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     document.getElementById('timer').innerHTML = 'You took '+ secs + ' seconds to finish the quiz!';
    // alert ("You took "+secs+ " seconds to take the Quiz");
     document.getElementById('audio').play();

   }
    function showSlide(n) {
     slides[currentSlide].classList.remove("active-slide");
     slides[n].classList.add("active-slide");
     currentSlide = n;
    
     if (currentSlide === 0) {
       previousButton.style.display = "none";
     } else {
       previousButton.style.display = "inline-block";
     }
    
     if (currentSlide === slides.length - 1) {
       nextButton.style.display = "none";
       submitButton.style.display = "inline-block";
     } else {
       nextButton.style.display = "inline-block";
       submitButton.style.display = "none";
     }
   }
    
    function showNextSlide() {
     showSlide(currentSlide + 1);
   }
    function showPreviousSlide() {
     showSlide(currentSlide - 1);
   }
    const quizContainer = document.getElementById("quiz");
   const resultsContainer = document.getElementById("results");
   const submitButton = document.getElementById("submit");
    // display quiz right away
   buildQuiz();
    const previousButton = document.getElementById("previous");
   const nextButton = document.getElementById("next");
   const slides = document.querySelectorAll(".slide");
   let currentSlide = 0;
    showSlide(0);
    // on submit, show results
   submitButton.addEventListener("click", showResults, );
   previousButton.addEventListener("click", showPreviousSlide);
   nextButton.addEventListener("click", showNextSlide);
   window.onload = function() {
    var id = setInterval(function timer(){ 
        secs++; console.log(secs);
        return secs;
      
    }, 1000); };
  
 })();
