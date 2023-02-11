import React, {useEffect, useState} from 'react'
import sanityClient from '../sanity-client'
import { Helmet } from 'react-helmet'

const Products = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
    sanityClient.fetch(`*[_type == "product"] {
      _id,
      name,
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
          <div className="w-full lg:w-1/2 p-10">
            <h2 className="text-4xl font-medium font-chakra uppercase decoration-secondary decoration-4 underline underline-offset-8">{product.name}</h2>
            {product.points.map((point, index) => (
              <p key={index} className="my-4">{point}</p>
            ))}
          </div>
        </div>
      ))}
   </div>
  )
}

export default Products
