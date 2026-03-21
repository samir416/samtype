import './App.css';
import Home from './components/Home';
import About from './components/About';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Type from './project/Type';
import TypeMaster from './project/TypeMaster';
import Result from './project/Result';

function App() {
  const location = useLocation();

  //  Track page views with Google Analytics
  useEffect(() => {
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname 
    });
  }, [location]);

  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Type />} />
          <Route path="/typemaster" element={<TypeMaster />} /> 
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;