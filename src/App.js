import React, { useState } from "react";

import StartScreen from "./components/StartScreen";
import Quiz from "./components/Quiz";
import Results from "./components/Results";

import questions from "./data/questions";

import "./App.css";

function App() {
  var [screen, setScreen] = useState("start");
  var [currentQuestion, setCurrentQuestion] = useState(0);
  var [quizQuestions, setQuizQuestions] = useState([]);
  var [score, setScore] = useState(0);
  var [selectedAnswer, setSelectedAnswer] = useState(null);
  var [showFeedback, setShowFeedback] = useState(false);

  var savedBestScore = localStorage.getItem("bestScore");

  var bestScore = savedBestScore
    ? Number(savedBestScore)
    : 0;

  function startQuiz() {
    var shuffledQuestions = [...questions].sort(function () {
      return Math.random() - 0.5;
    });

    var selectedQuestions = shuffledQuestions.slice(0, 10);

    setQuizQuestions(selectedQuestions);

    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScreen("quiz");
  }

  function handleNext() {
    if (selectedAnswer === null) {
      return;
    }

    var question = quizQuestions[currentQuestion];

    if (!showFeedback) {
      setShowFeedback(true);

      return;
    }

    var isCorrect = selectedAnswer === question.correctAnswer;
    var finalScore = score;

    if (isCorrect) {
      finalScore = score + 1;
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setScore(finalScore);

      setCurrentQuestion(function (previousQuestion) {
        return previousQuestion + 1;
      });

      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      if (finalScore > bestScore) {
        localStorage.setItem("bestScore", finalScore);
      }

      setScore(finalScore);
      setScreen("results");
    }
  }

  function restartQuiz() {
    startQuiz();
  }

  if (screen === "start") {
    return (
      <StartScreen
        onStart={startQuiz}
        bestScore={bestScore}
        totalQuestions={quizQuestions.length}
      />
    );
  }

  if (screen === "quiz") {
    return (
      <Quiz
        question={quizQuestions[currentQuestion]}
        questionNumber={currentQuestion + 1}
        totalQuestions={quizQuestions.length}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        showFeedback={showFeedback}
        onNext={handleNext}
      />
    );
  }

  if (screen === "results") {
    return (
      <Results
        score={score}
        totalQuestions={quizQuestions.length}
        bestScore={bestScore}
        onRestart={restartQuiz}
      />
    );
  }

  return null;
}

export default App;