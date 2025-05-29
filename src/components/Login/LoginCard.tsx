import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import InputField from './InputField';
import LoginButton from './LoginButton';
import ForgotPasswordLink from './ForgotPasswordLink';
import SignUpLink from './SignUpLink';

interface LoginCardProps {
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError(null); // Clear error on input change
  }, [error]);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (error) setError(null); // Clear error on input change
  }, [error]);

  const handleLogin = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (email === 'test@example.com' && password === 'password') {
      console.log('Login successful:', { email });
      // Perform actual login action, e.g., redirect or set auth context
    } else {
      setError('Invalid email or password. Please try again.');
      console.error('Login failed');
    }
    setIsLoading(false);
  }, [email, password]);

  return (
    <Card
      className={cn(
        'w-96 bg-card text-card-foreground shadow-md',
        'rounded-lg', // Uses 'lg' from Tailwind config which maps to var(--radius) (0.375rem / PRD's rounded-md)
        className
      )}
    >
      <CardHeader className="p-6 pb-0">
        <CardTitle className="text-2xl font-bold text-center text-card-foreground">
          Welcome
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <InputField
            id="email"
            label="Email Address"
            type="email"
            value={email}
            onChange={handleEmailChange}
            autoComplete="email"
            required
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="current-password"
            required
          />
          <ForgotPasswordLink href="#" className="-mt-3" /> {/* Adjust margin to be closer to password field if needed */} 
          
          {error && (
            <p className="text-sm text-red-500 text-center -mt-3">{error}</p>
          )}

          <LoginButton isLoading={isLoading}>
            Login
          </LoginButton>
          
          <SignUpLink href="#" />
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
