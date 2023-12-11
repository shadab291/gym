import React from "react";
import Home from "./Component/Assets/Home";
import Services from "./Component/Assets/Services";
import About from "./Component/Assets/About";
import Contact from "./Component/Assets/Contact";
// import Appbar from "./Component/CommonComponents/Appbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyDashboard from "./Component/Assets/Dashboard";
import MyAccount from "./Component/Assets/Account";
import MyProfile from "./Component/Assets/Profile";
import Login from "./Component/Assets/LoginForm";
import Footer from "./Component/CommonComponents/footer";
import Navbar from "./Component/CommonComponents/Navbar";


function App() {  
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<MyDashboard />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/Login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter> 
  );
}

export default App;
