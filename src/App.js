
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

// import tw from "tailwind-styled-components"

// const Container = tw.div`
//   h-full
//   bg-purple-600

  
// `

function App() {
  return (
    <div id='allbg' className='  h-screen bg-purple-600 snap-y snap-mandatory scroll-smooth overflow-y-auto duration-200 ' >
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
