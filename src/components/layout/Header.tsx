import React from 'react';
import { Bell, Menu, Search, User } from 'lucide-react';
import { Button } from '../ui';

interface HeaderProps {
  onMenuClick: () => void;
  user?: {
    name: string;
    avatar?: string;
  };
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, user }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-4 lg:px-6">
      {/* Left side - Menu button and title */}
      <div className="flex items-center">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
        
        <div className="ml-4 lg:ml-0">
          <h1 className="text-xl font-semibold text-gray-900">
            Welcome to HealthAI
          </h1>
          <p className="text-sm text-gray-500 hidden sm:block">
            Your AI-powered health companion
          </p>
        </div>
      </div>

      {/* Right side - Search, notifications, user menu */}
      <div className="flex items-center space-x-4">
        {/* Search bar - hidden on mobile */}
        <div className="hidden md:flex relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search health topics..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 w-64"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
          <Bell className="h-6 w-6" />
          {/* Notification badge */}
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            3
          </span>
        </button>

        {/* User menu */}
        <div className="flex items-center">
          {user ? (
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">Patient</p>
              </div>
              <button className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-100 text-primary-600">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-8 w-8 rounded-full"
                  />
                ) : (
                  <User className="h-4 w-4" />
                )}
              </button>
            </div>
          ) : (
            <Button variant="primary" size="sm">
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;