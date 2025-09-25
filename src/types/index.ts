// User related types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  gender?: 'male' | 'female' | 'other';
  phoneNumber?: string;
  profilePicture?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile {
  userId: string;
  age: number;
  weight: number; // in kg
  height: number; // in cm
  bloodType?: string;
  allergies: string[];
  medications: Medication[];
  medicalHistory: MedicalHistory[];
  emergencyContact?: EmergencyContact;
  lifestyle: LifestyleInfo;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phoneNumber: string;
}

export interface LifestyleInfo {
  smokingStatus: 'never' | 'former' | 'current';
  alcoholConsumption: 'none' | 'occasional' | 'moderate' | 'heavy';
  exerciseFrequency: 'none' | 'rarely' | 'occasionally' | 'regularly' | 'daily';
  sleepHours: number;
  stressLevel: 1 | 2 | 3 | 4 | 5;
  dietType?: 'omnivore' | 'vegetarian' | 'vegan' | 'keto' | 'other';
}

// Medical related types
export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate?: string;
  prescribedBy?: string;
  notes?: string;
}

export interface MedicalHistory {
  id: string;
  condition: string;
  diagnosisDate: string;
  status: 'active' | 'resolved' | 'chronic';
  severity?: 'mild' | 'moderate' | 'severe';
  notes?: string;
}

// Health tracking types
export interface VitalReading {
  id: string;
  userId: string;
  type: 'blood_pressure' | 'heart_rate' | 'blood_glucose' | 'weight' | 'temperature';
  value: number | BloodPressureReading;
  unit: string;
  recordedAt: string;
  notes?: string;
}

export interface BloodPressureReading {
  systolic: number;
  diastolic: number;
}

// AI Consultation types
export interface ChatMessage {
  id: string;
  userId: string;
  message: string;
  sender: 'user' | 'ai';
  timestamp: string;
  messageType?: 'text' | 'symptom_report' | 'emergency_alert';
  metadata?: {
    symptoms?: string[];
    severity?: number;
    confidence?: number;
    recommendations?: string[];
  };
}

export interface SymptomReport {
  id: string;
  userId: string;
  symptoms: Symptom[];
  duration: string;
  severity: 1 | 2 | 3 | 4 | 5;
  triggers?: string[];
  aiAnalysis?: AIAnalysis;
  createdAt: string;
}

export interface Symptom {
  name: string;
  severity: 1 | 2 | 3 | 4 | 5;
  duration: string;
  location?: string;
  description?: string;
}

export interface AIAnalysis {
  possibleConditions: PossibleCondition[];
  recommendations: string[];
  urgencyLevel: 'low' | 'medium' | 'high' | 'emergency';
  confidence: number;
  needsImmediateAttention: boolean;
}

export interface PossibleCondition {
  name: string;
  probability: number;
  description: string;
  commonTreatments?: string[];
}

// Risk Assessment types
export interface RiskAssessment {
  userId: string;
  assessmentDate: string;
  risks: HealthRisk[];
  overallScore: number;
  recommendations: string[];
}

export interface HealthRisk {
  condition: 'diabetes' | 'hypertension' | 'heart_disease' | 'stroke' | 'obesity';
  riskLevel: 'low' | 'moderate' | 'high';
  percentage: number;
  factors: RiskFactor[];
  preventiveMeasures: string[];
}

export interface RiskFactor {
  factor: string;
  impact: 'positive' | 'negative';
  weight: number;
}

// Notification types
export interface Notification {
  id: string;
  userId: string;
  type: 'medication' | 'appointment' | 'health_check' | 'emergency' | 'system';
  title: string;
  message: string;
  isRead: boolean;
  priority: 'low' | 'medium' | 'high';
  scheduledFor?: string;
  createdAt: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Form types
export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

export interface ProfileSetupForm {
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  weight: number;
  height: number;
  phoneNumber?: string;
  bloodType?: string;
  allergies: string;
  medications: string;
  medicalHistory: string;
  smokingStatus: 'never' | 'former' | 'current';
  alcoholConsumption: 'none' | 'occasional' | 'moderate' | 'heavy';
  exerciseFrequency: 'none' | 'rarely' | 'occasionally' | 'regularly' | 'daily';
  sleepHours: number;
  stressLevel: 1 | 2 | 3 | 4 | 5;
}