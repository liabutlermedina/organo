import React, { useState } from 'react'
import chef from '../img/chef.png'
import fueler from '../img/fueler.png'

export default () => {
  return (
    <div className='flex justify-between items-end'>
      <div className='flex gap-1 items-center'>
        <div className='relative'>
          <div className='bg-gray-100 shadow-lg rounded-full w-[75px] h-[75px] mt-[25px] ml-4 absolute'></div>
          <img src={chef} alt='' className='w-[100px] relative z-10' />
        </div>
        <div className='mt-4'>
          <h1 className='font-bold '>Chef of the month</h1>
          <div className='text-xs '>
            <p className=''>People loved his creations</p>
            <p className='text-green-500 font-bold'>80+ famous dishes</p>
          </div>
        </div>
      </div>
      <div className=''>
        <h1 className='text-xs font-bold'>
          Powered by{' '}
          <span className=''>
            {' '}
            <img src={fueler} alt='' className='inline w-[15px]' />{' '}
          </span>{' '}
          Fueler
        </h1>
      </div>
    </div>
  )
}
