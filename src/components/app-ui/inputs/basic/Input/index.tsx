import { FormHelperText } from '@mui/material';
import React from 'react';

import { InputBox, InputField, InputLabel } from './styles';

interface InputProps {
  label?: string;
  inputId?: string;
  errors?: boolean;
  errorText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (_) => void;
  helperText?: string;
  name?: string;
  type?: string;
  defaultValue?: string;
  value?: any;
  placeholder?: string;
  size?: 'small' | 'medium';
  disabled?: boolean;
  inputRef?: any;
  register?: any;
  onBlur?: () => void;
  autoComplete?: boolean;
  sx?: {};
}

// Reset Input MUI

// https://stackoverflow.com/questions/57419955/how-to-set-or-clear-value-of-material-ui-input-in-reactjs

const Input: React.FC<InputProps> = ({
  label,
  errorText,
  type = 'text',
  name,
  defaultValue = '',
  onChange,
  onKeyDown,
  placeholder,
  // size = 'medium',
  disabled = false,
  register,
  value,
  autoComplete = true,
  onBlur,
  sx,
}) => (
  <div>
    <InputBox>
      <InputField
        onChange={onChange}
        type={type}
        defaultValue={defaultValue}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        {...register}
        onBlur={onBlur}
        autoComplete={autoComplete}
        style={{ background: '#f7f7f7', border: '1px solid #eee', ...sx }}
      />
      <InputLabel className='form__label' htmlFor={name}>
        {label}
      </InputLabel>
    </InputBox>
    {errorText && (
      <label style={{ color: 'red', fontSize: '0.7rem', textAlign: 'left' }}>
        {errorText}
      </label>
    )}
  </div>
);

export default Input;
