import './index.css'

const EmojiCard = props => {
  const {eachEmoji, clickEmojiCards} = props
  const {id, emojiName, emojiUrl} = eachEmoji
  const onClickCards = () => {
    clickEmojiCards(id)
  }
  return (
    <li key={id} onClick={onClickCards}>
      <button type="button">
        <img src={emojiUrl} alt={emojiName} className="img" />
      </button>
    </li>
  )
}

export default EmojiCard
