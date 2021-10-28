import React, { useState } from 'react'
import salad from '../img/salad.png'

import FastCard from './FastCard'
import HappyCard from './HappyCard'

export default () => {
  return (
    <div className='flex justify-between mt-'>
      <div className='flex flex-col gap-5'>
        <p className='text-green-500 font-bold'>100% Organic food</p>
        <h1 className='font-bold text-6xl mb-2'>
          Healthy Lifestyle <br /> is your only{' '}
          <span className='text-green-500'>
            unfair <br /> advantage
          </span>
        </h1>
        <p className='mb-3'>
          Choose healthy habits with Organo daily meal <br /> prepared by our
          expert nutritionist and chef
        </p>
        <div className='flex gap-7'>
          <button className='bg-green-500 py-2 px-10 rounded-xl text-white font-bold hover:bg-green-600'>
            Get Started
          </button>
          <button className='border-2 border-gray-900 py-2 px-3 rounded-xl hover:bg-gray-100'>
            Explore menu
          </button>
        </div>
      </div>
      <div className='absolute right-28 -mt-7'>
      <FastCard />
        <HappyCard />
        <img src={salad} alt='' className='w-[500px] ' />
      </div>
    </div>
  )
}
