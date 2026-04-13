import { Button } from "./ui/button"

const MyButton = ({ children }: { children: string }) => {
  return (
    <div>
      <Button>{children}</Button>
    </div>
  )
}

export default MyButton
