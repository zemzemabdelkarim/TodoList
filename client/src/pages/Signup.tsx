//import React from 'react'
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import type { CreateUserRequest } from "../types/DTO/CreateUserRequest"
import { createAccount } from "../api/userAuth";
import type { User } from "../types/User";

export default function Signup() {

  const [formData, setFormData] = useState<CreateUserRequest>({
    email: "",
    username: "",
    password: "",
    retypePassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id as keyof CreateUserRequest]: e.target.value });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: User = await createAccount(formData);
    console.log("res data :  ",data)
  }

  useEffect(() => { console.log(formData) }, [formData])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-md px-8 py-8">
        <div className="flex justify-center mb-4">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            T
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Todo App
          </h1>
          <p className="text-gray-500 mt-2">
            Create an account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>

              <input
                type="email"
                id="email"
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>

              <input
                type="text"
                id="username"
                onChange={handleChange}
                placeholder="Alex_Axel or any other format"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>

              <input
                type="password"
                id="password"
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Retypr Password
              </label>

              <input
                type="password"
                id="retypePassword"
                onChange={handleChange}
                placeholder="Retype your password"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Login button */}
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium shadow-sm transition"
              type="submit"
            >
              Create an account
            </button>

          </div>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login">
            <button className="text-blue-600 hover:underline font-medium">
              Login
            </button>
          </Link>
        </div>

      </div>
    </div>
  )
}
