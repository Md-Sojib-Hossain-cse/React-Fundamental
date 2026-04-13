import { Card, CardDescription, CardTitle } from "./ui/card"

const MyCard = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div className="w-xl">
      <Card>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </Card>
    </div>
  )
}

export default MyCard
