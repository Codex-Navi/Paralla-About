import { useEffect, useRef } from 'react';
import './hero.css'

function HeroSection() {
  const moonRef = useRef(null);
  const textRef = useRef(null);
  const trainRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      if (moonRef.current) {
        moonRef.current.style.top = `${value * 0.9}px`;
      }

      if (textRef.current) {
        textRef.current.style.top = `${80 + value * -0.2}%`;
      }

      if (trainRef.current) {
        trainRef.current.style.left = `${value * 1.5}px`;
      }
    
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




    return (
        <>
           <section className='parallax-home'>
        <img src='/Img/Home-Images/sky.png' alt='' id=''/>
        <img src='/Img/Home-Images/moon.png' alt='' id='moon' ref={moonRef} />
        <img src='/Img/Home-Images/water.png' alt='' id=''/>
        
        <img src='/Img/Home-Images/right-city1.png' alt='' id=''/>
        <img src='/Img/Home-Images/left-city1.png' alt='' id=''/>
        <img src='/Img/Home-Images/train.png' alt='' id='train' ref={trainRef} />
        <img src='/Img/Home-Images/rail.png' alt='' id=''/>

        
          <img src='/Img/it-helpdesk.png' alt='' className='helpdesk-logo' style={{height:'300px',width:'300px'}} ref={textRef}/>
        


        <img src='/Img/Home-Images/hill-left-1.png' alt='' id=''/>
        <img src='/Img/Home-Images/hill-right-1.png' alt='' id=''/>
        
      </section>
            
        </>
    );
}

export default HeroSection;