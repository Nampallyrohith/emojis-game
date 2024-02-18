import './index.css'

const NavBar = props => {
  const {topScore, score, isGameOver} = props
  const displayScore = () => {
    if (isGameOver) {
      return null
    }
    return (
      <div>
        <p>Score: {score}</p>
        <p>Top Score: {topScore} </p>
      </div>
    )
  }
  return (
    <nav>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {displayScore()}
    </nav>
  )
}

export default NavBar
