// import MyCard from "./components/MyCard"
// import MyButton from "./components/MyButton"
import { Link, Route, Routes } from "react-router"
// import MyComponent from "./components/MyComponent"
import Homepage from "./pages/HomePage"
import PostDetailsPage from "./pages/PostDetailsPage"
import AboutPage from "./pages/AboutPage"

export function App() {
  return (
    <div>
      {/* <MyComponent></MyComponent> */}
      {/* <MyButton>Click here</MyButton>
      <MyCard title="Title" description="description"></MyCard>
      <MyCard title="Title 2" description="description 2"></MyCard> */}

      <nav className="ml-4 flex items-center gap-4">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage></Homepage>} />
        <Route path="/post/:id" element={<PostDetailsPage></PostDetailsPage>} />
        <Route path="/about" element={<AboutPage></AboutPage>} />
      </Routes>
    </div>
  )
}

export default App
