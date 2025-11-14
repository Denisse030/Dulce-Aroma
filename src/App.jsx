import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Recipes from './components/Recipes'
import Recommendations from './components/Recommendations'
import Contact from './components/Contact'
import BrewBar from './components/BrewBar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <About />
      <Recipes />
      <BrewBar />
      <Recommendations />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
