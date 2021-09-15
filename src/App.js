// Component imports
import HeaderAnimation from "./components/HeaderAnimation";
import Nav from "./components/Nav";
import bg from "./images/header1.jpg";
import "./App.css";

// Page imports
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <div class="w-full h-screen bg-no-repeat bg-cover -mt-2" style={{backgroundImage: `url(${bg})`}}>
        <div class="w-full h-screen bg-opacity-75 bg-gray-900">
          <Nav />
          <div class="flex items-center justify-center h-full w-full mt-96 pl-36">
            <HeaderAnimation />
          </div>
        </div>
      </div>
      <section className="bg-gray-100">
        <About />
        <Projects />
        <Contact />
        <Footer />
      </section>
    </div>
  );
}

export default App;
