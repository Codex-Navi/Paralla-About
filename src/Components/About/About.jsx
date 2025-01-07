import { useEffect, useRef } from 'react';
import './about.css'





function About() {
  
    let manRef=useRef(null)


  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      if (manRef.current) {
        manRef.current.style.left = `${value * .6}px`;
      }
    
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




    return (
        <>

<section className='about' id='about'>
        <div className='info-box'>
          <h2>About Us</h2>
          <p>IT Help-Desk is a leading provider of comprehensive IT services and telecom solutions, dedicated to supporting businesses of all sizes in navigating the digital landscape. With a customer-first approach, we specialize in offering tailored IT support, including network management, cybersecurity, hardware and software solutions, as well as advanced telecom services. Our expert team of skilled technicians is committed to delivering reliable, innovative, and efficient solutions that enhance operational productivity and ensure seamless communication.

At IT Help-Desk, we understand the importance of technology in today’s fast-paced business world, which is why we strive to provide proactive services that prevent issues before they arise. Our mission is to help businesses stay connected, secure, and ahead of the curve with cutting-edge technology solutions.</p>
         
        </div>
        <img src='/Img/About-Images/waterfall.png' id='waterfall' className='about-waterfall'/>
        <img src='/Img/About-Images/water.png'/>
        <img src='/Img/About-Images/man1.png' ref={manRef} style={{position:"absolute",bottom:'0px'}} />
        <img src='/Img/About-Images/grass.png'/>
       
      </section>
            
        </>
    );
}

export default About;