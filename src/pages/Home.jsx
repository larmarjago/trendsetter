
import Nav from '../Navigations/Nav'
import Categories from './Categories'
import Footer from '../Navigations/Footer'
import NewsLetter from '../Navigations/NewsLetter'
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
            <NewsLetter/>
          </div>
          <div>
             <Footer /> 
          </div>

    </div>
  );
}

export default Home
