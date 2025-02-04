'use client'

import AdminLayout from '../../Components/admin/AdminLayout';
import { useState } from 'react';
import { FaEdit, FaTrash, FaUserPlus } from 'react-icons/fa';

export default function UsersPage() {
  const [users] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'User', status: 'Inactive' },
  ]);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-yellow-500">Users</h1>
          <button className="flex items-center px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors">
            <FaUserPlus className="mr-2" />
            Add User
          </button>
        </div>

        <div className="bg-black/40 rounded-xl border border-yellow-900/20 overflow-hidden">
          <table className="w-full">
            <thead className="bg-yellow-900/20">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-yellow-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-yellow-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-yellow-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-yellow-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-yellow-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-yellow-900/10">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-yellow-900/5">
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active' ? 'bg-green-900/20 text-green-500' : 'bg-red-900/20 text-red-500'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-3">
                      <button className="text-yellow-500 hover:text-yellow-400">
                        <FaEdit />
                      </button>
                      <button className="text-red-500 hover:text-red-400">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
} 