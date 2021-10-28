import React, { useState } from 'react'

export default () => {
  const [bgClor, setbgColor] = useState(false)
  return (
    <div className=" flex justify-between items-center">
      <h1 className="font-bold text-3xl cursor-pointer">
        Organ<span className="text-green-500">o</span>
      </h1>
      <nav className="font-bold text-lg">
        <ul className="flex gap-10 items-center">
          <li className="text-green-500 cursor-not-allowed">Home</li>
          <li className="hover:text-green-500 cursor-pointer">Delivery</li>
          <li className="hover:text-green-500 cursor-pointer">Pricing</li>
          <li className="hover:text-green-500 cursor-pointer">FAQs</li>
          <li className="hover:text-green-500 cursor-pointer">Contact</li>
          <li className="ml-20">
            <button className="bg-green-500 py-2 px-10 rounded-xl text-white font-bold hover:bg-green-600">
              Get started
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
