import React, { useState } from 'react';
import { useAuth } from '../context/Authcontext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const { signup } = useAuth();
    const navigate = useNavigate();
    
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
          await signup(email, password);
          navigate('/');
        } catch (error) {
          console.error('Failed to create an account:', error);
        }
      };
  return (
     <div class="flex flex-col items-center justify-center min-h-screen  ">
         <div class="absolute inset-0 bg-black bg-opacity-60"></div>
    
         <div class="relative z-10 bg-black bg-opacity-80 p-10 rounded-lg shadow-lg w-full max-w-md">
            <h2 class="text-3xl text-white font-semibold mb-6">Sign Up</h2>
            
            <form class="space-y-6 " onSubmit={handleSignup}>
                 <div>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        value={name}
                        placeholder="Full Name"
                        class="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                </div>
    
                 <div>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        value={email}
                        placeholder="Email or phone number"
                        class="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                </div>
    
                 <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        class="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                </div>
    
       
                <button
                    type="submit"
                    class="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg font-semibold"
                >
                    Sign Up
                </button>
     
                <div class="mt-6 text-gray-400 text-sm">
                    <p>Already have an account? <a href="/signin" class="text-white hover:underline">Sign in now.</a></p>
                </div>
            </form>
    
          
            <div class="mt-6 text-gray-400 text-sm">
                <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="/signup" class="text-blue-500 hover:underline">Learn more.</a></p>
            </div>
        </div>
    </div>
    
  )
}

export default Signup