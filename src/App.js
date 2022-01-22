import MainPage from "./MainPage"
import { ThemeProvider } from "styled-components"

function App() {
  const theme = {
    darkTheme: {
      bgColor: "rgb(87, 85, 85)",
      textColor: "rgb(255, 255, 255)",
      titleColor: "rgb(235, 97, 97)",
    },
    lightTheme: {
      bgColor: "white",
      textColor: "black",
      titleColor: "black",
    },
  }
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  )
}

export default App
