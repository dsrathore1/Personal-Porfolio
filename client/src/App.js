import About from './Pages/About/About';
import ContactMe from './Pages/ContactMe/ContactMe';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Skills from './Pages/Skills/Skills';

// import ComingSoon from "./Pages/Coming Soon/ComingSoon";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <ContactMe />
      <Footer />
      {/* <ComingSoon /> */}
    </div>
  );
}

export default App;
