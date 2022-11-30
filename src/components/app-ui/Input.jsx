import React from 'react';
import { InputBox, InputField, InputLabel } from './style';

const Input = ({
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
}) => {
  return (
    <div>
      <InputBox>
        <InputField
          className='form_checkbox'
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
          style={{ background: '#f7f7f7', ...sx }}
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
};

export default Input;
