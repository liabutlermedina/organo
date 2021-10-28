import React, { useState } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'

export default () => {
  return (
    <div className=''>
      <div className=' font-cerapro py-10 px-32 max-w-7xl mx-auto flex flex-col justify-between h-screen text-gray-900'>
        <Header />
        <Section />
        <Footer />
      </div>
    </div>
  )
}
