import car from '../assets/car.png'

const Studios = () => {
  return (
    <div className="w-full p-4 flex flex-wrap justify-evenly">
      <div className="w-64 m-8">
        <div className="w-full h-72 ">
          <img className="h-full object-cover" src={car} alt="studio"/>
        </div>
        <h2 className="text-secondary text-2xl font-semibold font-chakra uppercase my-4">Delhi</h2>
        <p className="text-white text-sm my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      </div>
      <div className="w-64 m-8">
        <div className="w-full h-72 ">
          <img className="h-full object-cover" src={car} alt="studio"/>
        </div>
        <h2 className="text-secondary text-2xl font-semibold font-chakra uppercase my-4">Gurugram</h2>
        <p className="text-white text-sm my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      </div>
       <div className="w-64 m-8">
        <div className="w-full h-72 ">
          <img className="h-full object-cover" src={car} alt="studio"/>
        </div>
        <h2 className="text-secondary text-2xl font-semibold font-chakra uppercase my-4">Mumbai</h2>
        <p className="text-white text-sm my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      </div>
      <div className="w-64 m-8">
        <div className="w-full h-72 ">
          <img className="h-full object-cover" src={car} alt="studio"/>
        </div>
        <h2 className="text-secondary text-2xl font-semibold font-chakra uppercase my-4">Gujarat</h2>
        <p className="text-white text-sm my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      </div>
      <div className="w-64 m-8">
        <div className="w-full h-72 ">
          <img className="h-full object-cover" src={car} alt="studio"/>
        </div>
        <h2 className="text-secondary text-2xl font-semibold font-chakra uppercase my-4">Noida</h2>
        <p className="text-white text-sm my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      </div>
 
    </div>
  )
}

export default Studios
