import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import ComingSoon from "./Pages/Coming Soon/ComingSoon";
import Main from './Pages/Projects/Main Page/Main';
import Design from './Pages/Projects/Design/Design.jsx';
import DevOps from './Pages/Projects/DevOps/DevOps';
import Development from './Pages/Projects/Development/Development';
import Resume from './Pages/About/Resume/Resume';
import DonateMe from './Pages/Donate Me/DonateMe';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/skills' element={<Skills />}></Route>
          <Route path='/projects' element={<Main />}></Route>
          <Route path='/design' element={<Design />}></Route>
          <Route path='/devOps' element={<DevOps />}></Route>
          <Route path='/development' element={<Development />}></Route>
          <Route path='/resume' element={<Resume />} />
          <Route path='/donateMe' element={<DonateMe />} />
          <Route path='*' element={<ComingSoon />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
