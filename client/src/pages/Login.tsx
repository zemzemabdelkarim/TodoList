import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState, type ChangeEvent, } from "react";
import { login } from "../api/userAuth";
import type { LoginRequest } from "../types/DTO/requests/LoginRequest";
import type { LoginResponse } from "../types/DTO/responses/LoginResponse";
import axios from "axios";
import type { ErrorMessage } from "../types/DTO/responses/ErrorMessage";
import { useAppDispatch } from "../redux/hooks";
import { setToken, setUser } from "../redux/userSlice";
// I was going to test redux in Sign up please fix this

export default function Login() {
  const [resData, setResData] = useState<LoginResponse | null>()
  const [formData, setFormData] = useState<LoginRequest>({
    emailOrUsername: "",
    password: ""
  });
  const [error, setError] = useState<ErrorMessage | null>()

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.id as keyof LoginRequest]: e.target.value });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await login(formData);
      setResData(data);
      
      dispatch(setUser(data.userResponse));
      dispatch(setToken(data.token));
      navigate('/');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data || { message: "Login error!", status: 0 };
        setError(message);
      } else {
        setError({ message: "Something went wrong!", status: 0 });
      }
    }
  }

  useEffect(() => { console.log("resData = ", resData) }, [resData]);
  useEffect(() => { console.log("FormData =  ", formData) }, [formData]);
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
            Sign in to your account
          </p>
        </div>

        {(error && (error.status != 404 && error.status != 401)) && (
          <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error.message}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email or Username
            </label>

            <input
              type="text"
              id="emailOrUsername"
              onChange={handleInputChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            {(error && error.status == 404) && (
              <span className="text-red-400">{error.message}</span>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>

            <input
              type="password"
              id="password"
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            {(error && error.status == 401) && (
              <span className="text-red-400">{error.message}</span>
            )}
          </div>

          {/* Login button */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium shadow-sm transition"
          >
            Sign In
          </button>

        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/signup">
            <button className="text-blue-600 hover:underline font-medium">
              Sign up
            </button>
          </Link>
        </div>

      </div>

    </div>
  );
}