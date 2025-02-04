'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { FaSearch, FaUser, FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const profileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="bg-gradient-to-r from-black via-yellow-900 to-black shadow-xl fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl sm:text-3xl font-extrabold text-yellow-500 hover:text-yellow-400 transition-all duration-300 tracking-tight hover:scale-105 transform"
            >
              Booksji
            </Link>
          </div>

          {/* Search Bar - Updated styling */}
          <div className="flex-1 max-w-lg mx-6 hidden sm:block">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search for books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 rounded-xl border-2 border-yellow-900/30 focus:outline-none focus:ring-4 focus:ring-yellow-500/30 focus:border-yellow-500/50 bg-black/40 text-gray-200 placeholder-gray-400 backdrop-blur-sm transition-all duration-300"
              />
              <button className="absolute right-4 top-3.5 text-gray-400 hover:text-yellow-500 transition-all duration-300 transform hover:scale-110">
                <FaSearch className="text-xl" />
              </button>
            </div>
          </div>

          {/* Desktop Navigation Links - Updated hover effects */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {['Home', 'Categories', 'New Releases', 'Best Sellers'].map((item) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-300 hover:text-yellow-500 font-semibold transition-all duration-300 px-3 py-2 rounded-lg hover:bg-yellow-950/40 hover:scale-105 transform"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Profile and Mobile Menu Buttons Container */}
          <div className="flex items-center space-x-4">
            {/* Sign In Link - Replacing Profile Section */}
            <Link
              href="/signin"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-900/30 hover:bg-yellow-900/50 transition-all duration-300 hover:scale-105 transform"
            >
              <FaUser className="text-yellow-500 hover:text-yellow-400" />
            </Link>

            {/* Mobile menu button - Updated styling */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-900/30 hover:bg-yellow-900/50 transition-all duration-300 hover:scale-105 transform"
              >
                <FaBars className="h-5 w-5 text-yellow-500 hover:text-yellow-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown - Enhanced design */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-20 left-0 right-0 h-screen bg-gradient-to-b from-black/98 via-black/95 to-yellow-950/90 backdrop-blur-xl transform transition-all duration-300 animate-fadeIn overflow-y-auto pb-20">
            <div className="max-w-lg mx-auto px-4 py-6 space-y-8">
              {/* Mobile Search Bar - Enhanced styling */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for books..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-yellow-900/40 focus:outline-none focus:ring-4 focus:ring-yellow-500/30 focus:border-yellow-500/50 bg-black/60 text-gray-200 placeholder-gray-400 backdrop-blur-sm transition-all duration-300 text-lg shadow-lg"
                />
                <button className="absolute right-4 top-4 text-gray-400 hover:text-yellow-500 transition-all duration-300">
                  <FaSearch className="text-2xl" />
                </button>
              </div>
              
              {/* Mobile Navigation Links - Enhanced design */}
              <div className="space-y-4">
                <h3 className="text-yellow-500 text-lg font-semibold px-2 mb-2">Menu</h3>
                {['Home', 'Categories', 'New Releases', 'Best Sellers'].map((item) => (
                  <Link 
                    key={item}
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="block px-6 py-4 text-gray-200 hover:text-yellow-500 font-semibold transition-all duration-300 rounded-xl hover:bg-yellow-950/40 hover:translate-x-2 transform text-lg border border-yellow-900/30 hover:border-yellow-500/30 bg-black/40 shadow-lg backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Quick Actions Section - Enhanced */}
              <div className="pt-6 border-t border-yellow-900/30">
                <h3 className="text-yellow-500 text-lg font-semibold mb-4 px-2">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: 'My Profile', href: '/profile', icon: '👤' },
                    { title: 'My Orders', href: '/orders', icon: '📦' },
                    { title: 'Wishlist', href: '/wishlist', icon: '❤️' },
                    { title: 'Sign In', href: '/signin', icon: '🔐' }
                  ].map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex flex-col items-center justify-center px-4 py-5 text-gray-300 hover:text-yellow-500 transition-all duration-300 rounded-xl hover:bg-yellow-950/40 border border-yellow-900/30 hover:border-yellow-500/30 bg-black/40 shadow-lg backdrop-blur-sm gap-2 hover:scale-105 transform"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
