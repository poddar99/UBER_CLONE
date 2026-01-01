import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = async (e) => {
    e.preventDefault()

    const data = {
      email,
      password,
    }

    setUserData(data)
    console.log(data)
  }

  return (
    <div className="p-7 min-h-screen flex flex-col">
      {/* Uber Logo */}
      <img
        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        alt="Uber Logo"
        className="w-16 mb-4"
      />

      {/* Login Form */}
      <form onSubmit={submitHandler}>
        <h3 className="text-lg font-medium mb-2">What's your email</h3>

        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-[#EEEEEE] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="email"
          placeholder="email@example.com"
        />

        <h3 className="text-lg font-medium mb-2">Enter your password</h3>

        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-[#EEEEEE] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="password"
          placeholder="password"
        />

        <button
          type="submit"
          className="bg-[#111] text-white font-semibold mb-2 rounded-lg px-4 py-2 w-full text-lg"
        >
          Login
        </button>
      </form>

      {/* Signup link */}
      <p className="text-center mt-3 mb-6">
        New here?{' '}
        <Link to="/signup" className="text-blue-600">
          Create new Account
        </Link>
      </p>

      {/* Captain Login */}
      <Link
        to="/captain-login"
        className="bg-[#10b461] flex items-center justify-center text-white font-semibold rounded-lg px-4 py-2 w-full text-lg"
      >
        Sign in as Captain
      </Link>
    </div>
  )
}

export default UserLogin
