import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Updated with new gradient background */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-yellow-900 to-black overflow-hidden">
        {/* Decorative backdrop pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 rounded-full bg-yellow-900/30 backdrop-blur-sm text-yellow-500 text-sm font-medium">
                📚 Welcome to My Literary World
              </span>
              <h1 className="text-5xl font-extrabold tracking-tight text-yellow-500 sm:text-6xl md:text-7xl">
                <span className="block">My Book Collection</span>
                <span className="block text-3xl sm:text-4xl md:text-5xl mt-4 text-yellow-600/80">Where Stories Come to Life</span>
              </h1>
            </div>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-8 leading-relaxed">
              Discover my carefully curated collection of books across various genres. 
              Each book tells a unique story waiting to be explored.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Collection
              </button>
              <button className="px-8 py-4 bg-transparent text-yellow-500 border-2 border-yellow-500 font-semibold rounded-full hover:bg-yellow-900/30 transition-all duration-300">
                View Categories
              </button>
            </div>
          </div>
        </div>
        
        {/* Update gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Books', value: '500+' },
              { label: 'Categories', value: '20+' },
              { label: 'Reviews', value: '1000+' },
              { label: 'Reading Hours', value: '5000+' }
            ].map((stat) => (
              <div key={stat.label} className="p-6">
                <p className="text-4xl font-bold text-yellow-500">{stat.value}</p>
                <p className="mt-2 text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16 bg-black/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow-500 mb-8">Featured Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((book) => (
              <div key={book} className="bg-black/50 rounded-xl shadow-md shadow-yellow-900/20 overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-yellow-900/30">
                <img 
                  src="/placeholder-book.jpg" 
                  alt="Book cover" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-yellow-500">Book Title</h3>
                      <p className="mt-2 text-gray-400">Author Name</p>
                    </div>
                    <span className="bg-yellow-900/30 text-yellow-500 text-xs font-semibold px-2.5 py-0.5 rounded">4.5 ★</span>
                  </div>
                  <p className="mt-4 text-sm text-gray-400">
                    A brief description of the book goes here. This can be a short synopsis or your thoughts about it.
                  </p>
                  <button className="mt-4 text-yellow-500 hover:text-yellow-400 font-medium">
                    Read more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow-500 mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['Fiction', 'Non-Fiction', 'Science', 'History', 'Biography', 'Technology', 'Art', 'Philosophy'].map((category) => (
              <div 
                key={category}
                className="p-6 bg-black/50 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:bg-yellow-900/30 group border border-yellow-900/30"
              >
                <h3 className="text-lg font-medium text-gray-300 group-hover:text-yellow-500">{category}</h3>
                <p className="mt-2 text-sm text-gray-500">Explore our collection</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-black via-yellow-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">Subscribe to our newsletter for the latest book recommendations</p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-900 bg-black/50 text-gray-200 placeholder-gray-500 border border-yellow-900/30"
              />
              <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
