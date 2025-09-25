import React from 'react';
import { Card } from '../components/ui';
import { User, Settings, Edit } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <User className="h-16 w-16 text-gray-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">User Profile</h1>
        <p className="text-gray-600">
          Manage your personal information and health profile
        </p>
      </div>

      <Card>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
          <Edit className="h-5 w-5 text-gray-400" />
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <p className="text-gray-900 mt-1">Rahul Sir</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="text-gray-900 mt-1">rahul.sir@example.com</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <p className="text-gray-900 mt-1">+91 98765 43210</p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="text-center py-12">
          <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Profile Management Coming Soon</h3>
          <p className="text-gray-500">
            Complete profile management with health information will be available soon.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Profile;