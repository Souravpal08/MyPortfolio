import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import FeatureCard from './sections/FeatureCard'
import Education from './sections/Education'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import {Analytics} from '@vercel/analytics/react'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
        <NavBar />
        <Hero />
        <ShowcaseSection />
        <FeatureCard />
        <Education />
        <TechStack />
        <Testimonials />
        <Contact />
        <Analytics />
        <Footer />
    </>
  )
}

export default App
