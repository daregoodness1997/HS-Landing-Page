import React from 'react';
import Spinner from './Spinner';

const BaseButton = ({
  label,
  showicon,
  icon,
  children,
  loading,
  disabled,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      style={{ fontSize: '1rem !important' }}
    >
      {showicon ? <i className={icon} /> : null}
      {loading ? (
        <Spinner />
      ) : (
        <>
          {label}
          {children}
        </>
      )}
    </button>
  );
};

export default BaseButton;
