
// script.js

console.log("logic.js is connected!");



alert("logic.js is connected!");
                                                           
// Your other code here
document.addEventListener("DOMContentLoaded", function () {
    // DOM elements
    const startButton = document.getElementById("start");
    const questionTitle = document.getElementById("question-title");
    const choicesContainer = document.getElementById("choices");
    const timerDisplay = document.getElementById("time");
    const initialsInput = document.getElementById("initials");
    const submitButton = document.getElementById("submit");
    const feedbackContainer = document.getElementById("feedback");
    const finalScoreContainer = document.getElementById("final-score");

    // Quiz state variables
    let currentQuestionIndex = 0;
    let timer;
    let timeRemaining = 60;
    let highScores = [];


       // Questions array
       const questions = [
        {
          question: "What does HTML stand for?",
          choices: ["Hyper Text Markup Language", "Highly Typed Modular Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
          correctIndex: 0,
        },
        {
          question: "Which of the following is not a programming language?",
          choices: ["JavaScript", "Python", "CSS", "HTML"],
          correctIndex: 2,
        },
        {
          question: "What is the purpose of the CSS box model?",
          choices: ["To define the layout of an HTML page", "To create 3D effects on elements", "To define the design and layout of elements on a web page", "To manage the positioning of elements on the page"],
          correctIndex: 2,
        },
      ];