import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SingleMovie from "./pages/SingleMovie";
import AdminLogin from "./pages/Admin/AdminLogin";
import UploadMovie from "./pages/Admin/UploadMovie";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/"element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/singlemovie/:movieid' element={<SingleMovie />} />
  
            {/* Admin Routes */}
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/uploadmovie" element={<UploadMovie />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
