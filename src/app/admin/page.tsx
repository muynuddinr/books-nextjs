'use client'

import AdminLayout from '../Components/admin/AdminLayout';
import { FaUsers, FaBook, FaShoppingCart, FaDollarSign } from 'react-icons/fa';

export default function AdminDashboard() {
  const stats = [
    { title: 'Total Users', value: '1,234', icon: FaUsers, change: '+12%' },
    { title: 'Total Books', value: '5,678', icon: FaBook, change: '+7%' },
    { title: 'New Orders', value: '89', icon: FaShoppingCart, change: '+24%' },
    { title: 'Revenue', value: '$12,345', icon: FaDollarSign, change: '+18%' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-500">Dashboard</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className="p-4 md:p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-yellow-900/20 
                  hover:border-yellow-500/30 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm md:text-base text-gray-400 font-medium">{stat.title}</p>
                    <p className="text-2xl md:text-3xl font-bold text-yellow-500 mt-2">{stat.value}</p>
                  </div>
                  <div className="bg-yellow-500/10 p-3 rounded-lg">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
                  </div>
                </div>
                <div className="mt-4 text-xs md:text-sm font-medium text-green-500">
                  {stat.change} from last month
                </div>
              </div>
            );
          })}
        </div>

        {/* Add more responsive sections as needed */}
      </div>
    </AdminLayout>
  );
} 