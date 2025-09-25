import React from 'react';
import { Card } from '../components/ui';
import { MessageSquare, Bot } from 'lucide-react';

const Consultation: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <MessageSquare className="h-16 w-16 text-primary-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Health Consultation</h1>
        <p className="text-gray-600">
          Chat with our AI assistant about your health concerns and symptoms
        </p>
      </div>

      <Card className="min-h-96">
        <div className="text-center py-12">
          <Bot className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Chat Interface Coming Soon</h3>
          <p className="text-gray-500">
            We're building an intelligent chat interface for health consultations.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Consultation;