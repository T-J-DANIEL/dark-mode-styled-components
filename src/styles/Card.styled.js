import styled from "styled-components";

const StyledCard = styled.div`
  padding: 0.3em;
  border-radius: 5px;
  outline: 2px solid
    ${({ theme, currentTheme }) => theme[currentTheme].titleColor};
  margin-bottom: 0.5em;
`

export default StyledCard