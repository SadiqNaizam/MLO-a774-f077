import React from 'react';
import MainAppLayout from '../../components/layout/MainAppLayout';
import LoginCard from '../../components/Login/LoginCard';

/**
 * LoginPage component.
 * This is the main page for the login screen, utilizing a centered layout
 * to display the LoginCard component.
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default LoginPage;
