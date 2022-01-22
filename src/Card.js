import StyledCard from "./styles/Card.styled"
const Card = ({ article, currentTheme }) => {
  const { title, length, date, snippet } = article
  let dateString = `${date.getDate().toString().padStart(2, "0")}.${date
    .getMonth()
    .toString()
    .padStart(2, "0")}.${date.getFullYear()}`
  return (
    <StyledCard currentTheme={currentTheme}>
      <h2>{title}</h2>
      <h3>Date: {dateString}</h3>
      <p>{length} minute read</p>
      <h4>{snippet}</h4>
    </StyledCard>
  )
}

export default Card