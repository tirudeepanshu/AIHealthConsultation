import React from 'react';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

export interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({ 
  type = 'info', 
  title, 
  children, 
  onClose,
  className = ''
}) => {
  const config = {
    info: {
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-800',
      titleColor: 'text-blue-900',
      icon: Info
    },
    success: {
      bgColor: 'bg-success-50',
      borderColor: 'border-success-200',
      textColor: 'text-success-800',
      titleColor: 'text-success-900',
      icon: CheckCircle
    },
    warning: {
      bgColor: 'bg-warning-50',
      borderColor: 'border-warning-200',
      textColor: 'text-warning-800',
      titleColor: 'text-warning-900',
      icon: AlertCircle
    },
    error: {
      bgColor: 'bg-danger-50',
      borderColor: 'border-danger-200',
      textColor: 'text-danger-800',
      titleColor: 'text-danger-900',
      icon: XCircle
    }
  };
  
  const { bgColor, borderColor, textColor, titleColor, icon: Icon } = config[type];
  
  return (
    <div className={`${bgColor} ${borderColor} border rounded-lg p-4 ${className}`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon className={`h-5 w-5 ${textColor}`} />
        </div>
        <div className="ml-3 flex-1">
          {title && (
            <h3 className={`text-sm font-medium ${titleColor} mb-1`}>
              {title}
            </h3>
          )}
          <div className={`text-sm ${textColor}`}>
            {children}
          </div>
        </div>
        {onClose && (
          <div className="ml-auto pl-3">
            <button
              onClick={onClose}
              className={`${textColor} hover:opacity-70 transition-opacity`}
            >
              <XCircle className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert;