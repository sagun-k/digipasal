import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Login from './components/Login'
import SignUp from './components/SignUp'
import NotFound from "./components/NotFound"
import AddProducts from './components/AddProducts'
import Cart from './components/Cart'
import Navbar from "./components/Navbar";

function App() {
  return (
  <Router>
    
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/signup" element={<SignUp/>} />
    <Route exact path="/addproducts" element={<AddProducts/>} />
    
    <Route exact path="/cart" element={<Cart/>} />
    

    <Route  element={<NotFound/>} />
    </Routes>
  </Router>
  );
}

export default App;
