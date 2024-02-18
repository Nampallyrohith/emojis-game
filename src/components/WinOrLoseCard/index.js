const WinOrLoseCard = props => {
  const {score, isWon, emojisList, restartGame} = props
  const gameUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const textDisplay = isWon ? 'You Won' : 'You Lose'
  const scoreText = isWon ? 'Best Score' : 'Score'
  const onClickPlayAgain = () => {
    restartGame()
  }
  return (
    <div>
      <div>
        <h1>{textDisplay}</h1>
        <p>{scoreText}</p>
        <p>
          {score}/{emojisList.length}
        </p>
        <button type="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <img src={gameUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
