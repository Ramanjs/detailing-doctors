import React, {useEffect, useState} from 'react'
import sanityClient from '../sanity-client'
import { Helmet } from 'react-helmet'
import {useNavigate} from 'react-router-dom'

const Products = () => {

  const [data, setData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    sanityClient.fetch(`*[_type == "product"] {
      _id,
      name,
      slug,
      order,
      points[],
      image {
        asset -> {
          _id,
          url
        }
      }
    }`)
      .then(data => {
        data.sort((a, b) => a.order - b.order)
        setData(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleClick = slug => {
    navigate(slug)
  }

  return (
    <div className="w-full text-white">
      <Helmet>
        <title>Detailing Doctors | Products</title>
        <meta name="description" content="The premium car detailing studio"/>
      </Helmet>
      {data && data.map((product, index) => (
        <div key={product._id} className={"w-full flex my-2 lg:my-0 flex-col lg:flex-row" + (index & 1 ? " flex-col-reverse lg:flex-row-reverse" : "")}>
          <div className="w-full lg:w-1/2 relative">
            <img className="object-cover z-0" src={product.image.asset.url} alt="service"/>
            <div className="w-full h-full z-10 bg-black absolute top-0 opacity-30"></div>
          </div>
          <div className="w-full lg:w-1/2 p-10 flex flex-col justify-between">
            <h2 className="text-4xl font-medium font-chakra uppercase decoration-secondary decoration-4 underline underline-offset-8">{product.name}</h2>
            <p>{product.points[0]}</p>
            <button className="font-shakra uppercase font-semibold my-4 w-fit py-2 px-4 bg-secondary hover:cursor-pointer" onClick={() => handleClick(product.slug)}>Know More</button>
          </div>
        </div>
      ))}
   </div>
  )
}

export default Products
