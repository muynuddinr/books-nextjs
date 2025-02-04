'use client'

import AdminLayout from '../../Components/admin/AdminLayout';
import { useState } from 'react';
import { FaEdit, FaTrash, FaStar, FaChartLine } from 'react-icons/fa';

export default function BestSellersPage() {
  const [bestSellers] = useState([
    {
      id: 1,
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      sales: 15000,
      rating: 4.8,
      price: '$19.99',
      coverImage: '/placeholder-book.jpg'
    },
    {
      id: 2,
      title: 'Atomic Habits',
      author: 'James Clear',
      sales: 12000,
      rating: 4.9,
      price: '$21.99',
      coverImage: '/placeholder-book.jpg'
    },
  ]);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-yellow-500">Best Sellers</h1>
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 bg-yellow-900/20 text-yellow-500 rounded-lg hover:bg-yellow-900/30 transition-colors">
              <FaChartLine className="mr-2" />
              View Analytics
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestSellers.map((book) => (
            <div key={book.id} className="bg-black/40 rounded-xl border border-yellow-900/20 overflow-hidden hover:border-yellow-500/30 transition-all duration-300">
              <div className="relative">
                <img 
                  src={book.coverImage} 
                  alt={book.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded-full text-sm font-semibold">
                  #{book.id}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-500">{book.title}</h3>
                    <p className="text-gray-400">{book.author}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-yellow-500 hover:text-yellow-400">
                      <FaEdit />
                    </button>
                    <button className="text-red-500 hover:text-red-400">
                      <FaTrash />
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-yellow-500">
                    <FaStar className="mr-1" />
                    <span>{book.rating}</span>
                  </div>
                  <p className="text-sm text-gray-400">Total Sales: {book.sales.toLocaleString()}</p>
                  <p className="text-lg font-semibold text-yellow-500">{book.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
} 