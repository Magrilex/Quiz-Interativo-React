function Quiz({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  setSelectedAnswer,
  showFeedback,
  onNext
}) {
  var progress = (questionNumber / totalQuestions) * 100;

  function handleAnswer(index) {
    if (showFeedback) {
      return;
    }

    setSelectedAnswer(index);
  }

  return (
    <div className="screen">
      <div className="card quiz-card">
        
        <div className="category">
            {question.category}
        </div>

        <div className="question-header">
          <span>
            Pergunta {questionNumber} de {totalQuestions}
          </span>

          <span>
            {Math.round(progress)}%
          </span>
        </div>

        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: progress + "%" }}
          ></div>
        </div>

        <h2>{question.question}</h2>

        <div className="options">
          {question.options.map(function (option, index) {
            var className = "option";

            if (selectedAnswer === index) {
              className += " selected";
            }

            if (showFeedback) {
              if (index === question.correctAnswer) {
                className += " correct";
              }

              if (
                selectedAnswer === index &&
                selectedAnswer !== question.correctAnswer
              ) {
                className += " incorrect";
              }
            }

            return (
              <button
                key={index}
                className={className}
                onClick={function () {
                  handleAnswer(index);
                }}
                disabled={showFeedback}
              >
                {option}
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div className="feedback">
            {selectedAnswer === question.correctAnswer ? (
              <p className="correct-text">
                ✓ Resposta correta!
              </p>
            ) : (
              <p className="incorrect-text">
                ✗ Resposta incorreta!
              </p>
            )}
          </div>
        )}

        <button
          className="main-button"
          onClick={onNext}
          disabled={selectedAnswer === null}
        >
          {showFeedback
            ? questionNumber === totalQuestions
              ? "Ver Resultado"
              : "Próxima"
            : "Responder"}
        </button>

      </div>
    </div>
  );
}

export default Quiz;