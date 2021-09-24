// Component imports
import React, {useState, useEffect} from 'react';
import HeaderAnimation from "./components/HeaderAnimation";
import Nav from "./components/Nav";
import bg from "./images/header.jpg";
import "./App.css";
import FeatherIcon from 'feather-icons-react';

// Page imports
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Projects from './pages/Projects';

function App() {

  const upTop = (event) => {
    event.preventDefault();
    window.scroll({top: 0, behavior: 'smooth'});
  }

  return (
    <div className="App">
      <div class="w-full h-screen bg-no-repeat bg-cover -mt-2" style={{backgroundImage: `url(${bg})`}}>
        <div class="w-full h-screen bg-opacity-75 bg-gray-900">
          <Nav />
          <div class="flex h-screen w-full lg:mt-96">
            <HeaderAnimation />
          </div>
        </div>
      </div>
      <section className="bg-gray-100">
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </section>
      <div class="fixed z-30 bottom-0 right-0 mr-8 mb-8">
        <FeatherIcon icon="chevron-up" class="text-green-400 bg-gray-200 rounded-lg h-8 w-8" onClick={upTop}/>
      </div>
    </div>
  );
}

export default App;
