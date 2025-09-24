import React from 'react'
import Nav from '../Navigations/Nav'
import Categories from './Categories'
import Footer from '../Navigations/Footer'
import Newsletter from '../Navigations/NewsLetter'
import Hero from '../Navigations/Hero'

const Home = () => {
  return (
    <div>
      <div>
              <Nav />
              
          </div>
          <div>
            <Hero />
           </div>
          <div className='mt-20'>
        <Categories />
          </div>
          <div>
            <Newsletter/>
          </div>
          <div>
             <Footer /> 
          </div>

    </div>
  );
}

export default Home
