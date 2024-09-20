import React, { useState } from 'react'
import { useAuth } from '../context/Authcontext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await login(email, password);
          navigate('/');
        } catch (error) {
          console.error('Failed to log in:', error);
        }
      };

  return (
 <div class="flex flex-col items-center justify-center min-h-screen  ">
     <div class="absolute inset-0 bg-black bg-opacity-60"></div>
  
     <div class="relative z-10 bg-black bg-opacity-80 p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-3xl text-white font-semibold mb-6">Sign In</h2>
        
        <form class="space-y-6" onSubmit={handleLogin}>
             <div>
                <input
                    type="email"
                    value={email}
                    onChange={(e) =>  setEmail(e.target.value)}
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
                Sign In
            </button>
           
            <div class="flex items-center justify-between text-gray-400 text-sm">
                <label class="flex items-center">
                    <input type="checkbox" class="mr-2 bg-gray-800" />
                    Remember me
                </label>
                <a href="/signin" class="hover:underline">Need help?</a>
            </div>
        </form>
 
        <div class="mt-6 text-gray-400 text-sm">
            <p>New to Netflix? <a href="/signup" class="text-white hover:underline">Sign up now.</a></p>
            <p class="mt-3">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="/signin" class="text-blue-500 hover:underline">Learn more.</a></p>
        </div>
    </div>
</div>

  )
}

export default Login