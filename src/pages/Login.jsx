import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [data, setData] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    }
  return (
    <>
      <div className="container min-w-screen min-h-screen flex flex-col items-center justify-center bg-[#09090B] text-white">
        <div className="w-[25vw] h-[auto] bg-[#18181B] flex flex-col p-[20px] shadow-black/50 rounded-lg">
        <img src={logo} alt="Logo" className="w-3xs mx-auto mb-6"/>
          <h1 className="text-2xl mb-5">Login</h1>
          <form  onSubmit={handleSubmit} action="" noValidate>
            <div className="inputBox mb-4">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="inputBox mb-4">
              <input type="password" placeholder="Password" required />
            </div>
            <p className="text-sm">Don't have an account? <Link to='/signup' className="text-[#1D4ED8]">Register Now</Link></p>
            <p className="text-sm text-red-500 mt-2">{error}</p>
            <button className="w-full bg-[#1D4ED8] my-4 cursor-pointer p-[10px] text-white rounded-[5px] text-[15px] border-0">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
