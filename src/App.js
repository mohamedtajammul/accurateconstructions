import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Gallery />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
