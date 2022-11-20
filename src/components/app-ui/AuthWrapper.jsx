import React, { useEffect } from 'react';
import Side from './Side';
import { AuthContainer, PageWrapper } from './style';

const AuthWrapper = ({ paragraph, children }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = 'Health Stack - EMR';
  });
  return (
    <PageWrapper>
      <Side />
      <AuthContainer className='auth-container'>
        <div className='aside-container'>
          <img src='/public/Healthstack.png' alt='' />
          <h2>Welcome to Healthstack</h2>
          <p>{paragraph}</p>
          <div className='aside-child'>{children}</div>
        </div>
      </AuthContainer>
    </PageWrapper>
  );
};

export default AuthWrapper;
