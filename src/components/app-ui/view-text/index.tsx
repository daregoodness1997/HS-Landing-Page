import { Box } from '@mui/material';
import React from 'react';

interface Props {
  label: string;
  text: string;
}

const ViewText: React.FC<Props> = ({ label, text }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <h3 style={{ fontSize: '0.75rem' }}>{label}</h3>
      <p style={{ color: '#000', fontWeight:'bold' }}>{text}</p>
    </Box>
  );
};

export default ViewText;
