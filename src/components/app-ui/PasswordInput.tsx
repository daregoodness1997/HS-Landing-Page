import React, { useState } from 'react';
import { InputBox, InputField, InputLabel } from './style';

interface PasswordProps {
  label?: string;
  name?: string;
  onChange?: (e?: any) => void;
  errors?: any;
  register?: any;
}

const PasswordInput: React.FC<PasswordProps> = ({
  label = 'Password',
  name,
  onChange,
  errors,
  register,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <InputBox>
        <InputField
          className='form__input'
          onChange={onChange}
          type={showPassword ? 'text' : 'password'}
          // placeholder='Password'
          name={name}
          style={{ background: '#f7f7f7', border: '1px solid #eee' }}
          {...register}
        />
        <InputLabel className='form__label' htmlFor={label}>
          {label}
        </InputLabel>
        <span onClick={handleClickShowPassword}>
          {showPassword ? (
            <i className='bi bi-eye-slash-fill'></i>
          ) : (
            <i className={' bi bi-eye-fill'}></i>
          )}
        </span>
      </InputBox>

      {errors && (
        <p>
          <label
            style={{ color: 'red', fontSize: '0.7rem', textAlign: 'left' }}
          >
            {errors}
          </label>
        </p>
      )}
    </div>
  );
};

export default PasswordInput;
