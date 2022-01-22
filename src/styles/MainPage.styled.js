
import styled from "styled-components"

const StyledContainer = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  width: 90%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
`

const StyledButton = styled.button`
  background: ${({ theme, currentTheme }) => theme[currentTheme].bgColor};
  color: ${({ theme,currentTheme }) => theme[currentTheme].textColor};
  outline: 2px solid ${({ theme,currentTheme }) => theme[currentTheme].titleColor};
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: bold;
`
export { StyledContainer, StyledHeader, StyledButton }
