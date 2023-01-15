import React from 'react';
import { CustomButton } from './style';

interface CustomButtonProps {
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (e?: any) => void;
}

const Button: React.FC<CustomButtonProps> = ({
  loading,
  disabled,
  children,
  onClick,
  ...props
}) => {
  return (
    <CustomButton
      onClick={onClick}
      loading={loading}
      disabled={disabled}
      {...props}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
