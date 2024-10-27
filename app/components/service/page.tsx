import React from 'react'

const ServiceSection= () => {
  return (
    <div>
       <section className="bg-fourth p-10">
        <h1 className="text-3xl font-bold text-center">Our Services</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="service bg-white p-5 rounded shadow">
            <h3 className="text-xl font-semibold">Special Snacks</h3>
            <p>Delicious and healthy snack options made from premium ingredients.</p>
          </div>
          <div className="service bg-white p-5 rounded shadow">
            <h3 className="text-xl font-semibold">Organic Teas</h3>
            <p>Experience the soothing flavors of our carefully selected organic teas.</p>
          </div>
          <div className="service bg-white p-5 rounded shadow">
            <h3 className="text-xl font-semibold">Recipe Kits</h3>
            <p>Get creative in the kitchen with our easy-to-follow recipe kits.</p>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default ServiceSection