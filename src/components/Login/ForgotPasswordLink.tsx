import React from 'react';
import { cn } from '@/lib/utils';

interface ForgotPasswordLinkProps {
  href?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const ForgotPasswordLink: React.FC<ForgotPasswordLinkProps> = ({
  href = '#',
  className,
  onClick,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'text-xs text-muted-foreground no-underline hover:underline hover:text-primary text-left w-full block',
        className
      )}
    >
      Forgot Password
    </a>
  );
};

export default ForgotPasswordLink;
