import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function ScriptList() {
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `Script v1.2.0-beta.${a.length - i}`
  )

  function handleClick() {
    document.querySelector("div").style.background = "red"
    alert(123)
  }

  return (
    <CardContent>
      <ScrollArea className="h-72 w-full rounded-md border">
        <div className="p-4">
          {tags.map((tag) => (
            <div key={tag}>
              <div className="flex justify-between">
                {tag}
                <Button
                  variant="default"
                  className=""
                  onClick={() => handleClick()}>
                  Run
                </Button>
              </div>
              <Separator className="my-2" />
            </div>
          ))}
        </div>
      </ScrollArea>
    </CardContent>
  )
}
