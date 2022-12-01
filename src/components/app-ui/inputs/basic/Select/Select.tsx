import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select as CustomSelect,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';
import { InputBox, InputLabel } from '../Input/styles';

interface CustomSelectProps {
  value?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  handleChange?: () => void;
  options: { label: string; value: string }[];
  style?: any;
  register?: any;
  error?: any;
  errorText?: string;
}

const Select: React.FC<CustomSelectProps> = ({
  value,
  label,
  name,
  options,
  placeholder,
  handleChange,
  style,
  register,
  error,
  errorText,
}) => {
  const renderOptions = () => {
    if (options)
      return (
        <>
          <option value='' disabled selected>
            {placeholder}
          </option>
          {options.map((option, key) => (
            <option key={key} value={option.value}>
              {option.label}
            </option>
          ))}
        </>
      );
  };
  return (
    <>
      <div>
        <InputBox>
          <select
            id='simple-select'
            className='select'
            value={value}
            name={name}
            onChange={handleChange}
            style={{
              background: '#f7f7f7',
              border: '1px solid #eee',
              height: '48px',
              width: '100%',
            }}
            {...register}
          >
            {renderOptions()}
          </select>
          <InputLabel className='form__label' htmlFor={name}>
            {label}
          </InputLabel>
        </InputBox>
        {errorText && (
          <label
            style={{ color: 'red', fontSize: '0.7rem', textAlign: 'left' }}
          >
            {errorText}
          </label>
        )}
      </div>
    </>
  );
};

export default Select;
