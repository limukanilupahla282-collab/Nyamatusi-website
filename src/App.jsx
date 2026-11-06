import Hero from './components/hero'
import Story from './components/story'
import Activities from './components/activities'
import Sightings from './components/sightings'
import Itineraries from './components/itineraries'
import Testimonials from './components/testimonials'
import Gallery from './components/gallery'
import Footer from './components/footer'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Story />
        <Activities />
        <Sightings />
        <Itineraries />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}