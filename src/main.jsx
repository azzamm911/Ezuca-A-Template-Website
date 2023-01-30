import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Testimony from './Testimony'
import Courses from './Courses'
import News from './News'
import Gallery  from './Gallery'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Navbar />
      <Hero />
      <AboutUs />
      <Testimony />
      <Courses />
      <News />
      <Gallery />
      <Footer />
  </React.StrictMode>
)
