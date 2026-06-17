import { Routes, Route } from 'react-router-dom';

//list
import Home from './Home';
import NavBar from './NavBar';
import Footer from './Footer';
import About from './About';
import ReportSteps from './Report/ReportSteps';


function Main() {
  return (
    <div className="bg-dark text-light">
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/report-steps' element={<ReportSteps />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default Main;
