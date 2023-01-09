import React, {useState} from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className="w-full p-4 flex justify-center text-white">
      <form className="flex flex-col w-1/2">
        <div className="flex flex-col my-4">
          <label className="font-chakra font-semibold uppercase" htmlFor="name">Your name</label>
          <input className="w-1/2 py-2 border-b-2 border-grey bg-primary text-offwhite placeholder:text-offwhite focus:outline-none focus:border-secondary" id="name" type="text" value={name} placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className="flex flex-col my-4">
          <label className="font-chakra font-semibold uppercase" htmlFor="email">Your email</label>
          <input className="w-1/2 py-2 border-b-2 border-grey bg-primary text-offwhite placeholder:text-offwhite focus:outline-none focus:border-secondary" type="email" value={email} placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className="flex flex-col my-4">
          <label className="font-chakra font-semibold uppercase" htmlFor="message">Your message</label>
          <input className="py-2 border-b-2 border-grey bg-primary text-offwhite placeholder:text-offwhite focus:outline-none focus:border-secondary" id="message" type="text" value={message} placeholder="Enter your message" onChange={(e) => setMessage(e.target.value)}></input>
        </div>
        <input className="font-shakra uppercase font-semibold my-4 w-fit py-2 px-4 bg-secondary hover:cursor-pointer" type="submit" value="Send Message"/>
      </form>
    </div>
  )
}

export default Contact
