'use client'

import AdminLayout from '../../Components/admin/AdminLayout';
import { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

export default function NewReleasesPage() {
  const [newReleases] = useState([
    {
      id: 1,
      title: 'The Midnight Library',
      author: 'Matt Haig',
      releaseDate: '2024-01-15',
      genre: 'Fiction',
      price: '$24.99',
      coverImage: '/placeholder-book.jpg'
    },
    {
      id: 2,
      title: 'The Silent Patient',
      author: 'Alex Michaelides',
      releaseDate: '2024-01-20',
      genre: 'Thriller',
      price: '$19.99',
      coverImage: '/placeholder-book.jpg'
    },
  ]);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-yellow-500">New Releases</h1>
          <button className="flex items-center px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors">
            <FaPlus className="mr-2" />
            Add New Book
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newReleases.map((book) => (
            <div key={book.id} className="bg-black/40 rounded-xl border border-yellow-900/20 overflow-hidden hover:border-yellow-500/30 transition-all duration-300">
              <img 
                src={book.coverImage} 
                alt={book.title}
                className="w-full h-48 object-cover"
              />
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
                  <p className="text-sm text-gray-400">Release Date: {book.releaseDate}</p>
                  <p className="text-sm text-gray-400">Genre: {book.genre}</p>
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