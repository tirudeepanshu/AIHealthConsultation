import React from 'react';
import { Card } from '../components/ui';
import { Activity, TrendingUp, Calendar } from 'lucide-react';

const HealthTracker: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Activity className="h-16 w-16 text-green-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Health Tracker</h1>
        <p className="text-gray-600">
          Monitor and track your vital signs and health metrics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <TrendingUp className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Vitals Logging</h3>
          <p className="text-gray-500">Record blood pressure, heart rate, weight, and more</p>
        </Card>

        <Card className="text-center">
          <Calendar className="h-12 w-12 text-purple-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Trend Analysis</h3>
          <p className="text-gray-500">View your health trends over time</p>
        </Card>

        <Card className="text-center">
          <Activity className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Health Insights</h3>
          <p className="text-gray-500">Get personalized health recommendations</p>
        </Card>
      </div>

      <Card>
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Health Tracking Interface Coming Soon</h3>
          <p className="text-gray-500">
            We're developing comprehensive health tracking tools with data visualization.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default HealthTracker;