import Card from "./Card"
import MainPage from "./MainPage"
import articles from "./data"

function App() {
  return (
    <MainPage>
      {articles.map((item, index) => (
        <Card key={index} article={item} />
      ))}
    </MainPage>
  )
}

export default App
