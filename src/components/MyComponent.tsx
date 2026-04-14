import { useEffect, useState } from "react"
import { Button } from "./ui/button"

const MyComponent = () => {
  const [count, setCount] = useState(0)
  const [date, setDate] = useState(new Date())

  const addClick = () => {
    setCount(count + 1)
  }

  const run = () => {
    setDate(new Date())
  }

  useEffect(() => {
    console.log("update doc")
    document.title = `Updated ${count}`
  }, [count])

  useEffect(() => {
    console.log("start time")

    const interval = setInterval(run, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <Button onClick={addClick}>Click here</Button>
      <p className="text-center ">{date.toLocaleString()}</p>
    </div>
  )
}

export default MyComponent
