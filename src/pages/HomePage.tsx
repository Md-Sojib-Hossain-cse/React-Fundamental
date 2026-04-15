/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react"
import { Link } from "react-router"

const Homepage = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true)
        setError("")

        const res = await fetch("https://jsonplaceholder.typicode.com/posts")

        if (!res) {
          throw new Error("failed to fetch posts.")
        }

        const data = await res.json()

        setPosts(data.slice(0, 10))
      } catch (error) {
        setError("Couldn't load posts.")
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [])

  if (loading) return <div>Loading posts....</div>

  if (error) return <div>{error}</div>

  return (
    <div>
      <h3>Posts</h3>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <p>{post.title}</p>
            <Link to={`/post/${post.id}`}>See Details</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Homepage
