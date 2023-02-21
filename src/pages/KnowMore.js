import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function KnowMore() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)

    const templateParams = {
      name,
      phone,
    }

    emailjs.send(
      "service_bsjvemm",
      "template_91kbnoh",
      templateParams,
      "MdQQ8r7SRIsYuy7Vr"
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
    <div className="w-full bg-white p-4">
      <div className="w-full py-4 px-8 bg-[#EDEDED] flex flex-col-reverse sm:flex-row justify-between items-center rounded-md">
        <div className="w-full sm:w-[55%] flex flex-col">
          <h2 className="text-4xl text-[#252525]">Get A <b>Tempered Glass</b> For Your Car!</h2>
          <p className="text-xl text-[#777777] my-4">Say goodbye to scratches, harsh weather conditions, and fading paint and transform your car into a head-turner with Patented <b>G.O.T. Diamond Hard Coating</b> by <b>Detailing Doctors.</b> Our team of experts at Detailing Doctors will provide a professional service that will keep your car looking new for years to come.</p>
          <iframe className="w-full my-8 h-96" width="560" height="315" src="https://www.youtube.com/embed/7hwar9f_nFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="w-full sm:w-[40%] flex flex-col sm:px-8 mt-8 sm:mt-0 sm:border-l-2 sm:border-l-[#BBBBBB]">
          <h2 className="text-4xl text-[#444444] mb-8">Want to talk to an <b>Expert</b> for Free?</h2>
          <form className="w-full flex flex-col">
            <input className="p-2 my-2" type="tel" pattern="[0-9]{10}" placeholder="Your Phone No." value={phone} onChange={e => setPhone(e.target.value)} required/>
            <input className="p-2 my-2" type="text" placeholder="Your Full Name" value={name} onChange={e => setName(e.target.value)} required/>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            {!loading && <input type="submit" className="text-lg px-4 py-2 bg-secondary text-white self-center my-4" value="Get a Call Back"/>}
            {loading && (
              <div className="w-full my-2">
                <div className="w-8 h-8 mx-auto border-t-4 border-blue-400 rounded-[50%] animate-spin">
                </div>
              </div>
            )}
          </form>
          <div className="text-lg my-8">
            <p className="text-[#777777]">Can’t Wait? Give us a call now on:</p>
            <a href="tel:918851766763" className="underline text-secondary">+91-8851-766763</a>
          </div>
        </div>
      </div>
    </div>
  )
}
