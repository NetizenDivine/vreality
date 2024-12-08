import Features from "./components/Features"
import Navbar from "./components/Navbar"
import Hero from "./components/hero"
import Workflow from "./components/Workflow"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
    <Navbar/>
    <div className="mx-auto max-w-7xl pt-20 px-6">
    <Hero/>
    <Features/>
    <Workflow/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
    </div>
    
    </>
  )
}

export default App