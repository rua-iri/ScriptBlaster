import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"


import "~style.css"

function IndexPopup() {
  return (
    <>
      <Card className="max-w-[500px]">
        <CardHeader>
          <CardTitle>ScriptBlaster</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            aliquid consectetur doloribus sit labore, cum sint ratione commodi,
            blanditiis suscipit animi repellendus esse ipsum vero quas delectus
            perspiciatis. Pariatur, modi quo quia accusamus ex vero at eveniet
            officiis! Illum voluptatum beatae eligendi possimus molestiae enim
            dolores corporis aliquid adipisci accusamus.
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default IndexPopup
