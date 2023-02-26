import {useLocation} from "react-router-dom"

export default function Confirmation() {
  const { state } = useLocation()

  return (
    <div className="text-white min-h-screen flex flex-col justify-center">
      <h1 className="font-chakra text-5xl font-semibold text-center my-4">{state.heading}</h1>
      <p className="text-xl text-center max-w-screen-sm mx-auto my-8">{state.content}</p>
    </div>
  )
}
