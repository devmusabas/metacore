'use client';

import type { InputHTMLAttributes } from 'react';
import { forwardRef, useCallback, useState } from 'react';
import EyeIcon from '@heroicons/react/16/solid/EyeIcon';
import EyeSlashIcon from '@heroicons/react/16/solid/EyeSlashIcon';

import { cn } from '@/utils/tailwind';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  showPasswordToggle?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, showPasswordToggle = false, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = useCallback(() => {
      setIsPasswordVisible((prev) => !prev);
    }, []);

    return (
      <div className="relative items-center justify-between">
        <input
          type={
            showPasswordToggle && type === 'password'
              ? isPasswordVisible
                ? 'text'
                : 'password'
              : type
          }
          className={cn(
            'flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            showPasswordToggle && 'pr-10',
            className
          )}
          ref={ref}
          {...props}
        />
        {showPasswordToggle && type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 transform"
            aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
          >
            {isPasswordVisible ? (
              <EyeIcon className="h-5 w-5" />
            ) : (
              <EyeSlashIcon className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
