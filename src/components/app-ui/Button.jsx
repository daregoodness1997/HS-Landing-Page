import React from 'react';
import { CustomButton } from './style';

const Button = ({ loading, disabled, children, ...props }) => {
  return (
    <CustomButton loading={loading} disabled={disabled} {...props}>
      {children}
    </CustomButton>
  );
};

export default Button;
