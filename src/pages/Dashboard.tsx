import React from 'react';
import { Card, Button, Alert } from '../components/ui';
import { 
  Heart, 
  MessageSquare, 
  Activity, 
  TrendingUp,
  Clock
} from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock data - this will come from API calls later
  const healthMetrics = {
    lastCheckup: '2 weeks ago',
    nextAppointment: 'No upcoming appointments',
    riskScore: 78,
    recentVitals: {
      bloodPressure: '120/80',
      heartRate: 72,
      weight: 68.5
    }
  };

  const quickActions = [
    {
      title: 'AI Health Chat',
      description: 'Ask about symptoms or health concerns',
      icon: MessageSquare,
      href: '/consultation',
      color: 'bg-blue-500'
    },
    {
      title: 'Log Vitals',
      description: 'Record your daily health measurements',
      icon: Activity,
      href: '/tracker',
      color: 'bg-green-500'
    },
    {
      title: 'Health Assessment',
      description: 'Check your health risk factors',
      icon: Heart,
      href: '/assessment',
      color: 'bg-red-500'
    }
  ];

  const healthTips = [
    'Drink at least 8 glasses of water daily',
    'Take a 10-minute walk after meals',
    'Get 7-8 hours of sleep each night',
    'Practice deep breathing for stress relief'
  ];

  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl text-white p-6">
        <h1 className="text-2xl font-bold mb-2">Good morning, Shyam! 👋</h1>
        <p className="text-primary-100">
          How are you feeling today? I'm here to help you stay healthy.
        </p>
      </div>

      {/* Emergency alert */}
      <Alert type="warning" title="Important Reminder">
        For medical emergencies, please call your local emergency services immediately. 
        This platform is for general health guidance only.
      </Alert>

      {/* Health overview cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="text-center">
          <Heart className="h-8 w-8 text-red-500 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-900">Health Score</h3>
          <p className="text-3xl font-bold text-primary-600 mt-2">{healthMetrics.riskScore}/100</p>
          <p className="text-sm text-gray-500 mt-1">Overall wellness</p>
        </Card>

        <Card className="text-center">
          <Activity className="h-8 w-8 text-green-500 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-900">Blood Pressure</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">{healthMetrics.recentVitals.bloodPressure}</p>
          <p className="text-sm text-green-600 mt-1">Normal range</p>
        </Card>

        <Card className="text-center">
          <TrendingUp className="h-8 w-8 text-blue-500 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-900">Heart Rate</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">{healthMetrics.recentVitals.heartRate} bpm</p>
          <p className="text-sm text-blue-600 mt-1">Good</p>
        </Card>

        <Card className="text-center">
          <Clock className="h-8 w-8 text-purple-500 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-900">Last Checkup</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">{healthMetrics.lastCheckup}</p>
          <p className="text-sm text-gray-500 mt-1">Regular monitoring</p>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Card key={index} hover className="text-center cursor-pointer">
              <div className={`${action.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
              <p className="text-gray-600 mb-4">{action.description}</p>
              <Button variant="outline" size="sm">
                Get Started
              </Button>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity and Health Tips */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <Activity className="h-5 w-5 text-green-500 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Weight logged</p>
                  <p className="text-sm text-gray-500">68.5 kg • Today 8:30 AM</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 text-blue-500 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">AI Consultation</p>
                  <p className="text-sm text-gray-500">Asked about headache • Yesterday 2:15 PM</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-red-500 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Health Assessment</p>
                  <p className="text-sm text-gray-500">Completed • 3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Health Tips */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Health Tips</h3>
          <div className="space-y-3">
            {healthTips.map((tip, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-primary-600 text-sm font-medium">{index + 1}</span>
                </div>
                <p className="text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
          <Button variant="outline" className="mt-4 w-full">
            View More Tips
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;