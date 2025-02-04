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
            {/* Profile Section - Updated with ref */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-900/30 hover:bg-yellow-900/50 transition-all duration-300 hover:scale-105 transform"
              >
                <FaUser className="text-yellow-500 hover:text-yellow-400" />
              </button>

              {/* Profile Dropdown - Updated design */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-gradient-to-b from-black/95 to-yellow-950/90 backdrop-blur-lg shadow-2xl py-3 z-50 border border-yellow-500/20 transform transition-all duration-300 animate-fadeIn">
                  <div className="py-2">
                    {[
                      { label: 'Sign In', href: '/signin', icon: '🔐' },
                      { label: 'Register', href: '/register', icon: '✨' },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-2.5 text-gray-300 hover:text-yellow-500 hover:bg-yellow-950/40 transition-all duration-300 group"
                      >
                        <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

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
          <div className="md:hidden fixed top-20 left-0 right-0 h-screen bg-black/95 backdrop-blur-lg transform transition-all duration-300 animate-fadeIn">
            <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
              {/* Mobile Search Bar - Enhanced styling */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for books..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-yellow-900/30 focus:outline-none focus:ring-4 focus:ring-yellow-500/30 focus:border-yellow-500/50 bg-black/40 text-gray-200 placeholder-gray-400 backdrop-blur-sm transition-all duration-300 text-lg"
                />
                <button className="absolute right-4 top-4 text-gray-400 hover:text-yellow-500 transition-all duration-300">
                  <FaSearch className="text-2xl" />
                </button>
              </div>
              
              {/* Mobile Navigation Links - Enhanced design */}
              <div className="space-y-3">
                {['Home', 'Categories', 'New Releases', 'Best Sellers'].map((item) => (
                  <Link 
                    key={item}
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="block px-6 py-4 text-gray-200 hover:text-yellow-500 font-semibold transition-all duration-300 rounded-xl hover:bg-yellow-950/40 hover:translate-x-2 transform text-lg border border-yellow-900/20 hover:border-yellow-500/30 bg-black/20"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Quick Actions Section */}
              <div className="pt-6 border-t border-yellow-900/30">
                <h3 className="text-yellow-500 text-lg font-semibold mb-4 px-2">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: 'My Profile', href: '/profile' },
                    { title: 'My Orders', href: '/orders' },
                    { title: 'Wishlist', href: '/wishlist' },
                    { title: 'Logout', href: '#', action: () => {/* Add logout logic */} }
                  ].map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center justify-center px-4 py-3 text-gray-300 hover:text-yellow-500 transition-all duration-300 rounded-xl hover:bg-yellow-950/40 border border-yellow-900/20 hover:border-yellow-500/30 bg-black/20"
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        item.action?.()
                      }}
                    >
                      {item.title}
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
