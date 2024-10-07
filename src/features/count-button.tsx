import { Button } from "@/components/ui/button"
import { useReducer } from "react"

export const CountButton = () => {
  const [count, increase] = useReducer((c) => c + 1, 0)

  return (
    <Button onClick={() => increase()} variant="default">
      Count:
      <span className="">{count}</span>
    </Button>
  )
}
