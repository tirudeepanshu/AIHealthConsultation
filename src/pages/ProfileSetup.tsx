import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Heart, User, Weight, Ruler, Calendar, Phone } from 'lucide-react';
import { Button, Input, Card, Alert, ProgressBar } from '../components/ui';
import { ProfileSetupForm } from '../types';

const ProfileSetup: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger
  } = useForm<ProfileSetupForm>();

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await trigger(fieldsToValidate as any);
    
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const getFieldsForStep = (step: number) => {
    switch (step) {
      case 1:
        return ['dateOfBirth', 'gender', 'phoneNumber'];
      case 2:
        return ['weight', 'height', 'bloodType'];
      case 3:
        return ['smokingStatus', 'alcoholConsumption', 'exerciseFrequency', 'sleepHours', 'stressLevel'];
      default:
        return [];
    }
  };

  const onSubmit = async (data: ProfileSetupForm) => {
    setIsLoading(true);
    setError('');
    
    try {
      // TODO: Implement actual profile setup logic
      console.log('Profile setup data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Navigate to dashboard on success
      navigate('/');
      
    } catch (err) {
      setError('Failed to set up profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <User className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
              <p className="text-gray-600">Tell us a bit about yourself</p>
            </div>

            <Input
              label="Date of Birth"
              type="date"
              icon={<Calendar className="h-4 w-4" />}
              error={errors.dateOfBirth?.message}
              {...register('dateOfBirth', {
                required: 'Date of birth is required'
              })}
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
              <div className="grid grid-cols-3 gap-3">
                {['male', 'female', 'other'].map((gender) => (
                  <label key={gender} className="relative">
                    <input
                      type="radio"
                      value={gender}
                      className="sr-only"
                      {...register('gender', {
                        required: 'Please select your gender'
                      })}
                    />
                    <div className="border border-gray-300 rounded-lg p-3 text-center cursor-pointer hover:border-primary-500 peer-checked:border-primary-600 peer-checked:bg-primary-50">
                      <span className="text-sm font-medium text-gray-900 capitalize">
                        {gender}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
              {errors.gender && (
                <p className="mt-1 text-sm text-danger-600">{errors.gender.message}</p>
              )}
            </div>

            <Input
              label="Phone Number (Optional)"
              type="tel"
              placeholder="+1 (555) 123-4567"
              icon={<Phone className="h-4 w-4" />}
              error={errors.phoneNumber?.message}
              {...register('phoneNumber')}
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Weight className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Physical Information</h3>
              <p className="text-gray-600">Help us understand your physical profile</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Weight (kg)"
                type="number"
                step="0.1"
                placeholder="70"
                icon={<Weight className="h-4 w-4" />}
                error={errors.weight?.message}
                {...register('weight', {
                  required: 'Weight is required',
                  min: {
                    value: 20,
                    message: 'Please enter a valid weight'
                  },
                  max: {
                    value: 300,
                    message: 'Please enter a valid weight'
                  }
                })}
              />

              <Input
                label="Height (cm)"
                type="number"
                placeholder="175"
                icon={<Ruler className="h-4 w-4" />}
                error={errors.height?.message}
                {...register('height', {
                  required: 'Height is required',
                  min: {
                    value: 100,
                    message: 'Please enter a valid height'
                  },
                  max: {
                    value: 250,
                    message: 'Please enter a valid height'
                  }
                })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Blood Type (Optional)</label>
              <div className="grid grid-cols-4 gap-2">
                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((type) => (
                  <label key={type} className="relative">
                    <input
                      type="radio"
                      value={type}
                      className="sr-only"
                      {...register('bloodType')}
                    />
                    <div className="border border-gray-300 rounded-lg p-2 text-center cursor-pointer hover:border-primary-500 peer-checked:border-primary-600 peer-checked:bg-primary-50">
                      <span className="text-sm font-medium text-gray-900">
                        {type}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Allergies (Optional)
                </label>
                <textarea
                  placeholder="List any allergies you have (e.g., peanuts, shellfish, medications)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  rows={3}
                  {...register('allergies')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Medications (Optional)
                </label>
                <textarea
                  placeholder="List any medications you're currently taking"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  rows={3}
                  {...register('medications')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Medical History (Optional)
                </label>
                <textarea
                  placeholder="Describe any relevant medical history or conditions"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  rows={3}
                  {...register('medicalHistory')}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Lifestyle Information</h3>
              <p className="text-gray-600">Help us personalize your health recommendations</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Smoking Status</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'never', label: 'Never' },
                  { value: 'former', label: 'Former' },
                  { value: 'current', label: 'Current' }
                ].map((option) => (
                  <label key={option.value} className="relative">
                    <input
                      type="radio"
                      value={option.value}
                      className="sr-only"
                      {...register('smokingStatus', {
                        required: 'Please select your smoking status'
                      })}
                    />
                    <div className="border border-gray-300 rounded-lg p-3 text-center cursor-pointer hover:border-primary-500 peer-checked:border-primary-600 peer-checked:bg-primary-50">
                      <span className="text-sm font-medium text-gray-900">
                        {option.label}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
              {errors.smokingStatus && (
                <p className="mt-1 text-sm text-danger-600">{errors.smokingStatus.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Alcohol Consumption</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'none', label: 'None' },
                  { value: 'occasional', label: 'Occasional' },
                  { value: 'moderate', label: 'Moderate' },
                  { value: 'heavy', label: 'Heavy' }
                ].map((option) => (
                  <label key={option.value} className="relative">
                    <input
                      type="radio"
                      value={option.value}
                      className="sr-only"
                      {...register('alcoholConsumption', {
                        required: 'Please select your alcohol consumption'
                      })}
                    />
                    <div className="border border-gray-300 rounded-lg p-3 text-center cursor-pointer hover:border-primary-500 peer-checked:border-primary-600 peer-checked:bg-primary-50">
                      <span className="text-sm font-medium text-gray-900">
                        {option.label}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
              {errors.alcoholConsumption && (
                <p className="mt-1 text-sm text-danger-600">{errors.alcoholConsumption.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Exercise Frequency</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'none', label: 'None' },
                  { value: 'rarely', label: 'Rarely' },
                  { value: 'occasionally', label: 'Occasionally' },
                  { value: 'regularly', label: 'Regularly' },
                  { value: 'daily', label: 'Daily' }
                ].map((option) => (
                  <label key={option.value} className="relative">
                    <input
                      type="radio"
                      value={option.value}
                      className="sr-only"
                      {...register('exerciseFrequency', {
                        required: 'Please select your exercise frequency'
                      })}
                    />
                    <div className="border border-gray-300 rounded-lg p-3 text-center cursor-pointer hover:border-primary-500 peer-checked:border-primary-600 peer-checked:bg-primary-50">
                      <span className="text-sm font-medium text-gray-900">
                        {option.label}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
              {errors.exerciseFrequency && (
                <p className="mt-1 text-sm text-danger-600">{errors.exerciseFrequency.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Sleep Hours (per night)"
                type="number"
                min="3"
                max="12"
                step="0.5"
                placeholder="8"
                error={errors.sleepHours?.message}
                {...register('sleepHours', {
                  required: 'Sleep hours is required',
                  min: {
                    value: 3,
                    message: 'Please enter a valid sleep duration'
                  },
                  max: {
                    value: 12,
                    message: 'Please enter a valid sleep duration'
                  }
                })}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Stress Level (1-5)</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <label key={level} className="relative">
                      <input
                        type="radio"
                        value={level}
                        className="sr-only"
                        {...register('stressLevel', {
                          required: 'Please select your stress level'
                        })}
                      />
                      <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-primary-500 peer-checked:border-primary-600 peer-checked:bg-primary-50">
                        <span className="text-sm font-medium text-gray-900">
                          {level}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.stressLevel && (
                  <p className="mt-1 text-sm text-danger-600">{errors.stressLevel.message}</p>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center">
            <Heart className="h-12 w-12 text-primary-600" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Complete Your Health Profile
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Help us personalize your health experience
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <ProgressBar
            value={progress}
            label={`Step ${currentStep} of ${totalSteps}`}
            showPercentage={false}
            color="primary"
          />
        </div>

        {/* Form */}
        <Card>
          <form onSubmit={handleSubmit(onSubmit)}>
            {error && (
              <Alert type="error" className="mb-6">
                {error}
              </Alert>
            )}

            {renderStep()}

            {/* Navigation buttons */}
            <div className="flex justify-between mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  type="button"
                  variant="primary"
                  onClick={nextStep}
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="primary"
                  loading={isLoading}
                >
                  Complete Setup
                </Button>
              )}
            </div>
          </form>
        </Card>

        {/* Skip option */}
        <div className="text-center">
          <button
            onClick={() => navigate('/')}
            className="text-sm text-gray-500 hover:text-primary-600"
          >
            Skip for now and set up later
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;