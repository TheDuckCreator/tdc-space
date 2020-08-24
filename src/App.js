import React, { useState } from 'react'
import 'bulma/css/bulma.min.css'
import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Hero from './Component/Hero'

const title = 'Spece สเปซ'
function App() {
  return (
    <div>
      <Header />
      <Hero title={title} />
      <div className="container">
        <section className="section"></section>
      </div>
      <Footer />
    </div>
  )
}

export default App
