import React, {useState} from 'react'
import { Helmet } from 'react-helmet'
import emailjs from "@emailjs/browser"

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)

    const templateParams = {
      name,
      to_email: email,
      message,
      phone,
    }

    emailjs.send(
      "service_rrwp22i",
      "template_upsbadn",
      templateParams,
      "-3vSffM-Y_4So1PRp"
    )
      .then(() => {
        setLoading(false)
        setSuccess("Thank you for contacting us. We will get back to you shortly.")
        setTimeout(() => {
          setSuccess('')
        }, 5000)
      })
      .catch(err => {
        setLoading(false)
        setError('Some error occured! Please try again later.')
        setTimeout(() => {
          setError('')
        }, 5000)
      })
  }

  return (
    <div className="w-full p-4 flex justify-center text-white">
      <Helmet>
        <title>Detailing Doctors | Contact Us</title>
        <meta name="description" content="The premium car detailing studio"/>
      </Helmet>
      <form className="flex flex-col w-1/2" onSubmit={handleSubmit}>
        <div className="flex flex-col my-4">
          <label className="font-chakra font-semibold uppercase" htmlFor="name">Your name</label>
          <input className="w-1/2 py-2 border-b-2 border-grey bg-primary text-offwhite placeholder:text-offwhite focus:outline-none focus:border-secondary" id="name" type="text" value={name} placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className="flex flex-col my-4">
          <label className="font-chakra font-semibold uppercase" htmlFor="address">Mobile Number</label>
          <input className="w-1/2 py-2 border-b-2 border-grey bg-primary text-offwhite placeholder:text-offwhite focus:outline-none focus:border-secondary" id="address" type="tel" value={phone} placeholder="Ex: 8918523134" onChange={(e) => setPhone(e.target.value)} required pattern="[0-9]{10}"/>
        </div>
        <div className="flex flex-col my-4">
          <label className="font-chakra font-semibold uppercase" htmlFor="email">Your email</label>
          <input className="w-1/2 py-2 border-b-2 border-grey bg-primary text-offwhite placeholder:text-offwhite focus:outline-none focus:border-secondary" id="email" type="email" value={email} placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="flex flex-col my-4">
          <label className="font-chakra font-semibold uppercase" htmlFor="message">Your message</label>
          <input className="py-2 border-b-2 border-grey bg-primary text-offwhite placeholder:text-offwhite focus:outline-none focus:border-secondary" id="message" type="text" value={message} placeholder="Enter your message" onChange={(e) => setMessage(e.target.value)} required/>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        {!loading && <input className="font-chakra uppercase font-semibold my-4 w-fit py-2 px-4 mx-auto bg-secondary hover:cursor-pointer" type="submit" value="Send Message"/>}
        {loading && (
          <div className="w-full my-2">
            <div className="w-8 h-8 mx-auto border-t-4 border-blue-400 rounded-[50%] animate-spin">
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

export default Contact
