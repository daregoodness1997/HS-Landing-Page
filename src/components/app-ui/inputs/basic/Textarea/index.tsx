import React, { TextareaHTMLAttributes, useRef } from 'react';
import { InputBox, InputLabel } from '../Input/styles';

import { TextareaField } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  errorText?: string;
  register?: any;
  placeholder?: string;
  sx?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  register,
  sx,
  ...props
}) => (
  <div>
    <InputBox style={{ height: '80px' }}>
      <TextareaField
        ref={useRef()}
        placeholder={placeholder}
        style={{ background: '#f7f7f7', border: '1px solid #eee' }}
        {...props}
        {...register}
      />
      <InputLabel>{label}</InputLabel>
    </InputBox>
  </div>
);

export default Textarea;
