import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import { Link, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Type from './project/Type';
import TypeMaster from './project/TypeMaster';
import Result from './project/Result';


function App() {
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
