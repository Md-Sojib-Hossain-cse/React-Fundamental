import MyCard from "./components/MyCard"
import MyButton from "./components/MyButton"

export function App() {
  return (
    <div>
      <MyButton>Click here</MyButton>
      <MyCard title="Title" description="description"></MyCard>
      <MyCard title="Title 2" description="description 2"></MyCard>
    </div>
  )
}

export default App
