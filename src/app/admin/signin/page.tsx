'use client'

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaLock } from 'react-icons/fa';

export default function AdminSignIn() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (credentials.username === 'admin' && credentials.password === 'admin123') {
        // Set admin token in both localStorage and cookie
        localStorage.setItem('adminToken', 'your-admin-token');
        document.cookie = 'adminToken=your-admin-token; path=/';
        
        // Get the redirect path from URL params or default to /admin
        const redirectTo = searchParams.get('from') || '/admin';
        
        // Use window.location for a full page reload
        window.location.href = redirectTo;
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111111] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle,#fbbf24_1px,transparent_1px)] bg-[length:30px_30px] opacity-20 rotate-45"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,#fbbf24_1px,transparent_1px)] bg-[length:30px_30px] opacity-20 rotate-45"></div>
        </div>
        <div className="absolute -inset-[10px]">
          <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/2 w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="max-w-md w-full space-y-8 bg-gradient-to-br from-black/95 to-black/80 p-10 rounded-3xl shadow-[0_0_50px_-12px] shadow-yellow-500/20 backdrop-blur-xl border border-yellow-500/10 relative z-10">
        <div className="text-center">
          <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaLock className="text-yellow-500 text-2xl" />
          </div>
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 animate-gradient-x">
            Admin Access
          </h2>
          <p className="mt-3 text-sm text-yellow-500/60 font-medium">
            Sign in to access admin panel
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-yellow-500/80 mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-yellow-900/30 focus:outline-none focus:ring-2 focus:ring-yellow-500/30 focus:border-yellow-500/50 bg-black/40 text-gray-200 placeholder-gray-500"
                placeholder="admin"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-yellow-500/80 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-yellow-900/30 focus:outline-none focus:ring-2 focus:ring-yellow-500/30 focus:border-yellow-500/50 bg-black/40 text-gray-200 placeholder-gray-500"
                placeholder="••••••••"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
} 