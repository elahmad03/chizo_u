import React, { useEffect } from 'react';
import Showcase from '../components/Showcase';
import Services from '../components/Services';
import Team from '../components/Team';
import { useLocation } from 'react-router-dom';
import { animateScroll as ScrollLink } from 'react-scroll';
import Partners from '../components/Partners';
import GallerySlider from '../components/GallerySlide';
import About from '../components/About';

function Home() {
  
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      ScrollLink.scrollTo(targetId, {
        smooth: true,
        duration: 500,
        offset: -80, // Adjust as needed
      });
    }
  }, [location]);

  return (
    <div className='max-w-7xl mx-auto'>
      {/* showcase section */}
      <section>
        <Showcase />
      </section>
       {/* about section */}
       <section>
        <About />
      </section>
      {/* services */}
      <section id="services">
        <Services />
      </section>
      {/* gallery */}
      <section id="gallery">
        <GallerySlider />
      </section>
      
      
      {/* our team */}
      <section id="team">
        <Team />
      </section>
      {/* our partners */}
      <section id="partners">
        <Partners />
      </section>
      
    </div>
  );
}

export default Home;