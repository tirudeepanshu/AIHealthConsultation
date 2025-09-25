import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  MessageSquare, 
  Activity, 
  User, 
  Info,
  Heart,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  
  const navigationItems = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'AI Consultation', href: '/consultation', icon: MessageSquare },
    { name: 'Health Tracker', href: '/tracker', icon: Activity },
    { name: 'Know Your Health', href: '/assessment', icon: Heart },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'About', href: '/about', icon: Info },
  ];

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Logo and close button */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">HealthAI</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          <div className="px-3">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = isActiveRoute(item.href);
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className={`
                    flex items-center px-3 py-2 mb-1 text-sm font-medium rounded-lg transition-colors duration-200
                    ${isActive 
                      ? 'bg-primary-100 text-primary-700 border-r-2 border-primary-600' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Emergency notice */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-danger-50 border border-danger-200 rounded-lg p-3">
            <div className="flex items-start">
              <div className="text-danger-600 mr-2">⚠️</div>
              <div>
                <p className="text-xs font-medium text-danger-800">Medical Emergency?</p>
                <p className="text-xs text-danger-700 mt-1">Call emergency services immediately</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;