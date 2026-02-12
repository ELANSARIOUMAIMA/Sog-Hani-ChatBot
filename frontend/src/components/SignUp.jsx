import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import { FaEyeSlash,FaEye } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const AwesomeToast = ({ message, icon }) => (
  <div className="animate-slide-in fixed  bottom-6 right-6 flex items-center bg-gradient-to-br  from-[#303481] to-[#FFF200] px-6  py-4 rounded-lg shadow-lg border-2 border-[#FFF200] ">
    <span className="text-2xl mr-3  text-[#303481]">{icon}</span>
    <span className=" font-semibold  text-[#303481]">{message}</span>
  </div>
)

const SignUp = () => {

  const [showToast, setShowToast] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ username: '', email: '', password: '' })
  const navigate = useNavigate()

  // FOR TOAST 
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false)
        navigate('/login')
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [showToast, navigate])

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const toggleShowPassword = () => setShowPassword(prev => !prev)

  const handleSubmit=async e=>{

    e.preventDefault();

    try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    if (data.success) {
      setShowToast(true);
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.error(err);
    alert('Registration failed');
  }
    console.log('Sign Up Data:',formData)
    setShowToast(true)

  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-[#F5F5F5] p-4'>
      {showToast && <AwesomeToast message="Sign Up Successful" icon={<FaCheckCircle />}></AwesomeToast>}
      <div className="w-full max-w-md bg-gradient-to-br from-[#303481] to-[#FFF200]  p-8 rounded-xl shadow-lg border-4 border-[#FFF200] transform transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-[#303481] to-[#303481]  text-transparent bg-clip-text  mb-6 hover:scale-105 transition-transform">
          Create Account
        </h1>
        <form action="" onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="username" placeholder='Username' value={formData.username}
            onChange={handleChange} className="w-full px-4 py-3 rounded-lg text-[#303481]  bg-[#D6E6F2]  placeholder-[#303481] focus:outline-none focus:ring-2 transition-all duration-200 hover:scale-[1.02]" required />

            <input type="email" name="email" placeholder='Email' value={formData.email}
            onChange={handleChange} className="w-full px-4 py-3 rounded-lg text-[#303481]  bg-[#D6E6F2] placeholder-[#303481] focus:outline-none focus:ring-2 transition-all duration-200 hover:scale-[1.02]" required />

            <div className="relative">
              <input type= {showPassword ? "text":"password" }name="password" placeholder='Password' value={formData.password}
            onChange={handleChange} className="w-full px-4 py-3 rounded-lg text-[#303481]  bg-[#D6E6F2] text- placeholder-[#303481] focus:outline-none focus:ring-2 transition-all duration-200 hover:scale-[1.02]" required />
            <button className="absolute inset-y-0 right-4 flex items-center text-[#303481] transform hover:scale-125"type='button' onClick={toggleShowPassword}>
              {showPassword ? <FaEyeSlash/> :<FaEye/> }
            </button>
            </div>
            <button type='submit' className="w-full py-3 bg-gradient-to-r  from-[#303481] to-[#FFF200] text-[#303481] font-bold rounded-lg hover:scale-105 transition-transform duration-300 hover-shadow-lg ">
              Sign Up
            </button>
        </form>
        <div className="mt-6  mx-auto text-center  px-2 border-2 rounded-3xl w-38 hover:bg-[#D6E6F2] border-[#F5F5F5]">
          <Link to={'/login'} className='group inline-flex items-center text-[#303481] hover:text-[#303481] transition-all duration-300 '>
          <FaArrowLeft className='m-2 transform -translate-x-2 opacity-50   group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300'/>
          <span className="transform group-hover:-translate-x-2  transition-all duration-300">
            Back To Login
          </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp