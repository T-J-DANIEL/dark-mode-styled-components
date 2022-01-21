import { useState, useEffect } from "react"
import styles from "./mainPageStyles.module.css"

const getStorageTheme = () => {
  let theme = "light-theme"
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme")
  }
  return theme
}

const MainPage = ({ children }) => {
  const [theme, setTheme] = useState(getStorageTheme())

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme")
    } else {
      setTheme("light-theme")
    }
  }

useEffect(() => {
  document.documentElement.className = theme
  localStorage.setItem("theme", theme)
}, [theme])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>REACTionary</h1>
        <button onClick={toggleTheme}>Toggle</button>
      </div>
      <div className={styles.cardsContainer}>{children}</div>
    </div>
  )
}

export default MainPage
