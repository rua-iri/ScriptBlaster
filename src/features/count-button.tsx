import { useReducer } from "react"

export const CountButton = () => {
  const [count, increase] = useReducer((c) => c + 1, 0)

  return (
    <button
      onClick={() => increase()}
      type="button"
      className="">
      Count:
      <span className="">
        {count}
      </span>
    </button>
  )
}
