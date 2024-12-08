import logo from '../assets/logo.png';
import { useState } from 'react';
import { Menu ,  X } from 'lucide-react';


const Navbar = () => {
  
const [isMenuOpen , setIsMenuOpen] = useState(false);

const toggleMenu = () => {

  setIsMenuOpen(!isMenuOpen);

};


  return (
    <nav className="sticky top-0 z-50 py-3 border-b backdrop-blur-lg border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
         <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className='h-10 w-10 mr-2' src={logo} alt="logo" />
            <span className='text-xl tracking-tight text-slate-300'>VReality</span>
          </div>

          <ul className='hidden lg:flex ml-12 space-x-12'>
            <a href="#features" className='text-white hover:text-gray-300
            '>Features</a>
            <a href="#workflow" className='text-white hover:text-gray-300
            '>Workflow</a>
            <a href="#pricing" className='text-white hover:text-gray-300
            '>Pricing</a>
            <a href="#testimonials" className='text-white hover:text-gray-300
            '>Testimonials</a>
          </ul>
          <div className='hidden lg:flex justify-center space-x-12 items-center'>
            <a href="" className='py-2 px-3 border rounded-md hover:text-neutral-700 hover:bg-neutral-300'>Sign In</a>
            <a href="" className='py-2 px-4 border rounded-md bg-gradient-to-r from-orange-500 to-red-800'>Create an Account</a>
          </div>
          {/* mobile view */}
          <div className='lg:hidden md:flex flex-col justify-end'>

            <button onClick={toggleMenu} className='text-white'>

              {isMenuOpen ? <X/> : <Menu/> }

            </button>
          </div>
         </div>
        </div>
    </nav>
  )
}

export default Navbar