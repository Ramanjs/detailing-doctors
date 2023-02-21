export default function KnowMore() {
  return (
    <div className="w-full bg-white p-4">
      <div className="w-full py-4 px-8 bg-[#EDEDED] flex flex-col sm:flex-row justify-between items-center rounded-md">
        <div className="w-full sm:w-[55%] flex flex-col">
          <h2 className="text-4xl text-[#252525]">Get A <b>Tempered Glass</b> For Your Car!</h2>
          <p className="text-xl text-[#777777] my-4">Say goodbye to scratches, harsh weather conditions, and fading paint and transform your car into a head-turner with Patented <b>G.O.T. Diamond Hard Coating</b> by <b>Detailing Doctors.</b> Our team of experts at Detailing Doctors will provide a professional service that will keep your car looking new for years to come.</p>
          <p className="w-full h-72 mt-16 bg-[#D9D9D9] rounded-md"></p>
        </div>
        <div className="w-full sm:w-[40%] flex flex-col sm:px-8 mt-8 sm:mt-0 sm:border-l-2 sm:border-l-[#BBBBBB]">
          <h2 className="text-4xl text-[#444444] mb-8">Want to talk to an <b>Expert</b> for Free?</h2>
          <input className="p-2 my-2" type="tel" pattern="[0-9]{10}" placeholder="Your Phone No."/>
          <input className="p-2 my-2" type="text" placeholder="Your Full Name"/>
          <button className="text-lg px-4 py-2 bg-secondary text-white self-center my-4">Get a Call Back</button>
          <div className="text-lg my-8">
            <p className="text-[#777777]">Can’t Wait? Give us a call now on:</p>
            <a href="tel:918851766763" className="underline text-secondary">+91-8851-766763</a>
          </div>
        </div>
      </div>
    </div>
  )
}
