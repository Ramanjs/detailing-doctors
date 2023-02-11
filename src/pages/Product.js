import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import sanityClient from "../sanity-client"
import { Helmet } from "react-helmet"

export default function Product() {
  const params = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    sanityClient.fetch(`*[_type == "product" && slug == "${params.id}"] {
      name,
      points[],
      image {
        asset -> {
          url
        }
      }
    }`)
      .then(data => {
        setProduct(data[0])
      })
      .catch(err => {
        console.log(err)
      })
  }, [params.id])

  return (product ? (
    <div className="w-full flex my-2 lg:my-0 flex-col lg:flex-row text-white">
      <Helmet>
        <title>Detailing Doctors | {product.name}</title>
        <meta name="description" content="The premium car detailing studio"/>
      </Helmet>
      <div className="w-full lg:w-1/2 relative">
        <img className="object-cover z-0" src={product.image ? product.image.asset.url : ""} alt="service"/>
        <div className="w-full h-full z-10 bg-black absolute top-0 opacity-30"></div>
      </div>
      <div className="w-full lg:w-1/2 p-10">
        <h2 className="text-4xl font-medium font-chakra uppercase decoration-secondary decoration-4 underline underline-offset-8">{product.name}</h2>
        {product.points.map((point, index) => (
          <p key={index} className="my-4">{point}</p>
        ))}
      </div>
    </div>)
    : null)
}
