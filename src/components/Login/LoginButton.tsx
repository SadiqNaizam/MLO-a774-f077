import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface LoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  onClick,
  isLoading = false,
  className,
  children,
  ...props
}) => {
  return (
    <Button
      type="submit" // Assuming it's used in a form
      onClick={onClick}
      disabled={isLoading}
      className={cn('w-full', className)}
      variant="default" // Uses 'primary' color from tailwind config (accentBlue)
      {...props}
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : null}
      {children || 'Login'}
    </Button>
  );
};

export default LoginButton;
