import React from 'react';
import { Card } from '../components/ui';
import { Info, Heart, Shield, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <Heart className="h-16 w-16 text-primary-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">About HealthAI</h1>
        <p className="text-gray-600">
          Your trusted AI-powered health consultation companion
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <Info className="h-8 w-8 text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To make healthcare more accessible through AI-powered health consultations, 
            symptom checking, and personalized health guidance while maintaining the 
            highest standards of medical accuracy and user privacy.
          </p>
        </Card>

        <Card>
          <Shield className="h-8 w-8 text-green-500 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy & Security</h3>
          <p className="text-gray-600">
            Your health data is protected with enterprise-grade encryption and security measures. 
            We comply with HIPAA regulations and never share your personal health information 
            without your explicit consent.
          </p>
        </Card>

        <Card>
          <Users className="h-8 w-8 text-purple-500 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
          <p className="text-gray-600">
            Our AI models are trained on vast medical databases and supervised by 
            licensed healthcare professionals to ensure accurate and reliable health guidance.
          </p>
        </Card>

        <Card>
          <Heart className="h-8 w-8 text-red-500 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Health Journey</h3>
          <p className="text-gray-600">
            We're here to support you at every step of your health journey with 
            personalized insights, risk assessments, and preventive care recommendations.
          </p>
        </Card>
      </div>

      <Card>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Medical Disclaimer</h3>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800 text-sm">
            <strong>This platform provides AI-generated health guidance for informational purposes only.</strong>
            {' '}It is not intended to replace professional medical advice, diagnosis, or treatment. 
            Always seek the advice of qualified healthcare providers with any questions you may have 
            regarding a medical condition. Never disregard professional medical advice or delay seeking 
            it because of something you have read on this platform.
          </p>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          <p className="mb-2"><strong>In case of medical emergencies:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Call your local emergency services immediately (911 in the US, 999 in the UK, etc.)</li>
            <li>Contact your healthcare provider</li>
            <li>Visit the nearest emergency room</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default About;