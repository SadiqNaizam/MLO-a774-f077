import React from 'react';
import { cn } from '@/lib/utils';

interface SignUpLinkProps {
  href?: string;
  className?: string;
}

const SignUpLink: React.FC<SignUpLinkProps> = ({ href = '#', className }) => {
  return (
    <p className={cn('text-sm text-center text-card-foreground', className)}>
      Don&apos;t have an account?{' '}
      <a
        href={href}
        className="font-medium text-link hover:brightness-125"
        // Default 'a' styling from index.css provides underline and link color
      >
        SignUp
      </a>
    </p>
  );
};

export default SignUpLink;
