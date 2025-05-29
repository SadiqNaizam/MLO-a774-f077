import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  containerClassName?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  autoComplete,
  className,
  containerClassName,
  ...props
}) => {
  return (
    <div className={cn('grid w-full items-center gap-1.5', containerClassName)}>
      <Label htmlFor={id} className="text-sm text-muted-foreground">
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder} // Though not visible in image, good for accessibility / if label was different
        autoComplete={autoComplete}
        className={cn(
          'border-0 border-b border-input rounded-none px-1 py-2 h-10',
          'bg-transparent text-card-foreground placeholder:text-muted-foreground',
          'focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary focus-visible:outline-none shadow-none',
          className
        )}
        {...props}
      />
    </div>
  );
};

export default InputField;
