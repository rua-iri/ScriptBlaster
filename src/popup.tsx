import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import "~style.css"


import ScriptList from "./features/ScriptList"

function IndexPopup() {
  return (
    <>
      <Card className="max-w-[500px] min-w-[400px] w-[400px]">
        <CardHeader className="">
          <CardTitle className="font-extrabold leading-none tracking-tight">
            ScriptBlaster
          </CardTitle>
        </CardHeader>

        <ScriptList />

        <CardFooter className="flex justify-between">
          <Button variant="submit" className="w-full">
            Add +
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default IndexPopup
