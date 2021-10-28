import React, { useState } from 'react'
import uno from '../img/1.png'
import dos from '../img/2.png'
import tres from '../img/3.png'

export default () => {
  return (
    <div className='bg-gray-100/90 shadow-2xl p-6 rounded-2xl absolute right-0 bottom-60 z-10 space-y-1'>
      <div className='flex'>
        <img src={uno} alt='' className='w-[50px] h-[50px]' />
        <img src={dos} alt='' className='-ml-4 w-[50px] h-[50px]' />
        <img src={tres} alt='' className='-ml-4 w-[50px] h-[50px]' />
      </div>
      <p className='font-semibold text-sm'>Happy Customers</p>
      <div className='flex gap-1 items-center'>
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
            d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
          />
        </svg>
        <p className='text-xs'>4.9 (+2.5k Ratings)</p>
      </div>
    </div>
  )
}
