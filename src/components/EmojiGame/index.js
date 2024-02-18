import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'
import './index.css'

class EmojiGame extends Component {
  state = {
    totalScore: 0,
    isGameOver: false,
    gameList: [],
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickEmojiCards = id => {
    const {emojisList} = this.props
    const {gameList} = this.state
    const isPresent = gameList.includes(id)
    console.log(isPresent)
    if (isPresent) {
      this.finishGameScore(gameList.length)
    } else {
      if (emojisList.length - 1 === gameList.length) {
        this.finishGameScore(emojisList.length)
      }
      this.setState(prevState => ({
        gameList: [...prevState.gameList, id],
      }))
    }
  }

  finishGameScore = newScore => {
    const {totalScore} = this.state
    if (newScore > totalScore) {
      this.setState({totalScore: newScore})
    }
    this.setGameOverValue(true)
  }

  setGameOverValue = value => {
    this.setState({isGameOver: value})
  }

  restartGame = () => {
    this.setState({gameList: []})
    this.setGameOverValue(false)
  }

  renderClickedEmoji = () => {
    const shuffleList = this.shuffledEmojisList()
    return (
      <ul className="emoji-container">
        {shuffleList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            clickEmojiCards={this.clickEmojiCards}
            eachEmoji={eachEmoji}
          />
        ))}
      </ul>
    )
  }

  renderWinOrLose = () => {
    const {emojisList} = this.props
    const {gameList} = this.state
    const isWon = emojisList.length === gameList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        emojisList={emojisList}
        score={gameList.length}
        restartGame={this.restartGame}
      />
    )
  }

  render() {
    const {isGameOver, gameList, totalScore} = this.state
    return (
      <div className="bg-container">
        <NavBar
          score={gameList.length}
          topScore={totalScore}
          isGameOver={isGameOver}
        />
        <div>
          {isGameOver ? this.renderWinOrLose() : this.renderClickedEmoji()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
