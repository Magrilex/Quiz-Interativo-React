function StartScreen({ onStart, bestScore, totalQuestions }) {
  return (
    <div className="screen">
      <div className="card">
        <h1>Quiz de React</h1>

        <p>
          Teste seus conhecimentos sobre React e JavaScript!
        </p>

        <p>
          São {totalQuestions} perguntas de múltipla escolha.
        </p>

        <div className="best-score">
          <strong>🏆 Melhor pontuação:</strong>
          <span>
            {bestScore} / {totalQuestions}
          </span>
        </div>

        <button className="main-button" onClick={onStart}>
          Começar Quiz
        </button>
      </div>
    </div>
  );
}

export default StartScreen;