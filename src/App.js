// Component imports
import HeaderAnimation from "./components/HeaderAnimation";
import Nav from "./components/Nav";
import logo from "./logo.svg";
import bg from "./images/header1.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="w-full h-screen bg-no-repeat bg-cover -mt-2" style={{backgroundImage: `url(${bg})`}}>
        <div class="w-full h-screen bg-opacity-75 bg-gray-900">
          <Nav />
          <div class="flex items-center justify-center h-full w-full">
            <div class="text-center">
              <HeaderAnimation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
