import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from "../components/home/Home";
import Footer from "../components/footer/Footer";
import Todo from "../components/todo/Todo";
import Signup from "../components/signup/Signup";
import SignIn from "../components/signup/SignIn";



export default function App() {
  return (
    <BrowserRouter>

      {/* Navbar visible on all pages */}
      <Navbar />

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/add" element={<Todo />} />

       <Route path="/signup" element={<Signup/>}/>
 <Route path="/signin" element={<SignIn/>}/>
      </Routes>
 <Footer />
    </BrowserRouter>
  );
}
