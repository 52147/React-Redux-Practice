import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/nav-bar/NavBar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {HomePage} from "./components/pages/HomePage"
import { AboutPage } from './components/pages/AboutPage';
import {Footer} from "./components/footer/Footer"
import { ContactPage } from './components/pages/ContactPage';
function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path = "/" exact element = {<HomePage/>}/>
        <Route path = "/about" exact element = {<AboutPage/>}/>
        <Route path = "/contact" exact element = {<ContactPage/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
