import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import ComingSoon from "./Pages/Coming Soon/ComingSoon";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/skills' element={<Skills />}></Route>
          <Route path='*' element={<ComingSoon />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
