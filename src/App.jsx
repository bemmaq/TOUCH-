import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'

import Footer from './components/Footer'
import ProductSection from './components/ProductSection/ProductSection'
import KnowYourselfSection from './components/KnowYourselfSection/KnowYourselfSection'
import NewArrivalsSection from './components/NewArrivalsSection/NewArrivalsSection'

const App = () => {
  return (
    <div className="font-sans">
    <Header />
    <Banner />
    <ProductSection />
    <KnowYourselfSection />
    <NewArrivalsSection />
    <Footer />
  </div>
  )
}

export default App