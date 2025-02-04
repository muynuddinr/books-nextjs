'use client'

import AdminLayout from '../../Components/admin/AdminLayout';
import { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

export default function CategoriesPage() {
  const [categories] = useState([
    { id: 1, name: 'Fiction', books: 45, description: 'Fictional stories and novels' },
    { id: 2, name: 'Non-Fiction', books: 38, description: 'Educational and informative books' },
    { id: 3, name: 'Science Fiction', books: 24, description: 'Future and science-based fiction' },
    { id: 4, name: 'Mystery', books: 32, description: 'Mystery and detective stories' },
  ]);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-yellow-500">Categories</h1>
          <button className="flex items-center px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors">
            <FaPlus className="mr-2" />
            Add Category
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-black/40 rounded-xl border border-yellow-900/20 p-6 hover:border-yellow-500/30 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-yellow-500">{category.name}</h3>
                <div className="flex space-x-2">
                  <button className="text-yellow-500 hover:text-yellow-400">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-400">
                    <FaTrash />
                  </button>
                </div>
              </div>
              <p className="text-gray-400 mb-4">{category.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="bg-yellow-500/10 px-2 py-1 rounded-full text-yellow-500">
                  {category.books} Books
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
} 