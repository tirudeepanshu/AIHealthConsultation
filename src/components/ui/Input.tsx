import React, { InputHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className = '', 
    label,
    error,
    helperText,
    icon,
    rightIcon,
    ...props 
  }, ref) => {
    const baseClasses = 'w-full px-3 py-2 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0';
    const normalClasses = 'border-gray-300 focus:ring-primary-500 focus:border-primary-500';
    const errorClasses = 'border-danger-300 focus:ring-danger-500 focus:border-danger-500';
    const iconClasses = icon ? 'pl-10' : '';
    const rightIconClasses = rightIcon ? 'pr-10' : '';
    
    const inputClasses = `${baseClasses} ${error ? errorClasses : normalClasses} ${iconClasses} ${rightIconClasses} ${className}`;
    
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400">
                {icon}
              </span>
            </div>
          )}
          <input
            ref={ref}
            className={inputClasses}
            {...props}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <span className="text-gray-400">
                {rightIcon}
              </span>
            </div>
          )}
        </div>
        {error && (
          <p className="mt-1 text-sm text-danger-600">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;