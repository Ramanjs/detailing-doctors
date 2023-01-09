import React from 'react'
import product1 from '../assets/product-1.jpg'
import product2 from '../assets/product-2.jpg'
import product3 from '../assets/product-3.jpg'

const Products = () => {
  return (
    <div className="w-full text-white">
      <div className="w-full flex">
        <div className="w-1/2 relative">
          <img className="object-cover z-0" src={product1} alt="service"/>
          <div className="w-full h-full z-10 bg-black absolute top-0 opacity-30"></div>
        </div>
        <div className="w-1/2 p-10">
          <h2 className="text-4xl font-medium font-chakra uppercase decoration-secondary decoration-4 underline underline-offset-8">G.O.T. Diamond Hard Graphene Coating</h2>
          <p className="my-4">This innovative product is the latest revolution in the automotive industry, offering unparalleled protection for your car's paint.</p>
          <p className="my-4">Our Graphene Coating creates a 5 micron thick layer on the surface of your car's paint, providing a durable shield against the elements and everyday wear and tear. This advanced coating is designed to last a lifetime, ensuring your car always looks its best.</p>
          <p className="my-4">In addition to its impressive protective properties, the G.O.T. Diamond Hard Graphene Coating also enhances the shine and gloss of your car's paint. Whether you're looking to protect your brand new vehicle or give an older car a new lease on life, this is the product for you.</p>
          <p className="my-4">Experience the power of graphene technology with the G.O.T. Diamond Hard Graphene Coating. Order yours today and take the first step towards keeping your car looking its best for years to come.</p>
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-1/2 p-10">
          <h2 className="text-4xl font-medium font-chakra uppercase decoration-secondary decoration-4 underline underline-offset-8">G.O.T. Graphene Black Coating</h2>
          <p className="my-4">This advanced coating is an excellent choice for those looking to protect their car's paint and enhance its shine and gloss.</p>
          <p className="my-4">Our Graphene Black Coating creates a durable layer on the surface of your car's paint, helping to protect it from the elements and everyday wear and tear. This coating is slightly less thick than our Diamond Hard Graphene Coating, but still offers impressive protective properties.</p>
          <p className="my-4">In addition to its protective qualities, the G.O.T. Graphene Black Coating also enhances the look of your car's paint. Whether you're looking to protect a new vehicle or revitalize an older car, this is the product for you.</p>
          <p className="my-4">Take the first step towards keeping your car looking its best with the G.O.T. Graphene Black Coating. Get your coating done today and experience the power of graphene technology at Detailing Doctors.</p>
        </div>
        <div className="w-1/2 relative">
          <img className="object-cover z-0" src={product2} alt="service"/>
          <div className="w-full h-full z-10 bg-black absolute top-0 opacity-30"></div>
        </div>
      </div>
       <div className="w-full flex">
        <div className="w-1/2 relative">
          <img className="object-cover z-0" src={product3} alt="service"/>
          <div className="w-full h-full z-10 bg-black absolute top-0 opacity-30"></div>
        </div>
        <div className="w-1/2 p-10">
          <h2 className="text-4xl font-medium font-chakra uppercase decoration-secondary decoration-4 underline underline-offset-8">G.O.T. Ceramic Pro+ Coating</h2>
          <p className="my-4">This advanced coating is an excellent choice for those looking to protect their car's paint and enhance its shine and gloss.</p>
          <p className="my-4">Our Ceramic Pro+ Coating creates a durable layer on the surface of your car's paint, helping to protect it from the elements and everyday wear and tear. While this coating is not as advanced as our Graphene Coatings, it still offers suitable protection for smaller vehicles.</p>
          <p className="my-4">In addition to its protective qualities, the G.O.T. Ceramic Pro+ Coating also enhances the look of your car's paint. Whether you're looking to protect a new vehicle or revitalize an older car, this is the product for you.</p>
          <p className="my-4">Take the first step towards keeping your car looking its best with the G.O.T. Ceramic Pro+ Ceramic Coating. Book your Ceramic Coating service today and experience the benefits of ceramic technology.</p>
        </div>
      </div>
    </div>
  )
}

export default Products
