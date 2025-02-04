'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const router = useRouter();

  const handleOTPChange = (index: number, value: string) => {
    if (value.length > 1) return; // Prevent multiple digits in one box
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    
    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!showOTP) {
      // First step: Send OTP to phone number
      console.log('Sending OTP to phone:', phoneNumber);
      setShowOTP(true);
    } else {
      // Second step: Verify OTP
      console.log('Verifying OTP:', otp.join(''));
      // Add your OTP verification logic here
    }
  };

  const handleGoogleSignIn = async () => {
    // Add Google Sign-in logic here
    console.log('Google sign in attempted');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111111] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Honeycomb-inspired background pattern */}
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
        <div>
          <h2 className="mt-2 text-center text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 animate-gradient-x">
            Welcome Back
          </h2>
          <p className="mt-3 text-center text-sm text-yellow-500/60 font-medium">
            Sign in to continue your journey
          </p>
        </div>

        <div className="mt-8">
          <button
            onClick={handleGoogleSignIn}
            className="group relative w-full flex items-center justify-center gap-3 py-4 px-6 border border-yellow-500/20 rounded-2xl shadow-sm bg-yellow-500/5 hover:bg-yellow-500/10 transition-all duration-300 hover:shadow-[0_0_30px_-12px] hover:shadow-yellow-500/30"
          >
            <img 
              src="https://www.google.com/favicon.ico" 
              alt="Google logo" 
              className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
            />
            <span className="text-yellow-500/80 font-semibold group-hover:text-yellow-400 transition-colors duration-200">
              Continue with Google
            </span>
          </button>

          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-yellow-500/20" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-6 bg-black text-yellow-500/60 font-medium">or continue with phone</span>
            </div>
          </div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="transform transition-all duration-200">
            <label htmlFor="phone-number" className="block text-sm font-bold text-yellow-500/80 mb-2">
              Phone Number
            </label>
            <input
              id="phone-number"
              name="phoneNumber"
              type="tel"
              autoComplete="tel"
              required
              disabled={showOTP}
              className="block w-full px-5 py-4 border border-yellow-500/20 rounded-2xl shadow-sm placeholder-yellow-500/30 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent transition-all duration-200 hover:border-yellow-500/30 bg-yellow-500/5 text-yellow-500"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          {showOTP && (
            <div className="transform transition-all duration-200">
              <label htmlFor="otp" className="block text-sm font-bold text-yellow-500/80 mb-2">
                Enter OTP
              </label>
              <div className="flex gap-3 justify-between">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={otp[index]}
                    onChange={(e) => handleOTPChange(index, e.target.value)}
                    className="w-14 h-14 text-center border border-yellow-500/20 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent transition-all duration-200 hover:border-yellow-500/30 bg-yellow-500/5 text-yellow-500 text-xl font-bold"
                  />
                ))}
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-4 px-6 rounded-2xl text-base font-bold text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_30px_-12px] hover:shadow-yellow-500/50"
          >
            {showOTP ? 'Verify OTP' : 'Continue with Phone'}
          </button>
        </form>
      </div>
    </div>
  );
}
