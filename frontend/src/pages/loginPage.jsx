import React, { useState, useContext, useEffect } from 'react'
import { FaArrowRight, FaEye, FaEyeSlash, FaLock, FaUser, FaUserPlus } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AppContext } from '../context/AppContext'

const LoginPage = () => {

  const { backendUrl,token,setToken,}=useContext(AppContext)
  
  const navigate = useNavigate()

  const [state, setState] = useState('SignUp')

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if(state==="SignUp"){
        const {data}=await axios.post(backendUrl+'/api/user/register',{name,password,email})
        if (data.success){
          toast.success("Account created successfully 🎉"); // ADD THIS
          localStorage.setItem('token',data.token)
          setToken(data.token)
          // Navigate to login page
          navigate("/");
        }else{
          toast.error(data.message)
        }

      }else{
        const {data}=await axios.post(backendUrl+'/api/user/login',{password,email})
        if (data.success){
          localStorage.setItem('token',data.token)
          setToken(data.token)
           navigate("/dashboard");
        }else{
          toast.error(data.message)
        }

      }
      
    } catch (error) {
      toast.error(error.message)
      
    }
    
  }

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#303481] to-[#1b1f5c] px-4">

    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6">

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#303481]">
            {state === "SignUp" ? "Create Account" : "Welcome Back"}
          </h1>
          <p className="text-gray-500 mt-2">
            Please {state === "SignUp" ? "sign up" : "sign in"} to SOG-HANI
          </p>
        </div>

        {/* Username */}
        {state === "SignUp" && (
          <div className="relative">
            <FaUser className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400"/>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className="pl-10 py-3 w-full rounded-lg border focus:ring-2 focus:ring-[#303481] outline-none"
            />
          </div>
        )}

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-3 w-full rounded-lg border focus:ring-2 focus:ring-[#303481] outline-none"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <FaLock className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400"/>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="pl-10 pr-10 py-3 w-full rounded-lg border focus:ring-2 focus:ring-[#303481] outline-none"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Button */}
        <button type='submit' className="w-full py-3 bg-[#303481] text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition">
          {state === 'SignUp'? "Create Account":"Login"}
        </button>
         <div className="text-center text-sm">
        {state === "SignUp" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-[#303481] font-semibold cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => setState("SignUp")}
              className="text-[#303481] font-semibold cursor-pointer hover:underline"
            >
              Sign up
            </span>
          </p>
        )}
      </div>

      </form>

      {/* Toggle */}
     

    </div>
  </div>
)
}

export default LoginPage
