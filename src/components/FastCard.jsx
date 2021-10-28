import React, { useState } from 'react'
import deliveryGuy from '../img/delivery-guy.png'

export default () => {
  return (
    <div className='bg-gray-100/90 shadow-2xl pr-3 overflow-hidden rounded-2xl absolute left-0 bottom-24 z-10'>
      <div className='flex gap-5 items-center'>
        <div className='rounded-full bg-gray-200 w-36 h-36 -mb-20 -ml-10'></div>
        <img src={deliveryGuy} alt='' className='-ml-28 w-[80px]' />
        <div className=''>
          <p className='font-semibold text-sm'>Fast Delivery</p>
          <div className='flex gap-1 items-center'>
            <p className='text-xs'>Your food in 30 minutes</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-3 w-3 text-yellow-300'
              fill='currentColor'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 10V3L4 14h7v7l9-11h-7z'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
