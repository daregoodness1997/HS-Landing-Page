import React from 'react';

interface Props {
  label?: string;
  onClick?: (e?: any) => void;
}

const AppButton: React.FC<Props> = ({ label, onClick }) => {
  return (
    <button
      className='text-base rounded-md text-white bg-blue-600  hover:bg-blue-700  px-4 '
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default AppButton;
