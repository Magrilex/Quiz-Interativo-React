function Results({
  score,
  totalQuestions,
  bestScore,
  onRestart
}) {
  var percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="screen">
      <div className="card results-card">

        <h1>Quiz Finalizado!</h1>

        <div className="result-circle">
          <span>{percentage}%</span>
        </div>

        <h2>
          Você acertou {score} de {totalQuestions} perguntas.
        </h2>

        <p>
          Sua pontuação foi de {percentage}%.
        </p>

        <div className="best-score">
          <strong>🏆 Melhor pontuação:</strong>
          <span>
            {bestScore} / {totalQuestions}
          </span>
        </div>

        <button className="main-button" onClick={onRestart}>
          Refazer Quiz
        </button>

      </div>
    </div>
  );
}

export default Results;