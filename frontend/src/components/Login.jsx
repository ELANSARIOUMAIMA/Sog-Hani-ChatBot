import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaCheckCircle, FaEye, FaEyeSlash, FaLock,FaUser, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = ({ onLoginSuccess, onClose }) => {

  const [showToast, setShowToast] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ username: '', password: '', rememberMe: false })


  useEffect(()=>{
    const stored =localStorage.getItem('loginData')
    if(stored) setFormData(JSON.parse(stored))
  },[])

  const handleSubmit = e => {
    e.preventDefault()
    formData.rememberMe ? localStorage.setItem('loginData', JSON.stringify(formData))
      : localStorage.removeItem('loginData')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
    onLoginSuccess()
  }
  const handleChange = ({ target: { name, value, type, checked } }) =>
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox'? checked: value }))

  const toggleShowPassword = () => setShowPassword(prev => !prev)

  return (
    <div className="space-y-6 relative">
      <div className={`fixed top-4 right-4 z-50 transition-all duration-300
        ${showToast ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
        <div className="bg-green text-[#F5F5F5] px-4 py-3 rounded-md shadow-lg flex items-center gap-2 text-sm">
          <FaCheckCircle className='flex-shrink-0' />
          <span className="">Login Successful!</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} action="" className="space-y-6">
        <div className="relative">
          <FaUser className='absolute top-1/2 transform -translate-y-1/2 left-3 text-[#FFF200]' />
          <input type="text" name='username' placeholder='Username' value={formData.username} onChange={handleChange} className="pl-10 pr-10 py-3 w-full rounded-lg bg-[#D6E6F2] text- placeholder-[#303481] focus:outline-none focus:ring-2" />
        </div>

        <div className="relative">
          <FaLock className='absolute top-1/2 transform -translate-y-1/2 left-3 text-[#FFF200]' />
          <input type={showPassword ? 'text' : 'password'} name='password' placeholder='Password' value={formData.password} onChange={handleChange} className="pl-10 pr-10 py-3 w-full rounded-lg bg-[#D6E6F2] text-[#F5F5F5] placeholder-[#303481] focus:outline-none focus:ring-2" />
          <button type='button' onClick={toggleShowPassword} className="absolute right-3
            top-1/2 transform -translate-y-1/2  text-[#FFF200]">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="flex items-center">
          <label htmlFor="" className="flex items-center">
            <input type="checkbox"  name='rememberMe'  className="h-5 w-5 text-[#303481] border-[#FFF200] rounded bg-[#F5F5F5] focus:ring-[#303481] " />
            <span className="ml-2 text-[#303481]">Remember me</span>
          </label>
        </div>

        <button className="w-full py-3 bg-gradient-to-r from-[#303481] to-[#FFF200] text-[#F5F5F5] font-bold rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform">
          Sign In <FaArrowRight/>
        </button>
      </form>

      <div className="text-center">
        <Link to='/signup' onClick={onclose} className='inline-flex items-center gap-2 text-[#303481] hover-text-blue-600 text-xl transition-colors'>
        <FaUserPlus/> Create New Account</Link>
      </div>
    </div>
  )
}

export default Login