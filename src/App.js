import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Compenents/Footer";
import Header from "./Compenents/Header";
import Home from "./Compenents/Home";
import "./App.scss";
import Login from "./Compenents/Login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
