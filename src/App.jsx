import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/"element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/Login' element={<Login />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
