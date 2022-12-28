import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Trainings from './components/trainings/Trainings'
import Gallery from './components/gallery/Gallery'
import PrivateClass from './components/privateClass/PrivateClass'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Gallery />
        <Trainings />
        <PrivateClass /> 
        <Contact />
        <Footer />
    </>
  )
}

export default App