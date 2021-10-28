import React, { useState } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'

export default () => {
  return (
    <div className="">
      <div className=" font-cerapro pb-5 px-10 pt-10 max-w-5xl mx-auto flex flex-col justify-between h-screen text-gray-900">
        <Header />
        <Section />
        <Footer />
      </div>
    </div>
  )
}
