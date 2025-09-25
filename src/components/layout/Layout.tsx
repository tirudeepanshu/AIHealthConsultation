import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock user data - this will come from auth context later
  const user = {
    name: 'Rahul Sir',
    // avatar: '/api/avatars/rahul-sir.jpg'
  };

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Header */}
        <Header onMenuClick={handleMenuClick} user={user} />
        
        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6 py-6">
            <Outlet />
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 px-4 lg:px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-sm text-gray-500">
              <p>&copy; 2024 HealthAI. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 mt-2 sm:mt-0">
              <a href="/privacy" className="text-sm text-gray-500 hover:text-primary-600">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-500 hover:text-primary-600">
                Terms of Service
              </a>
              <a href="/support" className="text-sm text-gray-500 hover:text-primary-600">
                Support
              </a>
            </div>
          </div>
          
          {/* Medical disclaimer */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-400 text-center">
              <strong>Medical Disclaimer:</strong> This is AI-generated advice and not a substitute for professional medical consultation. 
              Always consult with qualified healthcare providers for medical decisions.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;