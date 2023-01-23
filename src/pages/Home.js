import React from 'react'
import homebg from '../assets/home-background.jpg'
import logo from '../assets/logo-no-bg.png'
import car1 from '../assets/car1.jpg'
import car2 from '../assets/car2.jpg'
import car3 from '../assets/car3.jpg'

const Home = ({ vref }) => {
  return (
    <div className="w-full flex flex-col justify-center text-white">
      {/* Landing Page */}
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        {/*<img src={homebg} className="w-full h-full absolute -z-10" alt="home background"/>*/}
        {/*<h1 className="text-6xl font-semibold uppercase font-chakra">Detailing Doctors</h1>*/}
        <img src={logo} alt="logo"/>
        <p ref={vref} className="font-medium text-lg">the premier car detailing studio</p>
      </div>

      {/* About Us */}
      <div className="w-full min-h-screen flex flex-col justify-center text-lg relative">
        {/* Background */}
        <div className="absolute top-0 w-full h-full -z-10 flex">
          <div className="w-1/3">
            <img className="h-full -z-10 object-cover" src={car1} alt="bg"/>
          </div>
          <div className="w-1/3">
            <img className="h-full -z-10 object-cover" src={car2} alt="bg"/>
          </div>
          <div className="w-1/3">
            <img className="h-full -z-10 object-cover" src={car3} alt="bg"/>
          </div>

          {/* Background filter */}
          <div className="absolute top-0 w-full h-full bg-black/70 z-0"></div>
        </div>
        <div className="px-36">
          <h2 className="text-4xl font-semibold uppercase font-chakra my-4">Transform Your Car With A Tempered-Glass</h2>
          <div className="w-16 border-2 border-secondary mb-4"></div>
          <p className="my-4">Welcome to Detailing Doctors, the premier car detailing studio in town. We are dedicated to bringing your vehicle to its full potential, both inside and out. Our team of experienced professionals use only the best products and techniques to ensure your car looks its best.</p>
          <p className="my-4">One of our most popular services is our G.O.T. Graphene Diamond Hard Coating. This premium coating protects your car's paint and acts like a tempered glass shield, helping to protect it from the elements and everyday wear and tear. Our Graphene Diamond Hard Coating is designed to last a lifetime, so you can trust that your car will always be protected.</p>
          <p className="my-4">If you want to give your car the ultimate protection and shine, look no further than Detailing Doctors. Contact us today to schedule your appointment and experience the difference that premium care can make.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
