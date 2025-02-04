'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { 
  FaChartPie, 
  FaUsers, 
  FaBookOpen, 
  FaRocket, 
  FaStar, 
  FaSignOutAlt
} from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const pathname = usePathname();
  const { signOut } = useAdminAuth();

  const handleLogout = () => {
    // Remove tokens
    localStorage.removeItem('adminToken');
    document.cookie = 'adminToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    // Redirect to home page
    window.location.href = '/';
  };

  const menuItems = [
    { title: 'Dashboard', icon: FaChartPie, path: '/admin' },
    { title: 'Users', icon: FaUsers, path: '/admin/users' },
    { title: 'Categories', icon: FaBookOpen, path: '/admin/categories' },
    { title: 'New Releases', icon: FaRocket, path: '/admin/new-releases' },
    { title: 'Best Sellers', icon: FaStar, path: '/admin/best-sellers' },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-black/95 backdrop-blur-xl border-r border-yellow-900/20">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-6 border-b border-yellow-900/20">
          <Link href="/admin" className="text-2xl font-bold text-yellow-500">
            Admin Panel
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-900/20">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            
            return (
              <Link
                key={item.title}
                href={item.path}
                className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 group
                  ${isActive 
                    ? 'bg-yellow-500 text-black' 
                    : 'text-gray-300 hover:bg-yellow-900/50 hover:text-yellow-500'
                  }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? '' : 'group-hover:scale-110 transition-transform'}`} />
                <span className="ml-3 font-medium">{item.title}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-yellow-900/20">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-gray-300 hover:text-yellow-500 rounded-lg hover:bg-yellow-900/50 transition-all duration-300 group"
          >
            <FaSignOutAlt className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="ml-3 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 