import About from "./Components/About/About";
import HeroSection from "./Components/HeroSection/HeroSection";
import OurTeam from "./Components/OurTeam/OurTeam";


function App() {
  return (
    <div>
       <img src='/Img/it-helpdesk.png' alt='' style={{position:'absolute',zIndex:'99999',width:'200px',right:'20px',top:"-40px",}}/>
      <HeroSection />
      <About/>
      <OurTeam/>
    </div>
  );
}

export default App;