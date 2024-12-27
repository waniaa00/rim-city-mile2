import React from 'react'
import Image from 'next/image'

const Rims = () => {
  const rimsData = [
    {
      id: 1,
      name: "Alpine",
      price: 8000,
      description: "Superior rims",
      image: '/alpine.webp'
    },
    {
      id: 2,
      name: "Garrison",
      price: 500,
      description: "Rugged rims",
      image: '/garrison.jpg'
    },
    {
      id: 3,
      name: "Arsenal",
      price: 400,
      description: "Tactical rims",
      image: '/arsenal.webp'
    },
    {
      id: 4,
      name: "Kunene",
      price: 500,
      description: "Intricate rims",
      image: '/kunene.webp'
    },
    {
      id: 5,
      name: "Swerve",
      price: 548,
      description: "Dynamic rims",
      image: '/swerve.jpg'
    },
    {
      id: 6,
      name: "Zion 5",
      price: 364.65,
      description: "Bold rims",
      image: '/zion5.jpg'
    },
  ];


  return (
    <div className='rims grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10 '>
        {rimsData.map(item => (
            <div key={item.id} className='rim-card bg-white p-5 rounded-md shadow-md text-center'>
                <img src={item.image} alt={item.name} className='w-full rounded-md transition-transform duration-300 transform hover:scale-110'/>
                <h3 className='mt-4 text-2xl font-bold'>{item.name}</h3>
                <p className='text-gray-500'>{item.description}</p>
                <div className='price text-blue-950 text-xl font-semibold mt-2'>${item.price}</div>
                <button className='mt-4 px-4 py-2 bg-blue-950 text-white rounded-md'>Add to Cart</button>
            </div>
        ))}
    </div>
  );
};

export default Rims;