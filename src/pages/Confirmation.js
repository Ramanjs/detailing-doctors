import {useLocation} from "react-router-dom"

export default function Confirmation() {
  const { state } = useLocation()

  return (
    <div className="text-white min-h-screen flex flex-col justify-center">
      <h1 className="font-chakra text-5xl font-semibold text-center my-4">Your Booking is Confirmed!</h1>
      <p className="text-xl text-center max-w-screen-sm mx-auto my-8">Hi {state.name}, a request for your booking for slot {state.slot_time} on {state.slot_date} at the {state.studio} Studio has been received. We will get back to you shortly.</p>
    </div>
  )
}
