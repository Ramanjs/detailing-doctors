import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import sanityClient from '../sanity-client'
import { Helmet } from 'react-helmet'

const Studios = () => {

  const [data, setData] = useState(null)
  const navigate = useNavigate()

  const handleClick = (studio) => {
    navigate("/bookslot", { state: { studio } })
  }

  useEffect(() => {
    sanityClient.fetch(`*[_type == "studio"] {
      _id,
      name,
      image {
        asset -> {
          _id,
          url
        }
      },
      description
    }`)
      .then(data => {
        console.log(data)
        setData(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="w-full p-4 flex flex-wrap justify-evenly">
      <Helmet>
        <title>Detailing Doctors | Studios</title>
        <meta name="description" content="The premium car detailing studio"/>
      </Helmet>
      {data && data.map(studio => (
        <div key={studio._id} className="w-64 m-8">
          <div className="w-full h-72 ">
            <img className="h-full object-cover" src={studio.image? studio.image.asset.url : ""} alt="studio"/>
          </div>
          <h2 className="text-secondary text-2xl font-semibold font-chakra uppercase my-4">{studio.name}</h2>
          <p className="text-white text-sm my-2">{studio.description}</p>
          <button className="font-chakra font-semibold px-4 py-2 text-white bg-secondary uppercase rounded-sm" onClick={() => handleClick(studio.name)}>Book Slot</button>
        </div>
      ))}
    </div>
  )
}

export default Studios
