/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"

const PostDetailsPage = () => {
  const { id } = useParams()

  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true)
        setError("")

        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        )

        if (!res) {
          throw new Error("failed to fetch posts.")
        }

        const data = await res.json()

        setPost(data)
      } catch (error) {
        setError("Couldn't load posts.")
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [id])

  if (loading) return <div>Loading posts....</div>

  if (error) return <div>{error}</div>

  console.log(id, post)
  return (
    <div>
      <small>PostId : {post.id}</small>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Link to={"/"}>
        <Button>Back to Home</Button>
      </Link>
    </div>
  )
}

export default PostDetailsPage
