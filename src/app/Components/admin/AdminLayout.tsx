'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from './Sidebar';
import { FaUser } from 'react-icons/fa';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const router = useRouter();
  const [isSidebarOpen] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/signin');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-yellow-950/20 to-black">
      {/* Sidebar - Always visible */}
      <Sidebar isOpen={true} />
      
      {/* Main Content */}
      <div className="ml-64 transition-all duration-300">
        {/* Top Bar */}
        <div className="sticky top-0 z-30 bg-black/50 backdrop-blur-sm border-b border-yellow-900/20 px-4 py-3">
          <div className="flex items-center justify-end">
            {/* Profile Section */}
            <div className="flex items-center space-x-4">
              <span className="text-yellow-500">Admin User</span>
              <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <FaUser className="text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Page Content */}
        <div className="p-4 md:p-6 lg:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout; 