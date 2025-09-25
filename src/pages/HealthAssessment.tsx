import React from 'react';
import { Card } from '../components/ui';
import { Heart, Target, Shield } from 'lucide-react';

const HealthAssessment: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Heart className="h-16 w-16 text-red-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Know Your Health</h1>
        <p className="text-gray-600">
          Assess your health risks and get personalized recommendations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <Target className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Risk Assessment</h3>
          <p className="text-gray-500">Evaluate your risk for common health conditions</p>
        </Card>

        <Card className="text-center">
          <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Prevention Tips</h3>
          <p className="text-gray-500">Get personalized prevention strategies</p>
        </Card>

        <Card className="text-center">
          <Heart className="h-12 w-12 text-pink-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Health Score</h3>
          <p className="text-gray-500">Track your overall health score</p>
        </Card>
      </div>

      <Card>
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Risk Assessment Tool Coming Soon</h3>
          <p className="text-gray-500">
            We're building intelligent risk assessment algorithms based on medical research.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default HealthAssessment;