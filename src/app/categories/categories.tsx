'use client';
import React from 'react';

const Categories = () => {
  // Sample categories data - you can replace this with your actual data
  const categories = [
    { id: 1, name: 'Fiction', count: 45, icon: '📚' },
    { id: 2, name: 'Non-Fiction', count: 38, icon: '📖' },
    { id: 3, name: 'Science Fiction', count: 24, icon: '🚀' },
    { id: 4, name: 'Mystery', count: 32, icon: '🔍' },
    { id: 5, name: 'Biography', count: 18, icon: '👤' },
    { id: 6, name: 'Self-Help', count: 27, icon: '🌟' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-yellow-950 to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 mb-6 animate-pulse-slow">
            Explore Categories
          </h1>
          <p className="text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Embark on a journey through our diverse collection of literary treasures
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-black/30 backdrop-blur-md rounded-2xl shadow-xl 
                hover:shadow-yellow-600/30 p-8 transition-all duration-500 hover:-translate-y-2 
                cursor-pointer border border-yellow-900/30 hover:border-yellow-600/50
                before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r 
                before:from-yellow-600/0 before:to-yellow-600/0 before:hover:from-yellow-600/10 
                before:hover:to-yellow-600/5 before:transition-all before:duration-500"
            >
              <div className="flex items-center justify-between mb-8 relative">
                <span className="text-5xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {category.icon}
                </span>
                <span className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black text-sm font-bold 
                  px-4 py-2 rounded-full shadow-lg group-hover:shadow-yellow-500/50 transition-all duration-300">
                  {category.count} books
                </span>
              </div>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                from-yellow-100 to-yellow-300 mb-4 group-hover:from-yellow-400 
                group-hover:to-yellow-600 transition-all duration-300">
                {category.name}
              </h2>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 line-clamp-2">
                Discover amazing {category.name.toLowerCase()} books that will expand your horizons
              </p>
              <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-yellow-500">Explore →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
