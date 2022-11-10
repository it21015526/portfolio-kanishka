import logo from './logo.svg';
import './App.css';
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About'
import Project from './components/Project'
import {Button} from 'react-bootstrap'
import Navbarx from './components/Navbar';

function App() {
  return (
    
    <>
    {/* <AiTwotoneThunderbolt/> */}
    <Navbarx/>
    
      <Routes>
        <Route exact path = "/" element = {<Home/>}></Route>
        {/* <Route exact path = "/about" element = {<About/>}></Route> */}
        <Route exact path = "/project" element = {<Project/>}></Route>
      </Routes>
    </>
  );
}

export default App;
