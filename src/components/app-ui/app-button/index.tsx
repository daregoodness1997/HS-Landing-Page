import React from 'react';

interface Props {
  label?: string;
  onClick?: (e?: any) => void;
  type?: 'button' | 'submit' | 'reset';
}

const AppButton: React.FC<Props> = ({ label, onClick, type }) => {
  return (
    <button
      className='text-base rounded-md text-white bg-blue-600  hover:bg-blue-700  px-4 py-2  '
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default AppButton;
