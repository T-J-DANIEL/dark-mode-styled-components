import { useState } from "react"
import Card from "./Card"
import articles from "./data"
import {
  StyledContainer,
  StyledHeader,
  StyledButton,
} from "./styles/MainPage.styled"
import GlobalStyles from "./styles/Global"

const getStorageTheme = () => {
  let theme = "lightTheme"
  if (localStorage.getItem("theme")) {
    theme =
      localStorage.getItem("theme") === "dark-theme"
        ? "darkTheme"
        : "lightTheme"
  }
  return theme
}
const MainPage = () => {
  const [currentTheme, setCurrentTheme] = useState(getStorageTheme())
  const toggleTheme = () => {
    if (currentTheme === "lightTheme") {
      setCurrentTheme("darkTheme")
    } else {
      setCurrentTheme("lightTheme")
    }
  }

  return (
    <StyledContainer>
      <GlobalStyles currentTheme={currentTheme} />
      <StyledHeader>
        <h1>REACTionary</h1>
        <StyledButton currentTheme={currentTheme} onClick={toggleTheme}>
          Toggle
        </StyledButton>
      </StyledHeader>
      <div>
        {articles.map((item, index) => (
          <Card key={index} article={item} currentTheme={currentTheme} />
        ))}
      </div>
    </StyledContainer>
  )
}

export default MainPage
