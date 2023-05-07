import './App.css';
import './styles/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Iir from './components/IIR';
import Prediction from './components/Prediction';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Login from './components/Login';

function App() {
  const [loading, setLoading] = useState(true);
  //const [hostname, setHostname] = useState('');

  useEffect(() => {
    // let _hostname = window.location.href;
    // let i = _hostname.indexOf("/frontend");
    // _hostname = _hostname.substring(0, i);

    // _hostname += "/frontend";

    // setHostname(_hostname);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

  }, []);

  return (
    /**
     * TODO : addn basename='/frontend' to BrowserRouter
     */
    <BrowserRouter>
      {loading && <div className='start-loading'>
          <img src={'/assets/loading-dot.gif'} alt="start-loading"/>
        </div>}
      <div className={loading ? "display-none" : ""}>
        <Navbar/>
        <div id="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/iir" element={<Iir />} />
            <Route path="/a_propos" element={<About  />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
