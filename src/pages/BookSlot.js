import {useEffect, useState} from "react"
import {useLocation} from "react-router-dom"
import sanityClient from "../sanity-client"

const BookSlot = () => {

  const { state } = useLocation()
  const [data, setData] = useState(null)
  const [date, setDate] = useState('')
  const [selectedSlot, setSelectedSlot] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    sanityClient.fetch(`*[_type == "studio" && name == "${state.studio}"] {
        name,
        calendar
      }`)
      .then(data => {
        console.log(data[0])
        setData(data[0])
      })
  }, [])

  const handleClick = (slot) => {
    if (slot.available) {
      setSelectedSlot(slot._key)
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="my-8 mx-2 text-4xl font-semibold text-white font-chakra text-center uppercase underline decoration-secondary decoration-4 underline-offset-8">Book a Slot With Us</h1>
      <div className="w-full p-4 text-white max-w-md">
        <h2 className="mb-4 font-chakra text-2xl uppercase text-secondary text-center">{state.studio} Studio</h2>
        <p className="text-white text-xl mt-2">Pick a Slot</p>
        {data && data.calendar.map(planner => (
            <div key={planner._key} className="my-8">
              <h3 className="text-lg">{planner.day}</h3>
              <div className="my-2 border-l-2 border-secondary">
                {planner.slots.map(slot => (
                  <button
                    className={"border-2 px-4 py-2 m-2 hover:bg-secondary hover:border-secondary" +
                    (!slot.available ? " text-gray-400 border-gray-400 hover:bg-transparent hover:border-gray-400 cursor-default" : "") +
                        (selectedSlot === slot._key ? " bg-secondary border-white hover:border-white" : "")}
                    key={slot._key}
                    onClick={() => handleClick(slot)}
                  >
                      {slot.slot_time}
                  </button>
                ))}
              </div>
            </div>
          ))
        }

        <form className="flex flex-col">
          <div className="flex flex-col my-4">
            <label className="font-chakra font-semibold uppercase" htmlFor="name">Your name</label>
            <input className="w-1/2 py-2 border-b-2 border-grey bg-primary text-offwhite placeholder:text-offwhite focus:outline-none focus:border-secondary" id="name" type="text" value={name} placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)}></input>
          </div>
          <div className="flex flex-col my-4">
            <label className="font-chakra font-semibold uppercase" htmlFor="email">Your email</label>
            <input className="w-1/2 py-2 border-b-2 border-grey bg-primary text-offwhite placeholder:text-offwhite focus:outline-none focus:border-secondary" type="email" value={email} placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className="flex flex-col my-4">
            <label className="font-chakra font-semibold uppercase" htmlFor="message">Any message You'd like to convey to us</label>
            <input className="py-2 border-b-2 border-grey bg-primary text-offwhite placeholder:text-offwhite focus:outline-none focus:border-secondary" id="message" type="text" value={message} placeholder="Enter your message" onChange={(e) => setMessage(e.target.value)}></input>
          </div>
          <input className="font-shakra uppercase font-semibold my-4 w-fit py-2 px-4 bg-secondary hover:cursor-pointer" type="submit" value="Book Slot"/>
        </form>
      </div>
    </div>
  )
}

export default BookSlot
