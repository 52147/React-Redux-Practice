import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/nav-bar/NavBar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {HomePage} from "./components/pages/HomePage"
import { AboutPage } from './components/pages/AboutPage';
import {Footer} from "./components/footer/Footer"
import { ContactPage } from './components/pages/ContactPage';
import { CounterFunctionalPage } from './components/pages/CounterFunctionalPage';
import {CounterClassPage} from './components/pages/CounterClassPage'
function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path = "/" exact element = {<HomePage/>}/>
        <Route path = "/about" exact element = {<AboutPage/>}/>
        <Route path = "/contact" exact element = {<ContactPage/>}/>
        <Route path = "/counter" exact element = {<CounterFunctionalPage/>}/>
        <Route path = "/counter_class" exact element = {<CounterClassPage/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
